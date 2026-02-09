import React from "react";

import WhyChooseUs from "../components/WhyChooseUs.jsx";
import GetStarted from "../components/GetStarted.jsx";

import { useNavigate } from "react-router-dom";
import FAQ from "../components/FAQ.jsx";

// import <phone className="png"></phone>4
// import { Toaster } from "react-hot-toast";
// import  phone from ""
import phone from "/phone.png";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <section className="bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
            <div>
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Building Stronger Communities Together
              </h1>

              <p className="mt-5 text-gray-600 max-w-md">
                Share Resources Within <br />
                Neighborhood
              </p>

              <div className="mt-8 flex gap-4">
                <button className="bg-black text-white sm:px-6 sm:py-3 py-2 px-2 rounded-lg font-medium hover:bg-gray-800 transition">
                  Get started →
                </button>

                <button className="bg-white text-gray-900 sm:px-6 py-2 px-2 sm:py-3 rounded-lg border hover:bg-gray-100 transition">
                  More about app
                </button>
              </div>

              <div className="mt-12 flex items-center gap-8 text-gray-400">
                <span className="font-semibold">Login</span>
                <span className="font-semibold">Signin</span>
                <span className="font-semibold">Listing</span>
              </div>
            </div>

            <div className="relative flex justify-center">
              <img src={phone} alt="Real estate app" className="rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/*   
    <section className=" bg-white flex items-center  px-6 justify-center bg-[url(/main5.jpg)] bg-cover h-[90vh] py-20 sm:py-30 bg-center ">
      <div className="max-w-4xl sm:text-center ">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 text-sm font-medium mb-6">
          <span className="text-lg">♡</span>
          Building Stronger Communities Together
        </div>

       
        <h1 className="text-[1.9rem] sm::text-6xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
          Share Resources Within
          Your{" "}
          <span className="bg-linear-to-r from-emerald-500  to-emerald-500 bg-clip-text text-transparent">
            Neighborhood
          </span>
        </h1>

        
        <p className="text-white text-[0.9rem] sm:text-lg  mx-auto ">
          Need a ladder for the weekend? Have a drill you rarely use?
          Connect with neighbors and share resources to build a stronger,
          more sustainable community.
        </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-8 sm:mt-10">
       
        <button onClick={(()=> navigate("/request"))} className="w-full sm:w-auto px-4 sm:px-10 py-2.5 sm:py-4 text-sm sm:text-lg rounded-xl bg-emerald-600 text-white font-semibold shadow-md hover:bg-emerald-500 active:scale-95 transition duration-200">
          Request a Resource
         </button>
        <button onClick={(()=>navigate("offer"))} className="w-full sm:w-auto px-4 sm:px-10 py-2.5 sm:py-4 text-sm sm:text-lg rounded-xl border-2 border-emerald-400 bg-white/90 text-emerald-700 font-semibold hover:bg-emerald-50 active:scale-95 transition duration-200">
         Offer a Resource
        </button>
     </div>
     </div>
    </section> */}

      <section></section>

      <WhyChooseUs />
      <GetStarted />
      <FAQ />
    </>
  );
}

export default Home;
