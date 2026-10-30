const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// Test backend and database
app.get("/", async (req, res) => {
    try {
        await db.query("SELECT 1");
        res.send("BloodLink backend and database connected!");
    } catch (error) {
        res.status(500).json({ error: "Database connection failed" });
    }
});

// 1. Register a donor
app.post("/api/donors/register", async (req, res) => {
    try {
        const { name, blood_group, phone } = req.body;

        if (!name || !blood_group || !phone) {
            return res.status(400).json({
                message: "Name, blood group and phone are required"
            });
        }

        const validGroups = [
            "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"
        ];

        if (!validGroups.includes(blood_group)) {
            return res.status(400).json({
                message: "Invalid blood group"
            });
        }

        const sql = `
            INSERT INTO donors (name, blood_group, phone)
            VALUES (?, ?, ?)
        `;

        const [result] = await db.query(sql, [
            name,
            blood_group,
            phone
        ]);

        res.status(201).json({
            message: "Donor registered successfully",
            donorId: result.insertId
        });
    } catch (error) {
        if (error.code === "ER_DUP_ENTRY") {
            return res.status(409).json({
                message: "This phone number is already registered"
            });
        }

        res.status(500).json({ error: "Server error" });
    }
});

// 2. Save donor's current location
app.put("/api/donors/:id/location", async (req, res) => {
    try {
        const { latitude, longitude } = req.body;
        const id = Number(req.params.id);

        if (
            !Number.isInteger(id) || id < 1 ||
            typeof latitude !== "number" ||
            typeof longitude !== "number" ||
            latitude < -90 || latitude > 90 ||
            longitude < -180 || longitude > 180
        ) {
            return res.status(400).json({
                message: "Valid donor ID and GPS coordinates are required"
            });
        }

        const [result] = await db.query(
            `UPDATE donors
             SET latitude = ?, longitude = ?
             WHERE id = ?`,
            [latitude, longitude, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Donor not found"
            });
        }

        res.json({ message: "Location saved successfully" });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

// 3. Change donor availability
app.patch("/api/donors/:id/availability", async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { available } = req.body;

        if (
            !Number.isInteger(id) || id < 1 ||
            typeof available !== "boolean"
        ) {
            return res.status(400).json({
                message: "Valid donor ID and availability are required"
            });
        }

        const [result] = await db.query(
            "UPDATE donors SET available = ? WHERE id = ?",
            [available, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Donor not found"
            });
        }

        res.json({ message: "Availability updated successfully" });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

// 4. Find nearby available donors
app.get("/api/donors/nearby", async (req, res) => {
    try {
        const latitude = Number(req.query.latitude);
        const longitude = Number(req.query.longitude);
        const radius = Number(req.query.radius || 10);
        const bloodGroup = req.query.bloodGroup;

        if (
            req.query.latitude === undefined ||
            req.query.longitude === undefined ||
            !Number.isFinite(latitude) ||
            !Number.isFinite(longitude) ||
            latitude < -90 || latitude > 90 ||
            longitude < -180 || longitude > 180 ||
            !Number.isFinite(radius) || radius <= 0 || radius > 100
        ) {
            return res.status(400).json({
                message: "Valid latitude, longitude and radius are required"
            });
        }

        const validGroups = [
            "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"
        ];

        if (bloodGroup && !validGroups.includes(bloodGroup)) {
            return res.status(400).json({
                message: "Invalid blood group"
            });
        }

        let sql = `
            SELECT
                id, name, blood_group, phone,
                latitude, longitude,
                (
                    6371 * ACOS(
                        LEAST(1, GREATEST(-1,
                            COS(RADIANS(?)) *
                            COS(RADIANS(latitude)) *
                            COS(RADIANS(longitude) - RADIANS(?)) +
                            SIN(RADIANS(?)) *
                            SIN(RADIANS(latitude))
                        ))
                    )
                ) AS distance
            FROM donors
            WHERE available = TRUE
              AND latitude IS NOT NULL
              AND longitude IS NOT NULL
        `;

        const params = [latitude, longitude, latitude];

        if (bloodGroup) {
            sql += " AND blood_group = ?";
            params.push(bloodGroup);
        }

        sql += `
            HAVING distance <= ?
            ORDER BY distance ASC
        `;

        params.push(radius);

        const [donors] = await db.query(sql, params);

        res.json({
            count: donors.length,
            donors
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Could not find donors" });
    }
});

// Start server
const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
    console.log(`BloodLink backend running on port ${PORT}`);
});