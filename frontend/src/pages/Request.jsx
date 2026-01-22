import React from "react";

function Request() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-teal-200">
            <i className="fa-brands fa-telegram text-3xl text-teal-700"></i>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-2">
          Request a Resource
        </h2>

        <p className="text-sm text-gray-500 text-center mb-6">
          Let your neighbors know what you need
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
              placeholder="e.g., Ladder, Power Drill, Camping Tent"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              rows="3"
              placeholder="Describe what you need and why..."
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-teal-400"
            ></textarea>
          </div>

          {/* Urgency */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Urgency Level
            </label>
            <select
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
              defaultValue=""
            >
              <option value="" disabled>
                Select urgency level
              </option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white text-sm font-medium py-2.5 rounded-lg flex items-center justify-center gap-2 transition focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}

export default Request;
