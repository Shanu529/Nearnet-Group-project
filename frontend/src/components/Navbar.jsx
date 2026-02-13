import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/nearnet.jpeg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="bg-white border-b h-16 flex items-center px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src={logo} alt="Nearnet Logo" className="h-12" />
          </Link>
          <h2 className="font-semibold">NearNet</h2>
        </div>

        {/* Search (desktop only) */}
        <div className="flex-1 mx-10 hidden md:block">
          <input
            type="text"
            placeholder="Search items, help, events nearby..."
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#CDFFE1]"
          />
        </div>

        {/* Right actions (desktop) */}
        <div className="hidden md:flex items-center gap-4 ml-auto">
         
          <button className="relative text-xl text-gray-600 hover:text-blue-600">
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
              3
            </span>
            <i className="fa-solid fa-bell"></i>
          </button>

          <Link to="/offer">
            <button className="flex items-center gap-2 px-4 py-2 text-[#000000] rounded-lg hover:bg-[#eaeaea]">
              <i className="fa-solid fa-plus"></i>
              Offer Resource
            </button>
          </Link>

          <Link to="/request">
            <button className="flex items-center gap-2 px-4 py-2 text-[#000000] rounded-lg hover:bg-[#eaeaea]">
              <i className="fa-solid fa-hand-holding-heart"></i>
              Request Resource
            </button>
          </Link>

          <Link to="/signin">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-slate-50">
              <i className="fa-solid fa-user"></i>
              Sign
            </button>
          </Link>
        </div>

        {/* menu for mobile only */}
        <button
          className="md:hidden ml-auto text-2xl text-gray-700"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
      </header>

      
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

     
      <aside
        className={`
          fixed top-0 left-0 z-50
          h-full w-64
          bg-white border-r
          p-4 space-y-4
          transform transition-transform duration-300
          md:hidden
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Close button */}
        <div className="flex justify-end">
          <button
            className="text-xl"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Sidebar nav */}
        <nav className="space-y-2">
          <Link to="/" >
            <button className="w-full text-left px-3 py-2 rounded hover:bg-slate-100 font-medium flex items-center gap-2">
              <i className="fa-solid fa-house"></i>
              Home
            </button>
          </Link>

          <Link to="/listing" >
            <button className="w-full text-left px-3 py-2 rounded hover:bg-slate-100 font-medium flex items-center gap-2">
              <i className="fa-solid fa-lightbulb"></i>
              Suggestion for you
            </button>
          </Link>

          
          <Link to="/lenditems" >
            <button className="w-full text-left px-3 py-2 rounded hover:bg-slate-100 font-medium flex items-center gap-2">
             
             <i className="fa-solid fa-share-nodes"></i>
                Lend Items
            </button>
          </Link>

          {/* <button className="w-full text-left px-3 py-2 rounded hover:bg-slate-100 flex items-center gap-2">
            <i className="fa-solid fa-person-circle-question"></i>
            Request Help
          </button> */}

          <Link to="/request" >
            <button className="w-full text-left px-3 py-2 rounded hover:bg-slate-100 font-medium flex items-center gap-2">
              <i className="fa-solid fa-hand-holding"></i>
               Request Help
            </button>
          </Link>
           <Link to="/offer" >
            <button className="w-full text-left px-3 py-2 rounded hover:bg-slate-100 font-medium flex items-center gap-2">
              <i className="fa-solid fa-tag"></i>  
               Offer 
            </button>
          </Link>

          
            <Link to="/mergency" >
            <button className="w-full text-left px-3 py-2 rounded hover:bg-slate-100 font-medium flex items-center gap-2">
              <i className="fa-solid fa-kit-medical"></i>
                Emergency
            </button>
          </Link>
          

             <Link to="/event" >
            <button className="w-full text-left px-3 py-2 rounded hover:bg-slate-100 font-medium flex items-center gap-2">
              <i className="fa-solid fa-calendar-days"></i>
                 Events
            </button>
          </Link>

          
        </nav>

        <hr />

        {/* Always visible auth links */}
        <Link to="/signin"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2 px-3 py-2 border rounded hover:bg-slate-50"
        >
          <i className="fa-solid fa-user"></i>
          Login
        </Link>
      </aside>
    </>
  );
}

export default Navbar;
