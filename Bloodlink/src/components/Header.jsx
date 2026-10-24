import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navStyle = ({ isActive }) =>
    `px-5 py-3 rounded-full text-base font-medium transition-all duration-300 ${
      isActive
        ? darkMode
          ? "bg-red-900 text-red-300"
          : "bg-red-50 text-red-700"
        : darkMode
        ? "text-gray-300 hover:text-red-400"
        : "text-gray-700 hover:text-red-700"
    }`;

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        alert(
          `Latitude: ${position.coords.latitude}\nLongitude: ${position.coords.longitude}`
        );
      },
      () => {
        alert("Location permission denied");
      }
    );
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        darkMode
          ? "bg-gray-900 border-gray-700"
          : "bg-white border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/Home" className="flex items-center gap-3">
          <svg
            className="w-7 h-7 text-red-600"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C12 2 5 10 5 15.5C5 19.64 8.13 22 12 22C15.87 22 19 19.64 19 15.5C19 10 12 2 12 2Z" />
          </svg>

          <span
            className={`text-2xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            BloodLink
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">

          <NavLink to="/" className={navStyle}>
            Home
          </NavLink>

          <NavLink to="/FindBlood" className={navStyle}>
            Find blood
          </NavLink>

          <NavLink to="/EmergencyRequest" className={navStyle}>
            Request blood
          </NavLink>

          <NavLink to="/BloodBanks" className={navStyle}>
            Donor dashboard
          </NavLink>

        </nav>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex items-center gap-3">

          <button
            onClick={getLocation}
            className={`flex items-center gap-2 px-5 py-3 border rounded-full ${
              darkMode
                ? "border-gray-600 text-white hover:border-red-500"
                : "border-gray-300 text-gray-800 hover:border-red-500"
            }`}
          >
            <span>📍</span>
            <span>Set location</span>
          </button>

          <button
            onClick={toggleDarkMode}
            className={`w-12 h-12 flex items-center justify-center border rounded-full ${
              darkMode
                ? "border-gray-600 bg-gray-800 text-yellow-400"
                : "border-gray-300 bg-white text-gray-900"
            }`}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden w-11 h-11 flex items-center justify-center rounded-lg text-2xl ${
            darkMode
              ? "bg-gray-800 text-white"
              : "bg-gray-100 text-gray-900"
          }`}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`lg:hidden px-6 pb-5 border-t ${
            darkMode
              ? "bg-gray-900 border-gray-700"
              : "bg-white border-gray-100"
          }`}
        >

          <nav className="flex flex-col gap-2 pt-4">

            <NavLink
              to="/"
              className={navStyle}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/FindBlood"
              className={navStyle}
              onClick={() => setMenuOpen(false)}
            >
              Find blood
            </NavLink>

            <NavLink
              to="/EmergencyRequest"
              className={navStyle}
              onClick={() => setMenuOpen(false)}
            >
              Request blood
            </NavLink>

            <NavLink
              to="/BloodBanks"
              className={navStyle}
              onClick={() => setMenuOpen(false)}
            >
              Donor dashboard
            </NavLink>

            {/* Location */}
            <button
              onClick={getLocation}
              className={`flex items-center gap-2 px-5 py-3 rounded-full border ${
                darkMode
                  ? "border-gray-600 text-white"
                  : "border-gray-300 text-gray-800"
              }`}
            >
              📍 Set location
            </button>

            {/* Dark Mode */}
            <button
              onClick={toggleDarkMode}
              className={`px-5 py-3 rounded-full border text-left ${
                darkMode
                  ? "border-gray-600 text-yellow-400"
                  : "border-gray-300 text-gray-900"
              }`}
            >
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>

          </nav>

        </div>
      )}
    </header>
  );
};

export default Header;