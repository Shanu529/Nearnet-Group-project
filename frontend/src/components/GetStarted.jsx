import React from "react";
import { Link } from "react-router";
function GetStarted() {
  return (
    <section className="w-full bg-[#faf7f2] py-20">
      <div className="max-w-4xl mx-auto px-6 sm:text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
          Ready to Get Started?
        </h2>

        <p className="text-gray-600 text-lg mb-10">
          Browse available resources in your neighborhood or post what you need.
        </p>

        <Link
          to="/listing"
          className="px-8 py-4 rounded-xl bg-emerald-500 text-white font-semibold shadow-md hover:bg-emerald-600 transition"
        >
          View All Listings
        </Link>
      </div>
    </section>
  );
}

export default GetStarted;
