import React, { useState } from "react";

import {
  IoLogoReddit,
  IoLogInSharp,
  IoPersonCircle,
  IoMenu,
  IoClose
} from "react-icons/io5";

function Navbar() {

  const [checkUser, setCheckUser] = useState(true);
  const [menuOpen, setMenuOpen]  = useState(false)
  const showMenu = () =>{
    setMenuOpen(prev => !prev)

  }

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

        
        {checkUser ? <>
           <div className="hidden sm:flex items-center gap-5  text-gray-600 font-medium">
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
          
        </div>
           <button className="sm:hidden" onClick={showMenu}>
              {menuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
            </button>
        </>
        
        :   
        <div className="md:bg-black md:text-white py-1 px-5 rounded-full flex items-center gap-2">
          <IoLogInSharp size={30}/> 
        </div>}
      
      </div>

          {/*  mobile */}
       {menuOpen && (
        <div className="sm:hidden  top-full left-0 w-full relative  border-t transition-all shadow-lg">
          <div className="flex flex-col px-6 py-4 gap-4 text-gray-700 font-medium">
            <a href="/" onClick={showMenu}>Home</a>
            <a href="#" onClick={showMenu}>Request Resource</a>
            <a href="#" onClick={showMenu}>Offer Resource</a>
            <a href="/listing" onClick={showMenu}>Listings</a>
            <div className="flex items-center gap-2">
              <IoPersonCircle size={26} />
              
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
