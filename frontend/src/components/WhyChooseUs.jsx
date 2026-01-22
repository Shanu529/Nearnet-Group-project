import React from "react";

import { IoHeart } from "react-icons/io5";
import { MdSafetyDivider } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";

function WhyChooseUs() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className=" md:text-center mb-16">
          <h2 className=" text-[1.5rem] sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Use Neighborhood Helper?
          </h2>
          <p className="text-gray-600 text-[1rem] sm:text-lg max-w-2xl mx-auto">
            Save money, reduce waste, and strengthen community bonds through
            resource sharing.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          
          <div className="border rounded-2xl p-8 hover:shadow-md transition">
            <IoHeart size={30} className="text-emerald-700"/>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Community First
             </h3>
            <p className="text-gray-600">
              Connect with neighbors and build lasting relationships in your area.
            </p>
          </div>

        
          <div className="border rounded-2xl p-8 hover:shadow-md transition">
            < MdSafetyDivider size={30} className="text-emerald-700"/>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Safe & Trusted
            </h3>
            <p className="text-gray-600">
              Share resources within your verified neighborhood community.
            </p>
          </div>

         
          <div className="border rounded-2xl p-8 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              <AiFillSafetyCertificate size={30} className="text-emerald-700" />
              Quick & Easy
            </h3>
            <p className="text-gray-600">
              Request or offer resources in just a few clicks.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
