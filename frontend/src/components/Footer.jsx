import React from "react";
import { IoLogoReddit } from "react-icons/io5";
function Footer() {
  return (
    <footer className="w-full  bg-white">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

        <div className="flex items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-black text-white">
            <IoLogoReddit  size={22} />
            </div>
            <span className="text-lg font-semibold text-gray-900">
              Neighborhood Helper
            </span>
        </div>

        <div className="flex  text-gray-600 font-medium">
          <span className="hover:text-gray-900 cursor-pointer">Home</span>
          <span className="hover:text-gray-900 cursor-pointer">Request</span>
          <span className="hover:text-gray-900 cursor-pointer">Offer</span>
          <span className="hover:text-gray-900 cursor-pointer">Listings</span>
        </div>

        <div className="text-gray-500 text-sm">
          © 2026 Neighborhood Helper. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
