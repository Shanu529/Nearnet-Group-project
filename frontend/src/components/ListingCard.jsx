import React from "react";

function ListingCard({ resource }) {
  return (
    <>
    <div data-aos="fade-down">
      <div className="border rounded-2xl p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-00">
            {resource.type}
          </span>
          <span className="text-sm text-gray-500">{resource.time}</span>
        </div>
        <div>
          <img
            src={resource.image}
            alt={resource.title}
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {resource.title}
        </h3>

        <p className="text-gray-600 mb-6">{resource.description}</p>

        <div className="pt-4 border-t">
          <span className="text-sm px-3 py-1 rounded-full bg-yellow-50 text-yellow-700">
            {resource.priority}
          </span>
        </div>
      </div>
    </div>
    </>
  );
}

export default ListingCard;
