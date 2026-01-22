import React from "react";

import WhyChooseUs from "../components/WhyChooseUs.jsx";
import GetStarted from "../components/GetStarted.jsx";

function Home() {
  return (
    <>
  
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
         <button className="w-full sm:w-auto px-4 sm:px-10 py-2.5 sm:py-4 text-sm sm:text-lg rounded-xl bg-emerald-600 text-white font-semibold shadow-md hover:bg-emerald-500 active:scale-95 transition duration-200">
          Request a Resource
         </button>

        <button className="w-full sm:w-auto px-4 sm:px-10 py-2.5 sm:py-4 text-sm sm:text-lg rounded-xl border-2 border-emerald-400 bg-white/90 text-emerald-700 font-semibold hover:bg-emerald-50 active:scale-95 transition duration-200">
         Offer a Resource
        </button>
     </div>
 

      </div>
    </section>
    <WhyChooseUs/>
    <GetStarted/>
    </>
  );
}

export default Home;
