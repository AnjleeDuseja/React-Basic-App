import React, { useState } from 'react'

function ColorChanger() {
  const [color, setColor]=useState("black")

  return (
       <div className=' h-auto py-5 mx-10 flex flex-col items-center  shadow-lg shadow-gray/40 rounded-lg min-w-[200px]'>
        <h1 className=' italic text-xl font-bold bg-black text-white text-center py-3 mb-10 w-full rounded shadow-lg shadow-black/20'>Color Changer App</h1>
      <div className='flex justify-between md:flex-col gap-4'>
          <div className= 'min-w-[150px] min-h-[150px] ' style={{backgroundColor:color}}> 
            <p className='text-center text-white py-5 break-words px-3' >
              Select the Color from Palatte to change the backgroundColor
            </p>
            </div>
          <div className='flex flex-col md:flex-row gap-5' > 
            <div className='w-10 h-10 bg-red-500 rounded-sm' onClick={()=>setColor("#FF0000")}></div> 
            <div className='w-10 h-10 bg-orange-500 rounded-sm' onClick={()=>setColor("#f97316")}></div> 
            <div className='w-10 h-10 bg-lime-500 rounded-sm'onClick={()=>setColor("#84cc16")}></div>
             <div className='w-10 h-10 bg-green-700 rounded-sm'onClick={()=>setColor("#15803d")}></div> 
            <div className='w-10 h-10 bg-cyan-500 rounded-sm'onClick={()=>setColor("#06b6d4")}></div> 
            <div className='w-10 h-10 bg-blue-500 rounded-sm'onClick={()=>setColor("#3b82f6")}></div>
             <div className='w-10 h-10 bg-indigo-800 rounded-sm'onClick={()=>setColor("#3730a3")}></div>
             <div className='w-10 h-10 bg-purple-500 rounded-sm'onClick={()=>setColor("#a855f7")}></div> 
            <div className='w-10 h-10 bg-rose-400 rounded-sm'onClick={()=>setColor("#fb7185")}></div> 
            <div className='w-10 h-10 bg-gray-400 rounded-sm'onClick={()=>setColor("#9ca3af")}></div>
            <div className='w-10 h-10 bg-black rounded-sm'onClick={()=>setColor("#000")}></div>
          </div>
      </div>
</div>
  )
}

export default ColorChanger
