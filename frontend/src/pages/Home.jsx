import React from "react";

import WhyChooseUs from "../components/WhyChooseUs.jsx";
import GetStarted from "../components/GetStarted.jsx";

import { Link, useNavigate } from "react-router-dom";
import FAQ from "../components/FAQ.jsx";

import phone from "/phone.png";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    window.location.href = "/Signin";
  };

  const handleGetStarted = () => {
    const isLoggedIn = localStorage.getItem("user");
    if (!isLoggedIn) {
      navigate("/Signin");
    } else {
      navigate("/offer");
    }
  };

  return (
    <>
    <section className="relative bg-[#f8f6f2]  lg:mt-0 overflow-hidden">

  <div className="min-h-screen max-w-7xl mx-auto px-6 py-12 sm:py-16 flex items-center">
    
    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 w-full">

      <div className="w-full lg:w-1/2 md:text-center lg:text-left space-y-5">

        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
          Building Stronger
          <span className="block">
            Communities Together
          </span>
        </h1>

        <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-lg mx-auto lg:mx-0">
          Share resources within your neighborhood and create meaningful
          connections with people around you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-3">
          <button className="px-6 py-2.5 lg:px-8 lg:py-3 rounded-xl font-semibold text-white bg-black shadow-md hover:bg-gray-800 transition-all duration-300">
            Get Started →
          </button>

          <button className="px-6 py-2.5 lg:px-8 lg:py-3 rounded-xl font-semibold border border-gray-300 bg-white hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>

      </div>

      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <div className="relative flex justify-center">

          <div className="absolute w-[80%] h-[80%] bg-gray-200 rounded-3xl blur-3xl opacity-30"></div>

          <img
            src={phone}
            alt="App preview"
            className="
              relative
              w-[100%]
              sm:w-[55%]
              md:w-[45%]
              lg:w-[95%]
              xl:w-[105%]
              drop-shadow-2xl
              transition-transform duration-500
              hover:scale-105
            "
          />
        </div>
      </div>

    </div>
  </div>
</section>

      <WhyChooseUs />
      {/* <GetStarted /> */}
      <FAQ />
    </>
  );
}

export default Home;