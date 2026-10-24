
import React, { useState } from "react";

const BloodBanks = ({ darkMode = false }) => {
  const [available, setAvailable] = useState(true);
  const [requests, setRequests] = useState([
    {
      id: 1,
      hospital: "Max Hospital, Saket",
      group: "O+",
      distance: "1.1 km away",
      urgency: "critical",
      status: "pending",
    },
    {
      id: 2,
      hospital: "AIIMS Delhi",
      group: "O+",
      distance: "3.4 km away",
      urgency: "high",
      status: "pending",
    },
  ]);

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "New critical request 1.4 km away matches your blood group.",
      time: "12 min ago",
    },
    {
      id: 2,
      message: "Thank you — your last donation was confirmed by City Hospital.",
      time: "3 days ago",
    },
    {
      id: 3,
      message: "You're eligible to donate again.",
      time: "1 week ago",
    },
  ]);

  const history = [
    { date: "14 Jun 2026", location: "City Hospital, Delhi", units: 1 },
    { date: "02 Feb 2026", location: "Red Cross Camp, Saket", units: 1 },
    { date: "19 Sep 2025", location: "Apollo Hospital", units: 1 },
  ];

  const dark = darkMode;

  const pageClass = dark
    ? "bg-[#101827] text-white"
    : "bg-[#faf7f5] text-[#17131a]";

  const cardClass = dark
    ? "border-[#2A3548] bg-[#182234]"
    : "border-[#eadbd7] bg-white";

  const mutedClass = dark ? "text-gray-300" : "text-[#81747b]";

  const acceptRequest = (id) => {
    const request = requests.find((item) => item.id === id);

    setRequests((previous) =>
      previous.filter((item) => item.id !== id)
    );

    setNotifications((previous) => [
      {
        id: Date.now(),
        message: `You accepted the request from ${request.hospital}.`,
        time: "Just now",
      },
      ...previous,
    ]);

    alert(`You accepted ${request.hospital} (demo only).`);
  };

  const rejectRequest = (id) => {
    const request = requests.find((item) => item.id === id);

    setRequests((previous) =>
      previous.filter((item) => item.id !== id)
    );

    setNotifications((previous) => [
      {
        id: Date.now(),
        message: `You rejected the request from ${request.hospital}.`,
        time: "Just now",
      },
      ...previous,
    ]);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${pageClass}`}>
      <main className="mx-auto max-w-[1600px] px-5 py-8 sm:px-8 lg:px-10">
        {/* Page heading */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Donor dashboard
          </h1>
          <p className={`mt-4 text-base sm:text-lg ${mutedClass}`}>
            Manage your availability and respond to nearby requests.
          </p>
        </header>

        {/* Main dashboard grid */}
        <div className="grid grid-cols-1 items-start gap-7 xl:grid-cols-[400px_minmax(0,1fr)]">
          {/* Left column */}
          <div className="space-y-7">
            {/* Donor profile */}
            <section className={`rounded-[20px] border p-6 sm:p-7 ${cardClass}`}>
              <div className="flex items-center gap-4">
                <div className={`flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full text-xl font-bold ${
                  dark ? "bg-[#351c2a] text-rose-300" : "bg-[#fceff1] text-rose-700"
                }`}>
                  AR
                </div>

                <div>
                  <h2 className="text-xl font-bold">Aditi Rao</h2>
                  <p className={`mt-2 ${mutedClass}`}>O+ · Saket, New Delhi</p>
                </div>
              </div>

              {/* Availability toggle */}
              <div className={`mt-6 flex items-center justify-between gap-4 rounded-[18px] p-5 ${
                dark ? "bg-[#253147]" : "bg-[#f1ecea]"
              }`}>
                <div>
                  <h3 className="font-bold">Available to donate</h3>
                  <p className={`mt-2 text-sm leading-7 ${mutedClass}`}>
                    {available
                      ? "You'll be notified for nearby requests"
                      : "You won't receive new requests"}
                  </p>
                </div>

                <button
                  type="button"
                  role="switch"
                  aria-checked={available}
                  aria-label="Toggle donor availability"
                  onClick={() => setAvailable((prev) => !prev)}
                  className={`relative h-[30px] w-[54px] shrink-0 rounded-full transition ${
                    available ? "bg-[#218653]" : "bg-gray-500"
                  }`}
                >
                  <span className={`absolute top-[3px] h-6 w-6 rounded-full bg-white shadow transition-all ${
                    available ? "left-[27px]" : "left-[3px]"
                  }`} />
                </button>
              </div>

              {/* Donor statistics */}
              <div className="mt-5 space-y-0">
                {[
                  ["Last donation", "14 Jun 2026"],
                  ["Total donations", "7"],
                  ["Current location", "Saket, Delhi"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className={`flex flex-wrap items-center justify-between gap-2 border-b py-3 last:border-b-0 ${
                      dark ? "border-[#354156]" : "border-[#eadbd7]"
                    }`}
                  >
                    <span className={mutedClass}>{label}</span>
                    <span className="text-right font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Eligibility card */}
            <section className={`rounded-[20px] border p-6 sm:p-7 ${cardClass}`}>
              <div className={`rounded-[18px] p-5 ${
                dark ? "bg-[#163d35] text-emerald-200" : "bg-[#def1e5] text-[#18794e]"
              }`}>
                <div className="flex items-start gap-4">
                  <span className="mt-1 text-3xl">✓</span>
                  <div>
                    <h3 className="font-bold">Eligible to donate</h3>
                    <p className={`mt-2 leading-7 ${dark ? "text-emerald-100" : "text-[#356d55]"}`}>
                      Next eligible date already passed — you're clear.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Notifications */}
            <section className={`rounded-[20px] border p-6 sm:p-7 ${cardClass}`}>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-bold">Notifications</h2>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  dark ? "bg-[#351c2a] text-rose-300" : "bg-rose-100 text-rose-700"
                }`}>
                  {notifications.length}
                </span>
              </div>

              <div>
                {notifications.map((notification, index) => (
                  <div
                    key={notification.id}
                    className={`flex gap-3 border-b py-4 last:border-b-0 ${
                      dark ? "border-[#354156]" : "border-[#eadbd7]"
                    }`}
                  >
                    <span className="mt-2 h-[10px] w-[10px] shrink-0 rounded-full bg-rose-700" />

                    <div>
                      <p className={`leading-7 ${mutedClass}`}>
                        {notification.message}
                      </p>
                      <p className={`mt-1 text-sm ${mutedClass}`}>
                        {notification.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right column */}
          <div className="min-w-0 space-y-7">
            {/* Emergency requests */}
            <section className={`rounded-[20px] border p-5 sm:p-7 ${cardClass}`}>
              <h2 className="mb-6 text-lg font-bold">
                Emergency requests near you
              </h2>

              {requests.length > 0 ? (
                <div className="space-y-4">
                  {requests.map((request) => (
                    <article
                      key={request.id}
                      className={`flex flex-col gap-5 rounded-[18px] border p-5 sm:flex-row sm:items-center sm:justify-between ${
                        dark ? "border-[#354156]" : "border-[#eadbd7]"
                      }`}
                    >
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-lg font-bold">
                            {request.hospital}
                          </h3>

                          <span className={`rounded-lg px-3 py-1 text-sm font-semibold ${
                            request.urgency === "critical"
                              ? dark
                                ? "bg-[#512532] text-rose-300"
                                : "bg-[#f9dce0] text-[#b20d2e]"
                              : dark
                              ? "bg-[#4b3922] text-amber-300"
                              : "bg-[#faebce] text-[#b76a00]"
                          }`}>
                            {request.urgency}
                          </span>
                        </div>

                        <p className={`mt-2 ${mutedClass}`}>
                          {request.group} needed · {request.distance}
                        </p>
                      </div>

                      <div className="flex shrink-0 items-center gap-2">
                        <button
                          type="button"
                          onClick={() => rejectRequest(request.id)}
                          className={`rounded-full px-5 py-3 font-semibold transition ${
                            dark
                              ? "bg-[#303b4d] hover:bg-[#414e63]"
                              : "bg-[#f3eeec] hover:bg-[#e7dedb]"
                          }`}
                        >
                          Reject
                        </button>

                        <button
                          type="button"
                          onClick={() => acceptRequest(request.id)}
                          className="rounded-full bg-rose-700 px-5 py-3 font-semibold text-white shadow-lg shadow-rose-700/20 transition hover:bg-rose-800"
                        >
                          Accept
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className={`rounded-xl border border-dashed p-8 text-center ${dark ? "border-[#354156]" : "border-[#eadbd7]"}`}>
                  <p className="font-semibold">No pending requests</p>
                  <p className={`mt-2 text-sm ${mutedClass}`}>
                    New matching requests will appear here.
                  </p>
                </div>
              )}
            </section>

            {/* Donation history */}
            <section className={`rounded-[20px] border p-5 sm:p-7 ${cardClass}`}>
              <h2 className="mb-6 text-lg font-bold">Donation history</h2>

              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[530px] border-collapse text-left">
                  <thead>
                    <tr className={`border-b text-sm ${mutedClass} ${
                      dark ? "border-[#354156]" : "border-[#eadbd7]"
                    }`}>
                      <th className="px-2 py-4 font-medium">Date</th>
                      <th className="px-2 py-4 font-medium">Location</th>
                      <th className="px-2 py-4 font-medium">Units</th>
                      <th className="px-2 py-4 font-medium">Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {history.map((item) => (
                      <tr
                        key={item.date}
                        className={`border-b last:border-b-0 ${
                          dark ? "border-[#354156]" : "border-[#eadbd7]"
                        }`}
                      >
                        <td className="whitespace-nowrap px-2 py-4">{item.date}</td>
                        <td className="px-2 py-4">{item.location}</td>
                        <td className="px-2 py-4">{item.units}</td>
                        <td className="px-2 py-4">
                          <span className={`whitespace-nowrap rounded-lg px-3 py-1 text-sm font-semibold ${
                            dark ? "bg-[#163d35] text-emerald-300" : "bg-[#def1e5] text-[#18794e]"
                          }`}>
                            Completed
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`border-t px-6 py-10 sm:px-10 ${
        dark ? "border-[#2A3548]" : "border-[#eadbd7]"
      }`}>
        <div className="mx-auto grid max-w-[1380px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 text-xl font-bold">
              <span className="text-rose-700">♥</span>
              BloodLink
            </div>
            <p className={`mt-4 max-w-xs leading-6 ${mutedClass}`}>
              A prototype UI for a college capstone project — not a live medical service.
            </p>
          </div>

          <div>
            <h3 className={`mb-4 font-semibold ${mutedClass}`}>Platform</h3>
            <div className={`space-y-4 ${mutedClass}`}>
              <p>Find blood</p>
              <p>Request blood</p>
              <p>Donor dashboard</p>
            </div>
          </div>

          <div>
            <h3 className={`mb-4 font-semibold ${mutedClass}`}>Organizations</h3>
            <div className={`space-y-4 ${mutedClass}`}>
              <p>Hospitals</p>
              <p>Blood banks</p>
              <p>NGO partners</p>
            </div>
          </div>

          <div>
            <h3 className={`mb-4 font-semibold ${mutedClass}`}>Support</h3>
            <div className={`space-y-4 ${mutedClass}`}>
              <p>Safety & verification</p>
              <p>Contact</p>
              <p>Privacy</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BloodBanks;
