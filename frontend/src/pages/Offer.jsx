import React from "react";

function Offer() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100">
            <i className="fa-solid fa-gift text-3xl text-orange-500"></i>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-2">
          Offer a Resource
        </h2>

        <p className="text-sm text-gray-500 text-center mb-6">
          Share something with your neighbours
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* Resource Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Resource Name
            </label>
            <input
              type="text"
              placeholder="e.g., Ladder, Power Drill, Board Games"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Condition */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Condition
            </label>
            <select
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option disabled selected>
                Select condition
              </option>
              <option>Brand New</option>
              <option>Used</option>
              <option>Old</option>
            </select>
          </div>

          {/* Availability */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Availability
            </label>
            <select
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option disabled selected>
                Select Availability
              </option>
              <option>Always Available</option>
              <option>On request</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-teal-600 text-white text-sm font-medium py-2.5 rounded-lg flex items-center justify-center gap-2 transition"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}

export default Offer;
