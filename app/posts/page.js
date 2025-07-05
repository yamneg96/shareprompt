import React from 'react'

const page = () => {
  return (
    <div className='text-center'>
      <div className="text-4xl text-cyan-500">
        <a href="http://localhost:3000">
        go back home 👈</a>
      </div>
      <div className='text-center text-4xl'> 
        This is one of the 
        <span className='text-cyan-400'> POST</span> pages.
        </div>

      <div className='bg-cyan-50 border-b-2 text-4xl text-black mt-7 p-4 mr-4 ml-4 rounded-3xl'>
        this is the post card.
      </div>
    </div>
  )
}

export default page