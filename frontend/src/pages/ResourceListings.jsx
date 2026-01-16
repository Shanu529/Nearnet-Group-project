import React, { useState } from "react";
import ListingCard from "../components/ListingCard.jsx";
function ResourceListings() {
  
    // const [resource,setResource] = useState([1,2,3,4]);
   const resources = [
  {
    id: 1,
    type: "REQUEST",
    time: "Yesterday",
    title: "Ladder for Painting",
    description:
      "Need a tall ladder for painting the exterior of my house this weekend.",
    priority: "Medium Priority",
    image: "https://picsum.photos/400/250?random=1",
  },
  {
    id: 2,
    type: "OFFER",
    time: "2d ago",
    title: "Electric Drill Set",
    description: "Drill set available in good condition for short-term use.",
    priority: "Available Now",
    image: "https://picsum.photos/400/250?random=2",
  },
  {
    id: 3,
    type: "REQUEST",
    time: "12h ago",
    title: "Baby Stroller",
    description:
      "Looking for a stroller for my visiting niece. Need urgently for tomorrow.",
    priority: "Urgent",
    image: "https://picsum.photos/400/250?random=3",
  },
  {
    id: 4,
    type: "REQUEST",
    time: "12h ago",
    title: "Baby Stroller",
    description:
      "Looking for a stroller for my visiting niece. Need urgently for tomorrow.",
    priority: "Urgent",
    image: "https://picsum.photos/400/250?random=4",
  },
  {
    id: 5,
    type: "REQUEST",
    time: "12h ago",
    title: "Baby Stroller",
    description:
      "Looking for a stroller for my visiting niece. Need urgently for tomorrow.",
    priority: "Urgent",
    image: "https://picsum.photos/400/250?random=5",
  },
  {
    id: 6,
    type: "REQUEST",
    time: "12h ago",
    title: "Baby Stroller",
    description:
      "Looking for a stroller for my visiting niece. Need urgently for tomorrow.",
    priority: "Urgent",
    image: "https://picsum.photos/400/250?random=6",
  },
];
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Resource Listings
          </h1>
          <p className="text-gray-600 text-lg">
            Browse resources requested and offered by your neighbors
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-xl p-2 flex gap-2">
            <button className=" px-5 py-2 rounded-lg font-medium ">
              All Resources
            </button>
            <button className="px-5 py-2 rounded-lg text-gray-600">
              Requests
            </button>
            <button className="px-5 py-2 rounded-lg text-gray-600">
              Offers
            </button>
          </div>
        </div>

        {/* Count */}
        <div className="mb-6 text-gray-600">
          Showing 6 resources
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          {resources.map((data)=>{
            return (
              <ListingCard key={data.id} resource={data} />
            )
          })}
          


        </div>
      </div>
    </section>
  );
}

export default ResourceListings;
