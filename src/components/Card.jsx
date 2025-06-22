import React from 'react'

function Card({title, description, image, handleView}) {
  return (
   
<div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 m-3 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-100 min-h-[50px]" onClick={() => handleView(title)}>
  <img className="mx-auto block h-20  sm:mx-0 sm:shrink-0" src={image} alt="" />
  <div className=" space-y-2 text-center sm:text-left">
    <div className="space-y-0.5">
      <p className="text-lg font-semibold text-black">{title}</p>
      <p className="font-medium text-gray-500 hidden md:block">{description}</p>
    </div>
    <button className="border border-black-200 text-black-500 hover:border-transparent hover:bg-black hover:text-white active:bg-black-700 px-5 py-1 rounded-full transition-colors duration-300 hidden md:block" onClick={() => handleView(title)}>
      View
    </button>
  </div>
</div>
  
  )
}

export default Card
