
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import FindBlood from "./components/FindBlood";
import EmergencyRequest from "./components/EmergencyRequest";
import BloodBanks from "./components/BloodBanks";
import ChatBot from "./components/Chatbot";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // Apply dark mode to the whole website
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300 ${
        darkMode
          ? "bg-black text-white"
          : "bg-white text-gray-900"
      }`}
    >
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <main className="min-h-screen w-full">
        <Routes>
          <Route
            path="/"
            element={<Home darkMode={darkMode} />}
          />

          <Route
            path="/Home"
            element={<Home darkMode={darkMode} />}
          />

          <Route
            path="/FindBlood"
            element={<FindBlood darkMode={darkMode} />}
          />

          <Route
            path="/EmergencyRequest"
            element={<EmergencyRequest darkMode={darkMode} />}
          />

          <Route
            path="/BloodBanks"
            element={<BloodBanks darkMode={darkMode} />}
          />
        </Routes>
      </main>

      <ChatBot />
    </div>
  );
};

export default App;
