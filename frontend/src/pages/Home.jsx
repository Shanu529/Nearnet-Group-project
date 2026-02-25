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
      <section className="bg-[#faf7f2]">
        <div className=" h-screen max-w-7xl mx-auto px-6 py-10 md:py-20">
          <div className="flex flex-cols-2 lg:flex-cols-2 items-center gap-16">
            <div>
              <div data-aos="fade-down">
                <h1 className="text-3xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Building Stronger Communities Together
                </h1>

                <p className="mt-5 text-gray-600 lg:text-2xl  max-w-md">
                  Share Resources Within <br />
                  Neighborhood
                </p>
              </div>
              <div className="mt-8 flex gap-4 ">
                <button onClick={handleGetStarted} className=" GetStarted bg-black text-white sm:px-6 sm:py-3 py-2 px-2 rounded-lg font-medium hover:bg-gray-800 transition">
                  Get started →
                </button>

                <button className="bg-white text-gray-900 sm:px-6 py-2 px-2 sm:py-3 rounded-lg border hover:bg-gray-100 transition">
                  More about app
                </button>
              </div>


            </div>

            <div className="relative flex justify-center">
              <div data-aos="fade-down">
                <img src={phone} alt="Real estate app" className="rounded-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section></section>

      <WhyChooseUs />
      <GetStarted />
      <FAQ />
    </>
  );
}

export default Home;
