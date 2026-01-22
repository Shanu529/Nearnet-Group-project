import React, { useState } from "react";
import ListingCard from "../components/ListingCard.jsx";
function ResourceListings() {
  
    // const [resource,setResource] = useState([1,2,3,4]);
    const [search, setSearch] = useState("");
    const [ description, setDescription] = useState("");
    const [filterType, setFilterType] = useState("ALL");  
   const resources = [
  {
    id: 1,
    type: "OFFER",
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

// const count = resources.length
const [count, setCount] = useState(resources)

const filterResources = resources.filter((item)=>{
  const matchSearch = item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  const matchDescription = item.description.toLocaleLowerCase().includes(description.toLocaleLowerCase());

  const matchType = filterType === "ALL" || item.type === filterType;

  return matchType && matchSearch && matchDescription
})

  return (
    <section className="w-full  bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
      <section
        id="events"
        className="px-6 md:px-16 py-16 grow"
      >
        <h2 className="text-center   text-emerald-600 text-3xl md:text-5xl font-bold mb-3">
           Resource Listings
        </h2>
        <p className="text-center  mb-10">
         
          Browse and  Search resources requested and offered by your neighbors
        </p>
<div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
  <div className="relative w-full md:w-1/3">
    <input
      type="text"
      placeholder="Search resources by title..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="
        w-full
        border border-black
        rounded-xl
        px-4 py-3 pl-10
        text-black
        placeholder-gray-500
        focus:outline-none
        focus:ring-2
        focus:ring-green-200
        transition
      "
    />
    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
      
    </span>
  </div>

  <div className="relative w-full md:w-1/3">
    <input
      type="text"
      placeholder="Search resources by description..."
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      className="
        w-full
        border border-black
        rounded-xl
        px-4 py-3 pl-10
        text-black
        placeholder-gray-500
        focus:outline-none
        focus:ring-2
        focus:ring-green-200
        transition
      "
    />
    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
      
    </span>
  </div>
</div>


        
        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-xl p-2 flex gap-2">
            <button
              onClick={() => setFilterType("ALL")}
              className={`px-4 py-2 rounded-lg ${
                filterType === "ALL"
                  ? "bg-gray-300 shadow"
                  : "text-gray-600"
              }`}
            >
              All  Resources
            </button>
            
            <button
              onClick={() => setFilterType("REQUEST")}
              className={`px-4 py-2 rounded-lg ${
                filterType === "REQUEST"
                  ? "bg-gray-300 shadow"
                  : "text-gray-600"
              }`}
            >
              Requests
            </button>

            <button 
            onClick={()=>setFilterType("OFFER")}
            className={`px-5 py-2 rounded-lg 
            
              ${filterType == "OFFER" ? "bg-gray-300 shadow":"text-gray-600"}
            `}>
              Offers
            </button>
          </div>
        </div>

        {/* Count */}
        <div className="mb-6 text-gray-600">
          Showing {count.length} resources
        </div>
        
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filterResources.length > 0 ? (
            filterResources.map((item) => (
              <ListingCard key={item.id} resource={item} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No events found. please wait
            </p>
          )}
        </div>    
      </section>
        
        
      </div>
    </section>
  );
}

export default ResourceListings;
