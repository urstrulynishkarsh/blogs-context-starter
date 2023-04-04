import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
    
  const{page,handlePageChanger,totalPages,isDark}=useContext(AppContext)


  
  return (
    <div className={`w-full py-4  fixed bottom-0 md:border-t-2  bg-white ${isDark ? "sm:'100px' sm:bg-black bg-black text-white shadow-md shadow-pink-900" : "shadow-md" }`}>
    <div className=' flex max-w-[670px] justify-between mx-auto  gap-y-7'>
      <div className='gap-x-5 flex'>
        {
            page>1 &&
            <button className='rounded-md border px-4 py-1' onClick={()=>handlePageChanger(page-1)}>
                Previous
            </button>
        }
         {
            page<totalPages &&
            <button className='rounded-md border px-4 py-1' onClick={()=>handlePageChanger(page+1)}>
                Next
            </button>
        }
        </div>
        <p className='font-bold text-sm'>Page {page} of {totalPages}</p>
        </div>
    </div>
  )
}

export default Pagination