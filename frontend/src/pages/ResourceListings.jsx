import React, { useState } from "react";


function ResourceListings() {
  const [openSidebar, setOpenSidebar] = useState(false);

  // Dummy data (UI only)
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
    <div className="bg-white mt-18 h-screen">
        <div className="flex">
          <aside className="hidden md:block w-64 bg-white border-r p-4 space-y-4">
            <nav className="space-y-2">
              <button className="w-full flex items-center gap-2 px-3 py-2 rounded bg-blue-50 text-emerald-700 font-medium">
                <i className="fa-solid fa-house"></i>
                Home
              </button>

              <button className="w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-slate-100">
                <i className="fa-solid fa-handshake"></i>
                Lend Items
              </button>

              <button className="w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-slate-100">
                <i className="fa-solid fa-person-circle-question"></i>
                Request Help
              </button>

              <button className="w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-slate-100">
                <i className="fa-solid fa-triangle-exclamation"></i>
                Emergency
              </button>

              <button className="w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-slate-100">
                <i className="fa-solid fa-calendar-days"></i>
                Events
              </button>
            </nav>
          </aside>

          <main className="flex-1 p-4 md:p-6 space-y-4">
            {listings.map((item) => (
              <div
                key={item.id}
                className={`bg-white rounded-xl shadow-sm hover:shadow transition p-4 flex gap-4 ${item.emergency ? "border-l-4 border-red-500" : ""}`}
              >
                {/* Image */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-lg overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <h3 className="font-semibold text-base sm:text-lg flex items-center gap-2 flex-wrap">
                      <i
                        className={`fa-solid ${item.icon} ${item.iconColor} shrink-0`}
                      ></i>
                      <span className="wrap-break-word">{item.title}</span>
                    </h3>

                    <span
                      className={`text-xs px-3 py-1 rounded-full w-fit ${item.badgeColor}`}
                    >
                      {item.type}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm sm:text-base mt-2">
                    {item.description}
                  </p>
                  <div className="flex bg-red flex-wrap justify-between items-center mt-3 text-xs sm:text-sm text-slate-500 gap-2">
                    <span className="flex items-center gap-1">
                      <i className="fa-solid fa-user"></i>
                      {item.user}
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="fa-solid fa-clock"></i>
                      {item.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
  );
}

export default ResourceListings;
