import React from 'react'

const GetStartedCard = (props) => {
  return (
    <div className="parent p-2">
        <div className=" card h-90 w-70 rounded-3xl border-2 bg-white p-2 flex flex-col justify-between">
          <img className="h-40 rounded-2xl" src={props.img} alt="" />
          <div className="p-2">
          <p className=" flex items-center justify-center font-semibold">{props.title}</p>
          <p className=" flex items-centet justify-left font-medium text-gray-400">{props.user}</p>
          <p className=" flex items-center justify-left text-sm text-gray-500">{props.type}</p>
          <p className=" flex items-center justify-center font-semibold">{props.time}</p>
         </div>
        </div>
      </div>
  )
}
export default GetStartedCard
