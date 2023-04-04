import React, { useContext } from 'react'
import {MdOutlineDarkMode} from "react-icons/md"
import {BsSun} from "react-icons/bs"
import { AppContext } from '../context/AppContext'
// import { AppContext } from './Context/AppContext'

// #102344
const Header = () => {
  const {isDark,setIsDark} = useContext(AppContext)
  return (
    <div className={`w-full p-4 fixed top-0 bg-white  text-center  ${isDark ? "back text-white shadow-md shadow-pink-900" : "shadow-md" }`}>
      {/* <header > */}
         <h1 className='font-bold text-2xl '>My Blogs</h1>
         <div className="Modes absolute p-1 right-4 flex justify-between top-[24%] border border-1 border-slate-400 rounded-full">
       
      
        { 
          isDark ? (   <span onClick={()=>{setIsDark(false)}} className={`p-0.5 rounded-full duration-200 bg-white`}> <MdOutlineDarkMode color='black'/></span>) : (   <span onClick={()=>{setIsDark(true)}} className={`p-0.5 rounded-full duration-200`}> <BsSun/></span>)
         }

         </div>
         {/* </header> */}
    </div>
  )
}

export default Header