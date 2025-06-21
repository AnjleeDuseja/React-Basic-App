import React, { useState } from 'react'

function Counter() {
    const [counter, SetCounter]=useState(5);

    const handleCounter=(opt="increase", number)=>{

        if(opt === "decrease") {

            if (counter <= 0) { 
                alert("Counter cannot be negative");
             }

                 else if((counter - number) < 0) { 
                 alert("Counter cannot be negative");
                 SetCounter(counter => counter);
                    }

            else
            SetCounter(counter => counter - number);

            }
        else
            SetCounter(counter => counter + number);
        
    }

  return (

    <div className='bg-gray-100 border border-gray-200 h-70  mx-10 flex flex-col items-center  shadow-lg shadow-gray/40 rounded-lg'>
        <h1 className=' italic text-2xl font-bold bg-black text-white text-center py-3 mb-10 w-full rounded shadow-lg shadow-black/20'>Counter App</h1>
    <div className="flex items-center justify-center gap-10 mt-5">
       <button className="hover:border hover:bg-white hover:border-black hover:text-black bg-black text-white active:bg-black-700 px-4 py-1 rounded-sm transition-colors duration-300"
       onClick={()=>handleCounter("decrease", 5)} > Decrease by 5 </button>
       <button className="border border-black-200 text-black-500 hover:border-transparent hover:bg-black hover:text-white active:bg-black-700 px-4 py-1 rounded-sm transition-colors duration-300"
      onClick={()=>handleCounter("decrease", 1)}
      >Decrease</button>
        <span className="mx-2 font-bold text-4xl rounded-full bg-black text-white p-6">{counter}</span>
      <button className="border border-black-200 text-black-500 hover:border-transparent hover:bg-black hover:text-white active:bg-black-700 px-4 py-1 rounded-sm transition-colors duration-300"
       onClick={()=>handleCounter("increase", 1)} > Increase </button>
       <button className="hover:border hover:bg-white hover:border-black hover:text-black bg-black text-white active:bg-black-700 px-4 py-1 rounded-sm transition-colors duration-300"
       onClick={()=>handleCounter("increase", 5)} > Increase by 5 </button>
    </div>
    </div>
  )
}

export default Counter
