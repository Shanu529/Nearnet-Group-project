import React from "react";

import WhyChooseUs from "../components/WhyChooseUs.jsx";
import GetStarted from "../components/GetStarted.jsx";

import { Link, useNavigate } from "react-router-dom";
import FAQ from "../components/FAQ.jsx";

// import <phone className="png"></phone>4
// import { Toaster } from "react-hot-toast";
// import  phone from ""
import phone from "/phone.png";

function Home() {
  const navigate = useNavigate();

  return (
    <>
     <section className="bg-[#faf7f2] mt-20 lg:mt-0">
  <div className="min-h-screen max-w-7xl mx-auto px-6 py-10 md:py-20 flex items-center">
    
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full">
      
 
      <div className="w-full lg:w-1/2 md:text-center lg:text-left">
        
        <div data-aos="fade-down">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Building Stronger Communities Together
          </h1>

          <p className="mt-5 text-gray-600 max-w-md mx-auto lg:mx-0">
            Share Resources Within <br className="hidden sm:block" />
            Neighborhood
          </p>
        </div>

        
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition">
            Get started →
          </button>

          <button className="bg-white text-gray-900 px-6 py-3 rounded-lg border hover:bg-gray-100 transition">
            More about app
          </button>
        </div>

      
        <div className="mt-10 flex justify-center lg:justify-start gap-8 text-gray-500">
          <Link to="/login">
            <span className="hover:text-black font-semibold transition">
              Login
            </span>
          </Link>

          <Link to="/signin">
            <span className="hover:text-black font-semibold transition">
              Signin
            </span>
          </Link>

          <Link to="/listing">
            <span className="hover:text-black font-semibold transition">
              Listing
            </span>
          </Link>
        </div>
      </div>

      
      <div className="w-full lg:w-1/2 flex justify-center">
        <div data-aos="fade-down" className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
          <img
            src={phone}
            alt="Real estate app"
            className="w-full h-auto object-contain rounded-3xl"
          />
        </div>
      </div>

    </div>
  </div>
</section>


   

      <WhyChooseUs />
      <GetStarted />
      <FAQ />
    </>
  );
}

export default Home;
