
import React, { useState } from "react";

const EmergencyRequest = ({ darkMode = false }) => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    bloodGroup: "O+",
    units: "2",
    hospital: "",
    city: "",
    address: "",
    urgency: "Urgent",
    notes: "",
    patientName: "",
    phone: "",
  });

  const updateField = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      alert("Demo only: connect your backend to submit this request.");
    }
  };

  const previousStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const dark = darkMode;

  const pageClass = dark
    ? "bg-[#101827] text-white"
    : "bg-[#faf7f5] text-[#17131a]";

  const cardClass = dark
    ? "border-[#2A3548] bg-[#182234]"
    : "border-[#eadbd7] bg-white";

  const fieldClass = dark
    ? "border-[#354156] bg-[#101827] text-white placeholder-gray-400"
    : "border-[#ddc9c3] bg-[#faf7f5] text-gray-900";

  const mutedClass = dark ? "text-gray-300" : "text-[#746a70]";

  const inputClass =
    `mt-3 w-full rounded-xl border px-5 py-4 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 ${fieldClass}`;

  const steps = [
    "Blood details",
    "Hospital & location",
    "Urgency & notes",
    "Review",
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${pageClass}`}>
      {/* Request Form */}
      <section className="px-4 pb-16 pt-8 sm:px-6">
        <div className="mx-auto max-w-[800px]">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Create an emergency blood request
            </h1>

            <p className={`mt-4 text-base sm:text-lg ${mutedClass}`}>
              Takes under a minute. We'll notify matching donors the moment you submit.
            </p>
          </div>

          {/* Steps */}
          <div className="relative mx-auto mb-12 mt-9 max-w-[720px]">
            <div
              className={`absolute left-[12.5%] right-[12.5%] top-[18px] h-[3px] ${
                dark ? "bg-[#354156]" : "bg-[#e8dcd8]"
              }`}
            />

            <div className="relative grid grid-cols-4">
              {steps.map((label, index) => {
                const number = index + 1;
                const active = step === number;
                const completed = step > number;

                return (
                  <div
                    key={label}
                    className="flex flex-col items-center text-center"
                  >
                    <div
                      className={`z-10 flex h-[38px] w-[38px] items-center justify-center rounded-full border-2 text-sm font-bold transition ${
                        active || completed
                          ? "border-rose-700 bg-rose-700 text-white"
                          : dark
                          ? "border-[#536075] bg-[#182234] text-gray-300"
                          : "border-[#ddcbc5] bg-white text-[#80727a]"
                      }`}
                    >
                      {number}
                    </div>

                    <span
                      className={`mt-3 text-xs sm:text-sm ${
                        active
                          ? "font-semibold"
                          : mutedClass
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form Card */}
          <div className={`rounded-[28px] border p-5 sm:p-8 md:p-10 ${cardClass}`}>
            {/* Emergency Warning */}
            <div className="mb-8 flex gap-3 rounded-2xl bg-[#f8e9ca] p-5 text-sm leading-6 text-[#a96300] sm:text-base">
              <span className="text-xl" aria-hidden="true">⚠</span>
              <p>
                If this is a life-threatening emergency, call 112
                (national emergency number) or your hospital's emergency
                line first — this form notifies donors, it does not dispatch
                medical help.
              </p>
            </div>

            {/* Step 1 */}
            {step === 1 && (
              <div>
                <h2 className="mb-7 text-xl font-semibold">
                  Blood details
                </h2>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold">
                      Blood group needed
                    </label>

                    <select
                      name="bloodGroup"
                      value={formData.bloodGroup}
                      onChange={updateField}
                      className={inputClass}
                    >
                      {["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"].map(
                        (group) => (
                          <option key={group} value={group}>
                            {group}
                          </option>
                        )
                      )}
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-semibold">
                      Units required
                    </label>

                    <input
                      type="number"
                      name="units"
                      min="1"
                      max="50"
                      value={formData.units}
                      onChange={updateField}
                      className={inputClass}
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div>
                <h2 className="mb-7 text-xl font-semibold">
                  Hospital & location
                </h2>

                <div className="space-y-5">
                  <div>
                    <label className="text-sm font-semibold">
                      Hospital name
                    </label>
                    <input
                      name="hospital"
                      value={formData.hospital}
                      onChange={updateField}
                      placeholder="Enter hospital name"
                      className={inputClass}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold">
                      City or area
                    </label>
                    <input
                      name="city"
                      value={formData.city}
                      onChange={updateField}
                      placeholder="Enter city or area"
                      className={inputClass}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold">
                      Full address
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={updateField}
                      placeholder="Enter hospital address"
                      rows={3}
                      className={inputClass}
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div>
                <h2 className="mb-7 text-xl font-semibold">
                  Urgency & notes
                </h2>

                <div className="space-y-5">
                  <div>
                    <label className="text-sm font-semibold">
                      Request urgency
                    </label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={updateField}
                      className={inputClass}
                    >
                      <option>Urgent</option>
                      <option>Within 24 hours</option>
                      <option>Planned</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-semibold">
                      Additional notes
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={updateField}
                      placeholder="Add any important information"
                      rows={4}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold">
                      Contact person
                    </label>
                    <input
                      name="patientName"
                      value={formData.patientName}
                      onChange={updateField}
                      placeholder="Enter contact person's name"
                      className={inputClass}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold">
                      Contact phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={updateField}
                      placeholder="Enter contact phone number"
                      className={inputClass}
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4 */}
            {step === 4 && (
              <div>
                <h2 className="mb-7 text-xl font-semibold">
                  Review your request
                </h2>

                <div className={`space-y-4 rounded-2xl border p-5 ${dark ? "border-[#354156]" : "border-gray-200"}`}>
                  {[
                    ["Blood group", formData.bloodGroup],
                    ["Units required", formData.units],
                    ["Hospital", formData.hospital],
                    ["City or area", formData.city],
                    ["Address", formData.address],
                    ["Urgency", formData.urgency],
                    ["Additional notes", formData.notes || "None"],
                    ["Contact person", formData.patientName],
                    ["Contact phone", formData.phone],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex flex-col gap-1 sm:flex-row sm:justify-between"
                    >
                      <span className={mutedClass}>{label}</span>
                      <span className="break-words font-semibold sm:max-w-[60%] sm:text-right">
                        {value || "Not provided"}
                      </span>
                    </div>
                  ))}
                </div>

                <p className={`mt-5 text-sm ${mutedClass}`}>
                  Please check your details before submitting. This demo
                  does not send a real request to donors.
                </p>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                {step > 1 && (
                  <button
                    type="button"
                    onClick={previousStep}
                    className={`rounded-full border px-6 py-3 font-semibold transition ${
                      dark
                        ? "border-[#536075] hover:bg-[#253147]"
                        : "border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    Back
                  </button>
                )}
              </div>

              <button
                type="button"
                onClick={nextStep}
                className="rounded-full bg-rose-700 px-8 py-4 font-bold text-white shadow-lg shadow-rose-700/20 transition hover:bg-rose-800 active:scale-[0.98]"
              >
                {step === 4 ? "Submit request" : "Continue"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`border-t px-6 py-12 sm:px-10 ${
          dark ? "border-[#2A3548]" : "border-[#e8dcd8]"
        }`}
      >
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 text-xl font-bold">
              <span className="text-rose-700">♥</span>
              BloodLink
            </div>
            <p className={`mt-5 max-w-xs leading-6 ${mutedClass}`}>
              A prototype UI for a college capstone project — not a live
              medical service.
            </p>
          </div>

          <div>
            <h3 className={`mb-5 text-sm font-semibold ${mutedClass}`}>
              Platform
            </h3>
            <div className="space-y-4">
              <p>Find blood</p>
              <p>Request blood</p>
              <p>Donor dashboard</p>
            </div>
          </div>

          <div>
            <h3 className={`mb-5 text-sm font-semibold ${mutedClass}`}>
              Organizations
            </h3>
            <div className="space-y-4">
              <p>Hospitals</p>
              <p>Blood banks</p>
              <p>NGO partners</p>
            </div>
          </div>

          <div>
            <h3 className={`mb-5 text-sm font-semibold ${mutedClass}`}>
              Support
            </h3>
            <div className="space-y-4">
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

export default EmergencyRequest;
