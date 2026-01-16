import React from "react";

import WhyChooseUs from "../components/WhyChooseUs.jsx";
import GetStarted from "../components/GetStarted.jsx";

function Home() {
  return (
    <>
  
    <section className=" bg-white flex items-center  px-6 justify-center bg-[url(/main5.jpg)] bg-cover h-full py-30 bg-center ">
      <div className="max-w-4xl text-center ">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 text-sm font-medium mb-6">
          <span className="text-lg">♡</span>
          Building Stronger Communities Together
        </div>

       
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Share Resources Within <br />
          Your{" "}
          <span className="bg-linear-to-r from-emerald-500  to-emerald-500 bg-clip-text text-transparent">
    
            Neighborhood
          </span>
        </h1>

        
        <p className="text-white text-lg  mx-auto ">
          Need a ladder for the weekend? Have a drill you rarely use?
          Connect with neighbors and share resources to build a stronger,
          more sustainable community.
        </p>

      
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <button className="px-8  rounded-xl bg-emerald-700 text-white font-semibold shadow-md hover:bg-emerald-500 transition">
           Request a Resource
          </button>

          <button className="px-8 py-4 rounded-xl border-2 border-emerald-500 text-emerald-600 font-semibold hover:bg-emerald-50 transition">
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
