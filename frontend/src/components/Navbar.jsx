import React, { useState } from "react";
import {IoLogoReddit } from "react-icons/io5";
import { IoLogInSharp } from "react-icons/io5";
import { IoPersonCircle } from "react-icons/io5";
function Navbar() {

  const [checkUser, setCheckUser] = useState(true);

  return (
    <nav className="w-full border-b bg-white">
      <div className=" mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-black text-white">
            <IoLogoReddit  size={22} />
          </div>
          <span className="text-lg font-semibold text-gray-900">
            Nearnet
          </span>
        </div>

        {/* links */}
        {checkUser ?   <div className="hidden md:flex items-center gap-5  text-gray-600 font-medium">
          <a href="/" className=" font-semibold">
            Home
          </a>
          <a href="#" className="hover:text-gray-900">
            Request Resource
          </a>
          <a href="#" className="hover:text-gray-900">
            Offer Resource
          </a>
          <a href="/listing" className="hover:text-gray-900">
            Listings
          </a>
          <a href="/" className="hover:text-green-700 ">
            <IoPersonCircle size={30}/>
          </a>
        </div> :
        <div className="bg-black text-white py-2 px-8 rounded-3xl flex items-center gap-2">
          <IoLogInSharp size={20}/> Signup
        </div>}
      
      </div>
    </nav>
  );
}

export default Navbar;
