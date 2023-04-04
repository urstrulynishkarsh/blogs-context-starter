import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'
// import Card from './Card'

const Blog = () => {
    // /consume
    const {posts,loading}=useContext(AppContext)

  return (
    <div className='w-11/12 mt-[60px] max-w-[670px] py-8 flex flex-col mb-[4rem] gap-y-7'>
        {
            loading?(<Spinner/>):
            (posts.length===0?
                (<div>
                    NO POST FOUND!
                </div>):
            (posts.map((post)=>(
            // <Card/>
            <div key={post.id}>
                 <p className='font-bold text-lg text-red-400'>{post.title}</p>
                 <p className='text-sm mt-[4px]'>By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span></p>
                <p className='text-sm mt-[4px]'>Posted on <span>{post.date}</span></p>
                <p className='text-md mt-[14px]'>{post.content}</p>
                <div className='flex gap-x-3'>
                    {post.tags.map((tag,index)=>{
                            return(
                                <span className='text-blue-500 underline font-bold text-[10px]' key={index}>{`#${tag}`}</span>
                            )
                    })}
                </div>
            </div>
            )))
            )
        }

    </div>
  )
}

export default Blog