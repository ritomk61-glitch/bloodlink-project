
import React, { useMemo, useState } from "react";

const bloodGroups = [
  "O+", "O-", "A+", "A-",
  "B+", "B-", "AB+", "AB-",
];

const donors = [
  { id: 1, name: "Aditi Rao", group: "O+", distance: 1.2, lastDonation: "2 months ago", available: true, area: "Saket, New Delhi" },
  { id: 2, name: "Vikram Singh", group: "A-", distance: 2.4, lastDonation: "5 months ago", available: true, area: "Saket, New Delhi" },
  { id: 3, name: "Meera Nair", group: "B+", distance: 3.1, lastDonation: "1 month ago", available: true, area: "Saket, New Delhi" },
  { id: 4, name: "Priya Verma", group: "AB+", distance: 4.8, lastDonation: "6 months ago", available: true, area: "Saket, New Delhi" },
  { id: 5, name: "Rahul Sharma", group: "O-", distance: 6.2, lastDonation: "4 months ago", available: false, area: "Greater Kailash, New Delhi" },
  { id: 6, name: "Ananya Das", group: "A+", distance: 2.8, lastDonation: "3 months ago", available: true, area: "Malviya Nagar, New Delhi" },
];

const compatibleGroups = {
  "O+": ["O+", "O-"],
  "O-": ["O-"],
  "A+": ["A+", "A-", "O+", "O-"],
  "A-": ["A-", "O-"],
  "B+": ["B+", "B-", "O+", "O-"],
  "B-": ["B-", "O-"],
  "AB+": ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  "AB-": ["A-", "B-", "AB-", "O-"],
};

const FindBlood = ({ darkMode = false }) => {
  const [bloodGroup, setBloodGroup] = useState("O+");
  const [city, setCity] = useState("Saket, New Delhi");
  const [radius, setRadius] = useState(5);
  const [availableOnly, setAvailableOnly] = useState(true);
  const [view, setView] = useState("list");
  const [searched, setSearched] = useState(true);
  const [selectedDonor, setSelectedDonor] = useState(null);

  const filteredDonors = useMemo(() => {
    if (!searched) return [];

    return donors.filter((donor) => {
      const compatible = compatibleGroups[bloodGroup].includes(donor.group);
      const nearby = donor.distance <= radius;
      const available = !availableOnly || donor.available;
      const location = donor.area.toLowerCase().includes(city.trim().toLowerCase());

      return compatible && nearby && available && location;
    });
  }, [bloodGroup, city, radius, availableOnly, searched]);

  const pageBg = darkMode
    ? "bg-[#101827] text-white"
    : "bg-white text-gray-900";

  const cardBg = darkMode
    ? "border-[#2A3548] bg-[#182234]"
    : "border-gray-200 bg-gray-50";

  const mutedText = darkMode ? "text-gray-300" : "text-gray-600";

  const inputStyle = darkMode
    ? "border-[#2A3548] bg-[#182234] text-white placeholder-gray-400"
    : "border-gray-300 bg-white text-gray-900";

  return (
    <main className={`min-h-screen px-4 py-10 transition-colors duration-300 sm:px-6 lg:px-10 ${pageBg}`}>
      <div className="mx-auto max-w-[1440px]">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Find a compatible donor
          </h1>
          <p className={`mt-3 text-sm sm:text-lg ${mutedText}`}>
            Filter by blood group and distance — results update as you search.
          </p>
        </header>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[350px_minmax(0,1fr)]">
          <aside className={`rounded-2xl border p-5 sm:p-6 ${cardBg}`}>
            <label className="mb-3 block text-sm font-semibold">
              Blood group needed
            </label>

            <div className="grid grid-cols-4 gap-2">
              {bloodGroups.map((group) => (
                <button
                  key={group}
                  type="button"
                  onClick={() => setBloodGroup(group)}
                  className={`rounded-full border px-2 py-3 text-sm font-semibold transition ${
                    bloodGroup === group
                      ? "border-rose-500 bg-rose-500 text-white"
                      : darkMode
                      ? "border-[#2A3548] text-gray-100 hover:border-rose-500"
                      : "border-gray-300 text-gray-800 hover:border-rose-500"
                  }`}
                >
                  {group}
                </button>
              ))}
            </div>

            <label htmlFor="donor-city" className="mb-3 mt-6 block text-sm font-semibold">
              Area or city
            </label>
            <input
              id="donor-city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter area or city"
              className={`w-full rounded-xl border px-4 py-4 text-sm outline-none focus:border-rose-500 ${inputStyle}`}
            />

            <div className="mt-6">
              <div className="mb-3 flex items-center justify-between">
                <label htmlFor="donor-radius" className="text-sm font-semibold">
                  Search radius
                </label>
                <span className="rounded-full bg-rose-100 px-3 py-1 text-sm font-semibold text-rose-600">
                  {radius} km
                </span>
              </div>
              <input
                id="donor-radius"
                type="range"
                min="1"
                max="20"
                value={radius}
                onChange={(e) => setRadius(Number(e.target.value))}
                className="w-full cursor-pointer accent-rose-500"
              />
              <div className={`mt-1 flex justify-between text-xs ${mutedText}`}>
                <span>1 km</span><span>20 km</span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-3">
              <label htmlFor="available-only" className="cursor-pointer text-sm font-semibold">
                Available now only
              </label>
              <button
                id="available-only"
                type="button"
                role="switch"
                aria-checked={availableOnly}
                onClick={() => setAvailableOnly((prev) => !prev)}
                className={`relative h-8 w-14 shrink-0 rounded-full transition ${
                  availableOnly ? "bg-emerald-500" : "bg-gray-500"
                }`}
              >
                <span className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow transition-all ${availableOnly ? "left-7" : "left-1"}`} />
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                setSearched(true);
                setSelectedDonor(null);
              }}
              className="mt-7 w-full rounded-full bg-rose-500 px-5 py-4 font-bold text-white transition hover:bg-rose-600"
            >
              Search donors
            </button>

            <p className={`mt-3 text-xs leading-5 ${mutedText}`}>
              Compatibility is based on red blood cell transfusion rules.
              Always confirm blood type and eligibility with a medical professional.
            </p>
          </aside>

          <section className="min-w-0">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
              <p className={`text-base ${mutedText}`}>
                <span className="font-bold">{filteredDonors.length}</span> donors found
              </p>

              <div className={`flex rounded-full p-1 ${darkMode ? "bg-[#182234]" : "bg-gray-100"}`}>
                {["list", "map"].map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setView(mode)}
                    className={`rounded-full px-5 py-2 text-sm font-semibold capitalize ${
                      view === mode
                        ? darkMode
                          ? "bg-[#2A3548] text-rose-400"
                          : "bg-white text-rose-600 shadow-sm"
                        : mutedText
                    }`}
                  >
                    {mode === "map" ? "Map" : "List"}
                  </button>
                ))}
              </div>
            </div>

            {view === "list" && (
              <div className="space-y-4">
                {filteredDonors.map((donor) => (
                  <article key={donor.id} className={`rounded-2xl border p-4 transition hover:border-rose-400 sm:p-5 ${cardBg}`}>
                    <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                      <div className="flex min-w-0 items-center gap-3">
                        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-base font-bold ${
                          darkMode ? "bg-[#351c2a] text-rose-300" : "bg-rose-100 text-rose-600"
                        }`}>
                          {donor.name.split(" ").map((part) => part[0]).join("")}
                        </div>

                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <h2 className="font-bold">{donor.name}</h2>
                            <span className="rounded-md bg-rose-100 px-2 py-1 text-xs font-bold text-rose-600">
                              {donor.group}
                            </span>
                          </div>
                          <p className={`mt-1 flex items-center gap-2 text-sm ${mutedText}`}>
                            <span className={`h-2 w-2 rounded-full ${donor.available ? "bg-emerald-500" : "bg-gray-400"}`} />
                            {donor.available ? "Available now" : "Currently unavailable"}
                          </p>
                          <p className={`mt-1 text-xs ${mutedText}`}>{donor.area}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-sm xl:min-w-[280px]">
                        <div>
                          <p className="font-bold">{donor.distance} km</p>
                          <p className={`mt-1 ${mutedText}`}>away</p>
                        </div>
                        <div>
                          <p className="font-semibold">{donor.lastDonation}</p>
                          <p className={`mt-1 ${mutedText}`}>Last donated</p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setSelectedDonor(donor)}
                        className={`w-full shrink-0 rounded-full border px-5 py-3 text-sm font-bold transition hover:bg-rose-500 hover:text-white sm:w-auto ${
                          darkMode ? "border-[#2A3548] text-white" : "border-rose-300 text-rose-600"
                        }`}
                      >
                        Request contact
                      </button>
                    </div>
                  </article>
                ))}

                {filteredDonors.length === 0 && (
                  <div className={`rounded-2xl border border-dashed px-5 py-14 text-center ${cardBg}`}>
                    <div className="text-4xl">🩸</div>
                    <h3 className="mt-4 text-lg font-bold">No compatible donors found</h3>
                    <p className={`mt-2 text-sm ${mutedText}`}>
                      Try increasing the search radius or changing the location.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setRadius(20);
                        setAvailableOnly(false);
                        setSearched(true);
                      }}
                      className="mt-5 rounded-full bg-rose-500 px-5 py-3 text-sm font-bold text-white hover:bg-rose-600"
                    >
                      Expand search
                    </button>
                  </div>
                )}
              </div>
            )}

            {view === "map" && (
              <div className={`flex min-h-[360px] flex-col items-center justify-center rounded-2xl border p-6 text-center ${cardBg}`}>
                <span className="text-5xl">📍</span>
                <h2 className="mt-4 text-xl font-bold">Donor locations</h2>
                <p className={`mt-2 max-w-md text-sm leading-6 ${mutedText}`}>
                  {filteredDonors.length} matching demo donors in your search.
                  Connect a map service to display real geographical locations.
                </p>
                <div className="mt-6 grid w-full max-w-md grid-cols-1 gap-2 sm:grid-cols-2">
                  {filteredDonors.map((donor) => (
                    <div key={donor.id} className={`rounded-xl border p-3 text-left ${
                      darkMode ? "border-[#2A3548] bg-[#182234]" : "border-gray-200 bg-white"
                    }`}>
                      <p className="font-semibold">{donor.name}</p>
                      <p className="mt-1 text-sm text-rose-500">{donor.group} · {donor.distance} km</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>
      </div>

      {selectedDonor && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setSelectedDonor(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-dialog-title"
            onClick={(e) => e.stopPropagation()}
            className={`w-full max-w-md rounded-2xl border p-6 shadow-2xl sm:p-7 ${
              darkMode ? "border-[#2A3548] bg-[#182234] text-white" : "border-gray-200 bg-white text-gray-900"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id="contact-dialog-title" className="text-xl font-bold">
                  Request donor contact
                </h2>
                <p className={`mt-2 text-sm ${mutedText}`}>
                  You selected {selectedDonor.name}, blood group {selectedDonor.group}.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedDonor(null)}
                aria-label="Close dialog"
                className="rounded-lg px-2 py-1 text-xl hover:bg-gray-500/20"
              >
                ×
              </button>
            </div>

            <div className={`mt-5 rounded-xl p-4 text-sm ${darkMode ? "bg-[#101827]" : "bg-gray-50"}`}>
              <p><span className="font-semibold">Location:</span> {selectedDonor.area}</p>
              <p className="mt-2"><span className="font-semibold">Distance:</span> {selectedDonor.distance} km</p>
            </div>

            <p className={`mt-4 text-sm leading-6 ${mutedText}`}>
              This is a frontend demo. No real contact request is sent.
              Connect your backend to send a verified request to the donor.
            </p>

            <button
              type="button"
              onClick={() => setSelectedDonor(null)}
              className="mt-6 w-full rounded-full bg-rose-500 px-5 py-3 font-bold text-white hover:bg-rose-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default FindBlood;
