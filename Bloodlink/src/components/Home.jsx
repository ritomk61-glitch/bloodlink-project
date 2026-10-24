import React from 'react'
import { Link } from "react-router-dom";

const Home = ({ darkMode }) => {

  const bloodGroups = [
    {
      group: "O+",
      units: "186",
      percentage: "92%",
      status: "Healthy stock",
      statusColor: "text-emerald-700",
      barColor: "bg-emerald-700",
    },
    {
      group: "O-",
      units: "22",
      percentage: "12%",
      status: "Critical shortage",
      statusColor: "text-rose-700",
      barColor: "bg-rose-700",
    },
    {
      group: "A+",
      units: "140",
      percentage: "68%",
      status: "Healthy stock",
      statusColor: "text-emerald-700",
      barColor: "bg-emerald-700",
    },
    {
      group: "A-",
      units: "38",
      percentage: "19%",
      status: "Running low",
      statusColor: "text-amber-600",
      barColor: "bg-amber-600",
    },
    {
      group: "B+",
      units: "97",
      percentage: "49%",
      status: "Healthy stock",
      statusColor: "text-emerald-700",
      barColor: "bg-emerald-700",
    },
    {
      group: "B-",
      units: "19",
      percentage: "10%",
      status: "Critical shortage",
      statusColor: "text-rose-700",
      barColor: "bg-rose-700",
    },
    {
      group: "AB+",
      units: "64",
      percentage: "31%",
      status: "Running low",
      statusColor: "text-amber-600",
      barColor: "bg-amber-600",
    },
    {
      group: "AB-",
      units: "11",
      percentage: "7%",
      status: "Critical shortage",
      statusColor: "text-rose-700",
      barColor: "bg-rose-700",
    },
  ];

  return (
    <div
      className={`min-h-screen w-full overflow-x-hidden transition-colors duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-stone-50 text-stone-900"
      }`}
    >

      {/* HERO SECTION */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-11">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="w-full">

            <div className="mb-6 inline-flex max-w-full items-center rounded-full bg-rose-100 px-3 py-2 text-xs font-semibold text-rose-700 sm:mb-8 sm:px-4 sm:text-sm">
              <span className="mr-2 text-xs">●</span>
              <span>Live network · 214 donors active near you</span>
            </div>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Find blood.
              <br />
              Find hope.{" "}
              <span className="text-rose-700">Faster.</span>
            </h1>

            <p
              className={`mt-5 max-w-xl text-base leading-7 sm:mt-7 sm:text-lg sm:leading-8 ${
                darkMode ? "text-gray-300" : "text-stone-600"
              }`}
            >
              BloodLink connects patients, verified donors, hospitals and
              blood banks in one place — so a compatible donor is minutes
              away, not hours of phone calls.
            </p>

            {/* BUTTONS */}
            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">

              <Link
                to="/FindBlood"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-700 px-6 py-3 text-sm font-semibold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-rose-800 sm:px-8 sm:py-4 sm:text-base"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="6.5"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M16 16L21 21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                Find blood
              </Link>

              <Link
                to="/EmergencyRequest"
                className={`inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition duration-200 sm:px-8 sm:py-4 sm:text-base ${
                  darkMode
                    ? "border-gray-600 text-white hover:bg-gray-800"
                    : "border-stone-300 text-stone-900 hover:bg-white"
                }`}
              >
                Request blood now
              </Link>

            </div>

            {/* STATS */}
            <div className="mt-10 grid max-w-lg grid-cols-3 gap-3 sm:mt-12 sm:gap-4">

              <div>
                <h3 className="text-xl font-bold sm:text-2xl">
                  12,400+
                </h3>
                <p
                  className={`mt-1 text-xs sm:text-sm ${
                    darkMode ? "text-gray-400" : "text-stone-500"
                  }`}
                >
                  Verified donors
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold sm:text-2xl">
                  38
                </h3>
                <p
                  className={`mt-1 text-xs sm:text-sm ${
                    darkMode ? "text-gray-400" : "text-stone-500"
                  }`}
                >
                  Partner hospitals
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold sm:text-2xl">
                  &lt;9 min
                </h3>
                <p
                  className={`mt-1 text-xs sm:text-sm ${
                    darkMode ? "text-gray-400" : "text-stone-500"
                  }`}
                >
                  Avg. donor response
                </p>
              </div>

            </div>

          </div>

          {/* RADAR */}
          <div className="flex min-h-72 w-full items-center justify-center sm:min-h-96">

            <div className="relative h-72 w-72 max-w-full sm:h-96 sm:w-96">

              <div className="absolute inset-0 rounded-full border border-rose-200" />
              <div className="absolute inset-1/5 rounded-full border border-rose-200" />
              <div className="absolute inset-1/3 rounded-full border border-rose-200" />

              <div
                className="absolute inset-0 rounded-full"
                style={{
                  animation: "rotateRadar 4s linear infinite",
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, transparent 300deg, rgba(197,22,63,0.02) 320deg, rgba(197,22,63,0.18) 350deg, transparent 360deg)",
                }}
              />

              <div
                className="absolute left-1/2 top-1/2 h-2/5 w-px origin-top -translate-x-1/2 bg-rose-300"
                style={{
                  animation: "rotateRadar 4s linear infinite",
                }}
              />

              <div className="absolute left-2/3 top-1/4 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-100 p-1 sm:h-7 sm:w-7">
                <div className="h-full w-full rounded-full bg-emerald-700" />
              </div>

              <div className="absolute left-1/5 top-2/5 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-100 p-1 sm:h-7 sm:w-7">
                <div className="h-full w-full rounded-full bg-emerald-700" />
              </div>

              <div className="absolute left-3/4 top-2/3 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-100 p-1 sm:h-7 sm:w-7">
                <div className="h-full w-full rounded-full bg-emerald-700" />
              </div>

              <div className="absolute left-1/4 top-3/4 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-100 p-1 sm:h-7 sm:w-7">
                <div className="h-full w-full rounded-full bg-emerald-700" />
              </div>

              <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-rose-700 shadow-lg sm:h-16 sm:w-16">
                <svg
                  width="28"
                  height="35"
                  viewBox="0 0 28 35"
                  fill="none"
                >
                  <path
                    d="M14 0C14 0 3 14.1 3 22C3 29.1 7.9 34 14 34C20.1 34 25 29.1 25 22C25 14.1 14 0 14 0Z"
                    fill="white"
                  />
                </svg>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* LOCATION */}
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-7 lg:px-10">

        <div
          className={`flex flex-col gap-5 rounded-3xl px-5 py-5 sm:px-7 sm:py-6 md:flex-row md:items-center md:justify-between ${
            darkMode ? "bg-gray-800" : "bg-stone-200/60"
          }`}
        >

          <div className="flex items-start gap-4 sm:items-center">

            <div className="text-rose-700">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20 10C20 15 12 21 12 21C12 21 4 15 4 10C4 5.58 7.58 2 12 2C16.42 2 20 5.58 20 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle
                  cx="12"
                  cy="10"
                  r="2.5"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <div>
              <p className="text-sm font-bold sm:text-base">
                Searching from{" "}
                <span
                  className={
                    darkMode ? "text-gray-400" : "text-stone-500"
                  }
                >
                  Delhi NCR
                </span>
              </p>

              <p
                className={`mt-1 text-xs sm:text-sm ${
                  darkMode ? "text-gray-400" : "text-stone-500"
                }`}
              >
                Availability below updates for your area
              </p>
            </div>

          </div>

          <button
            className={`w-full rounded-full px-6 py-3 text-sm font-semibold sm:w-auto ${
              darkMode
                ? "bg-gray-700 text-white"
                : "bg-white text-gray-900"
            }`}
          >
            Change location
          </button>

        </div>
      </section>

      {/* LIVE BLOOD AVAILABILITY */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-10">

        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
          Live blood group availability
        </h2>

        <p
          className={`mt-2 text-sm sm:text-base md:text-lg ${
            darkMode ? "text-gray-400" : "text-stone-600"
          }`}
        >
          Reported by partner blood banks in your area, updated continuously.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">

          {bloodGroups.map((blood) => (

            <div
              key={blood.group}
              className={`rounded-2xl border p-5 sm:p-6 ${
                darkMode
                  ? "border-gray-700 bg-gray-800"
                  : "border-stone-200 bg-white"
              }`}
            >

              <h3 className="text-xl font-bold">
                {blood.group}
              </h3>

              <p
                className={`mt-2 text-sm ${
                  darkMode ? "text-gray-400" : "text-stone-500"
                }`}
              >
                {blood.units} units available
              </p>

              <div
                className={`mt-4 h-1.5 overflow-hidden rounded-full ${
                  darkMode ? "bg-gray-700" : "bg-stone-200"
                }`}
              >
                <div
                  className={`h-full rounded-full ${blood.barColor}`}
                  style={{
                    width: blood.percentage,
                  }}
                />
              </div>

              <p
                className={`mt-3 flex items-center gap-2 text-sm font-semibold ${blood.statusColor}`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                {blood.status}
              </p>

            </div>

          ))}

        </div>
      </section>

      {/* DONORS NEAR YOU */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-10">

        <div className="mb-7 flex items-end justify-between sm:mb-9">

          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Donors near you
            </h2>

            <p
              className={`mt-2 text-sm sm:text-base md:text-lg ${
                darkMode ? "text-gray-400" : "text-stone-600"
              }`}
            >
              A snapshot of available donors closest to your location right now.
            </p>
          </div>

          <Link
            to="/FindBlood"
            className="hidden text-base font-semibold text-rose-700 sm:block"
          >
            See all donors →
          </Link>

        </div>

        <div className="grid gap-5 lg:grid-cols-3">

          <DonorCard
            initials="AR"
            name="Aditi Rao"
            group="O+"
            distance="1.2 km"
            lastDonated="2 months ago"
            darkMode={darkMode}
          />

          <DonorCard
            initials="VS"
            name="Vikram Singh"
            group="A-"
            distance="2.4 km"
            lastDonated="5 months ago"
            darkMode={darkMode}
          />

          <DonorCard
            initials="MN"
            name="Meera Nair"
            group="B+"
            distance="3.1 km"
            lastDonated="1 month ago"
            darkMode={darkMode}
          />

        </div>
      </section>

      {/* BECOME DONOR */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-10">

        <div className="grid gap-8 rounded-3xl bg-stone-900 p-6 text-white sm:gap-10 sm:p-10 lg:grid-cols-2 lg:p-16">

          <div>

            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Become a donor. Save a life you’ll never meet.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-stone-300 sm:text-base sm:leading-8 md:text-lg">
              One donation can help up to three patients. Registered donors
              control their own availability and only get notified for genuine,
              verified requests near them.
            </p>

            <div className="mt-7 space-y-4 sm:mt-8">

              <p className="flex gap-3 text-sm text-stone-200 sm:text-base">
                <span className="text-rose-600">✓</span>
                Get notified only for matching blood groups nearby
              </p>

              <p className="flex gap-3 text-sm text-stone-200 sm:text-base">
                <span className="text-rose-600">✓</span>
                Toggle your availability anytime
              </p>

              <p className="flex gap-3 text-sm text-stone-200 sm:text-base">
                <span className="text-rose-600">✓</span>
                Track your donation history and eligibility
              </p>

            </div>

            <Link
              to="/BloodBanks"
              className="mt-8 inline-block rounded-full bg-rose-700 px-6 py-3 text-sm font-bold shadow-lg transition hover:bg-rose-800 sm:mt-9 sm:px-8 sm:py-4 sm:text-base"
            >
              Register as a donor
            </Link>

          </div>

          <div className="flex items-center">

            <div className="w-full rounded-2xl bg-stone-800 px-5 py-3 sm:px-8 sm:py-4">

              <StatRow
                title="Donors registered this month"
                value="1,842"
              />

              <StatRow
                title="Lives supported this year"
                value="9,510"
              />

              <StatRow
                title="Avg. time to first match"
                value="7.4 min"
                last
              />

            </div>

          </div>

        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-10">

        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
          Built to be trusted in an emergency
        </h2>

        <div className="mt-10 grid gap-10 md:mt-12 md:grid-cols-3 md:gap-14">

          <TrustCard
            icon="♢"
            title="Verified donor identity"
            text="Donor profiles are checked before they can appear in search results — not just self-reported and published instantly."
            darkMode={darkMode}
          />

          <TrustCard
            icon="♧"
            title="Contact stays gated"
            text="Requesting contact routes through a verified request — a donor's phone number is never shown to the public directly."
            darkMode={darkMode}
          />

          <TrustCard
            icon="◷"
            title="Monitored around the clock"
            text="Emergency requests are never queued behind business hours — the matching pipeline runs 24/7."
            darkMode={darkMode}
          />

        </div>
      </section>

      {/* FOOTER */}
      <footer
        className={`border-t ${
          darkMode ? "border-gray-700" : "border-stone-200"
        }`}
      >

        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-10">

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">

            <div>

              <div className="flex items-center gap-3">

                <span className="text-3xl text-rose-700">
                  ♥
                </span>

                <span className="text-2xl font-bold">
                  BloodLink
                </span>

              </div>

              <p
                className={`mt-4 max-w-xs text-sm leading-6 ${
                  darkMode ? "text-gray-400" : "text-stone-500"
                }`}
              >
                A prototype UI for a college capstone project — not a live
                medical service.
              </p>

            </div>

            <div>

              <h3
                className={
                  darkMode
                    ? "font-semibold text-gray-400"
                    : "font-semibold text-stone-500"
                }
              >
                Platform
              </h3>

              <div className="mt-5 space-y-4 text-sm">

                <Link
                  to="/FindBlood"
                  className="block hover:text-rose-700"
                >
                  Find blood
                </Link>

                <Link
                  to="/Request blood"
                  className="block hover:text-rose-700"
                >
                  Request blood
                </Link>

                <Link
                  to="/BecomeDonor"
                  className="block hover:text-rose-700"
                >
                  Donor dashboard
                </Link>

              </div>

            </div>

            <div>

              <h3
                className={
                  darkMode
                    ? "font-semibold text-gray-400"
                    : "font-semibold text-stone-500"
                }
              >
                Organizations
              </h3>

              <div className="mt-5 space-y-4 text-sm">

                <p>Hospitals</p>

                <Link
                  to="/BloodBanks"
                  className="block hover:text-rose-700"
                >
                  Blood banks
                </Link>

                <p>NGO partners</p>

              </div>

            </div>

            <div>

              <h3
                className={
                  darkMode
                    ? "font-semibold text-gray-400"
                    : "font-semibold text-stone-500"
                }
              >
                Support
              </h3>

              <div className="mt-5 space-y-4 text-sm">

                <p>Safety & verification</p>
                <p>Contact</p>
                <p>Privacy</p>

              </div>

            </div>

          </div>

          <div
            className={`mt-10 flex flex-col gap-4 border-t pt-7 text-sm sm:mt-12 md:flex-row md:items-center md:justify-between ${
              darkMode
                ? "border-gray-700 text-gray-400"
                : "border-stone-200 text-stone-500"
            }`}
          >

            <p>
              © 2026 BloodLink. Prototype for academic use.
            </p>

            <p>
              Made for a real-world problem — blood emergencies.
            </p>

          </div>

        </div>
      </footer>

      <style>
        {`
          @keyframes rotateRadar {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>

    </div>
  );
};


/* DONOR CARD */
const DonorCard = ({
  initials,
  name,
  group,
  distance,
  lastDonated,
  darkMode,
}) => {

  return (
    <div
      className={`rounded-2xl border p-5 sm:p-6 ${
        darkMode
          ? "border-gray-700 bg-gray-800"
          : "border-stone-200 bg-white"
      }`}
    >

      <div className="flex items-center gap-4">

        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-rose-100 text-base font-bold text-rose-700">
          {initials}
        </div>

        <div className="min-w-0">

          <div className="flex flex-wrap items-center gap-2">

            <h3 className="text-base font-bold">
              {name}
            </h3>

            <span className="rounded-md bg-rose-100 px-2 py-1 text-xs font-semibold text-rose-700">
              {group}
            </span>

          </div>

          <p className="mt-1 text-sm text-emerald-700">
            ● Available now
          </p>

        </div>

      </div>

      <div
        className={`mt-5 flex flex-wrap gap-x-7 gap-y-2 text-sm ${
          darkMode ? "text-gray-400" : "text-stone-600"
        }`}
      >

        <span>
          <strong
            className={
              darkMode ? "text-white" : "text-stone-900"
            }
          >
            {distance}
          </strong>{" "}
          away
        </span>

        <span>
          Last donated{" "}
          <strong
            className={
              darkMode ? "text-white" : "text-stone-900"
            }
          >
            {lastDonated}
          </strong>
        </span>

      </div>

    </div>
  );
};


/* STAT ROW */
const StatRow = ({ title, value, last }) => {

  return (
    <div
      className={`flex items-center justify-between gap-4 py-4 ${
        !last ? "border-b border-stone-700" : ""
      }`}
    >

      <span className="text-sm text-stone-300 sm:text-base">
        {title}
      </span>

      <strong className="shrink-0 text-base">
        {value}
      </strong>

    </div>
  );
};


/* TRUST CARD */
const TrustCard = ({
  icon,
  title,
  text,
  darkMode,
}) => {

  return (
    <div>

      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-2xl text-rose-700">
        {icon}
      </div>

      <h3 className="text-lg font-bold">
        {title}
      </h3>

      <p
        className={`mt-3 max-w-md text-sm leading-7 sm:text-base ${
          darkMode ? "text-gray-400" : "text-stone-600"
        }`}
      >
        {text}
      </p>

    </div>
  );
};

export default Home;