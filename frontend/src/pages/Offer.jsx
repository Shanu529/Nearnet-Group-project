import React from "react";

function Offer() {
  return (
    <div className="min-h-screen relative bg-linear-to-br from-[#cbcbcb] via-[#ffffff] to-black flex items-center justify-center px-4 overflow-hidden">

      {/* soft glow */}
      <div className="absolute w-105 h-105 bg-white/10 rounded-full blur-3xl"></div>

      <div className="w-full max-w-md bg-linear-to-br from-white to-gray-50 rounded-2xl p-6 shadow-[0_25px_60px_rgba(0,0,0,0.3)] border border-white/40 relative z-10">

        {/* icon */}
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-green-100 shadow">
            <i className="fa-solid fa-gift text-3xl text-green-500"></i>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-2">
          Offer a Resource
        </h2>

        <p className="text-sm text-gray-500 text-center mb-6">
          Help your neighbours by sharing what you have
        </p>

        <form className="space-y-4">

          {/* Resource Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">
              Resource Name
            </label>
            <input
              type="text"
              placeholder="e.g., Ladder, Power Drill, Board Games"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            />
          </div>

          {/* Condition */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">
              Condition
            </label>
            <select
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
              defaultValue=""
            >
              <option value="" disabled>
                Select condition
              </option>
              <option>Brand New</option>
              <option>Used</option>
              <option>Old</option>
            </select>
          </div>

          {/* Availability */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">
              Availability
            </label>
            <select
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
              defaultValue=""
            >
              <option value="" disabled>
                Select availability
              </option>
              <option>Always Available</option>
              <option>On Request</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold py-2.5 rounded-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Share with Neighbours
          </button>

          {/* trust note */}
          <p className="text-xs text-gray-400 text-center pt-2">
            🔒 Visible only to people near you
          </p>
        </form>
      </div>
    </div>
  );
}

export default Offer;
