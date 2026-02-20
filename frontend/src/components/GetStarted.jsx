import React from "react";
import { Link } from "react-router";
import GetStartedCard from "./GetStartedCard";
const GetStarted = (props) => {
  console.log(props.title);
  const listings = [
    {
      id: 1,
      title: "Need a Power Drill",
      description: "Required for wall mounting work. Need for 1 hour.",
      type: "REQUEST",
      user: "Rohit • Flat 203",
      time: "10 mins ago",
      image: "https://picsum.photos/200/200?random=11",
      icon: "fa-screwdriver-wrench",
      badgeColor: "bg-yellow-100 text-yellow-700",
      iconColor: "text-yellow-600",
    },
    {
      id: 2,
      title: "First-Aid Help Available",
      description: "Certified nurse available in the block.",
      type: "EMERGENCY",
      user: "Anjali • Flat 112",
      time: "Just now",
      image: "https://picsum.photos/200/200?random=12",
      icon: "fa-kit-medical",
      badgeColor: "bg-red-100 text-red-700",
      iconColor: "text-red-600",
      emergency: true,
    },
    {
      id: 3,
      title: "Lending Folding Chairs",
      description: "6 chairs available for small events.",
      type: "LEND",
      user: "Mr. Sharma • House 7",
      time: "1 hour ago",
      image: "https://picsum.photos/200/200?random=13",
      icon: "fa-chair",
      badgeColor: "bg-green-100 text-green-700",
      iconColor: "text-green-600",
    },
    {
      id: 4,
      title: "Need Extension Cable",
      description: "For outdoor lighting setup this evening.",
      type: "REQUEST",
      user: "Amit • Flat 405",
      time: "25 mins ago",
      image: "https://picsum.photos/200/200?random=14",
      icon: "fa-plug",
      badgeColor: "bg-yellow-100 text-yellow-700",
      iconColor: "text-yellow-600",
    },
    {
      id: 5,
      title: "Offering Car Jump Start",
      description: "Available with jumper cables if anyone needs help.",
      type: "LEND",
      user: "Neha • Parking B2",
      time: "40 mins ago",
      image: "https://picsum.photos/200/200?random=15",
      icon: "fa-car-battery",
      badgeColor: "bg-green-100 text-green-700",
      iconColor: "text-green-600",
    },
  ];
  return (
    <section className="w-full min-h-screen bg-[#faf7f2] py-20">
      <div data-aos="fade-down">
      <div className="max-w-4xl mx-auto px-6 sm:text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
          Ready to Get Started?
        </h2>

        <p className="text-gray-600 text-lg mb-10">
          Browse available resources in your neighborhood or post what you need.
        </p>

        <Link
          to="/listing"
          className="px-8 py-4 rounded-xl bg-emerald-500 text-white font-semibold shadow-md hover:bg-emerald-600 transition"
        >
          View All Listings
        </Link>
      </div>
       <div id="scroll" className="mt-12 max-w-6xl mx-auto px-4 flex gap-8 flex-row overflow-x-auto no-scrollbar">
              {listings.map(function (elem, idx) {
              return <div key={idx}>
                <GetStartedCard id={elem.id} title={elem.title} type={elem.type} user={elem.user} time={elem.time} img={elem.image} icon={elem.icon} />
              </div>;
            })}
            </div>
      </div>
    </section>
  );
}

export default GetStarted;
