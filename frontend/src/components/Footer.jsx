import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
// import api from "../../api/axios";

function Footer() {

  return (
    <footer className="bg-[#faf7f2] text-black ">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 flex ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-black">
              ABOUT US
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              This platform is a hyperlocal community network that enables people in the same neighborhood to share resources, exchange information, and support each other in real time. 
            </p>
          </div>

          {/* <div>
            <h3 className="text-xl font-semibold mb-6 text-orange-500">
              Opening Hours
            </h3>
            <p className="text-gray-300 text-sm">09:00 AM To 6:00 PM</p>
          </div> */}

          <div>
            <h3 className="text-xl font-semibold mb-6 text-black">
              Recent Posts
            </h3>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="hover:text-gray-900 cursor-pointer transition">
          › SHARE YOUR RESOURCES WITH NEARBY COMMUNITY
              </li>
              <li className="hover:text-gray-900 cursor-pointer transition">
                › How to Post a Listing on Nearnet
              </li>
              <li className="hover:text-gray-900 cursor-pointer transition">
                ›   5 Tips for Safe and Successful Resource Sharing
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-black">
              Location
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Village Ramnagar,<br /> near Banur, Tehsil Rajpura,<br /> District Patiala,<br /> Punjab, 140601 India
            </p>
          </div>
        </div>
      </div>

      {/* bottom section of footer */}
      <div className="bg-[#0b0b0b] text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-10">
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start gap-4 mb-6">
                <Link
                  to="#"
                  className="w-11 h-11 flex items-center justify-center bg-[#1a1a1a] hover:bg-blue-500 transition-all duration-300 rounded-md hover:scale-110"
                >
                  <FaFacebookF className="text-white text-base" />
                </Link>

                <Link
                  to="#"
                  className="w-11 h-11 flex items-center justify-center bg-[#1a1a1a] hover:bg-black transition-all duration-300 rounded-md hover:scale-110"
                >
                  <FaXTwitter className="text-white text-base" />
                </Link>

                <Link
                  to="#"
                  className="w-11 h-11 flex items-center justify-center bg-[#1a1a1a] hover:bg-linear-to-br from-[#4f9bf2] via-[#ae32be] to-yellow-200  transition-all duration-300 rounded-md hover:scale-110"
                >
                  <FaInstagram className="text-white text-base" />
                </Link>

                <Link
                  to="#"
                  className="w-11 h-11 flex items-center justify-center bg-[#1a1a1a] hover:bg-blue-500 transition-all duration-300 rounded-md hover:scale-110"
                >
                  <FaLinkedinIn className="text-white text-base" />
                </Link>
              </div>

              <p className="text-gray-400 text-sm">
                Terms & Conditions · Policies · Legal Notice
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">
                Subscribe to our Newsletter
              </h3>

              <p className="text-gray-400 text-sm mb-6">
                Get updates about our latest products and industry insights.
              </p>

              <form
                
                className="flex flex-col sm:flex-row items-center gap-3"
              >
                <input
                  type="email"
                  name="email"
                  
                  placeholder="Enter your email address"
                  className={`w-full sm:flex-1 bg-[#1a1a1a] text-white px-5 py-3 rounded-md focus:outline-none focus:ring-2 transition-all `}
                />

                <button
                  type="submit"
                  
                  className="w-full sm:w-auto  text-white hover:bg-gray-600 px-6 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105 disabled:opacity-60"
                >
                  Send
                </button>
              </form>
             
            </div>

            <div className="text-center lg:text-right flex flex-col items-center lg:items-end gap-4">
            <img className="w-40 flex " src={logo} alt="logo" />

              <p className="text-gray-400 text-sm">
                © 2026 Nearnet.
                <br />
                All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

}


export default Footer;