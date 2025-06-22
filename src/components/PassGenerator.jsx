import React, { useCallback, useEffect, useRef, useState } from 'react'

function PassGenerator() {

    const [includeNum, setIncludeNum]=useState(false);
    const [includeChar, setIncludeChar]=useState(false);
    const [length, setLength]=useState(8);
    const [password,setPassword]=useState("")

    const passRef=useRef(null)

    const generatePassword= useCallback(()=>{

        let generatedPass="";
        let passwordStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        
        if (includeNum) passwordStr+="0123456789";
        if (includeChar) passwordStr+="*!@#$^&+_;-/";

        for (let i = 1; i <=length ; i++) {
            const charIndex= Math.floor(Math.random()*passwordStr.length);
            generatedPass+=passwordStr[charIndex]
        }
        setPassword(generatedPass);
        
    },[includeChar,includeNum,length,setPassword]
    )


    const copiedToClipBoard= useCallback( ()=>{
        passRef.current?.select()
        window.navigator.clipboard.writeText(password);
    },[password]);


    useEffect(()=>{
    
        generatePassword();
    },[includeNum,includeChar,length]);




  return (
     <div className=' h-auto py-5 mx-10 flex flex-col items-center  shadow-lg shadow-gray/40 rounded-lg min-w-[200px]'>
        <h1 className=' italic text-xl font-bold bg-black text-white text-center py-3 mb-10 w-full rounded shadow-lg shadow-black/20'>Password Generator App</h1>
     
     <div>
        <div className='flex flex-col p-2 md:flex-row gap-3 my-10'>
            <input type="text" placeholder="Generated Password" className='rounded-md border min-w-[300px] py-2 px-1' readOnly value={password} ref={passRef}/>
           <button className='hover:bg-gray-400 hover:text-black hover:border-gray py-2 rounded-sm px-2 mx-2 cursor-pointer bg-gray-800 text-white' onClick={copiedToClipBoard}>Copy to Clipboard</button>
         
        </div>
        <div className='flex flex-col p-2 md:flex-row gap-1 my-10'>
            <label htmlFor="length"  >Length</label>
            <input type="range" name="length" className='mr-2 ' value={length} onChange={(e)=> setLength(e.target.value)}/>
             <label htmlFor="length" className='mr-2 ' >{length}</label>
            <input type="checkbox" name="number"  onClick={(e)=> setIncludeNum((includeNum)=>!(includeNum))}/>
             <label htmlFor="number" className='mr-4' >Number</label>
            <input type="checkbox" name="Characters"  onClick={(e)=> setIncludeChar((prev)=>!prev)} />
             <label htmlFor="haracters">Characters</label>
        </div>
     </div>

    </div>
    
  )
}

export default PassGenerator
