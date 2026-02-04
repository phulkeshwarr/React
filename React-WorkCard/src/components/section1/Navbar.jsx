import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-4 px-14 bg-black-100 bg-gray-200'>
      <h4 className='bg-black cursor-pointer text-white rounded-full px-4 py-1.5 uppercase text-xs font-semibold'>
        Target Audience
      </h4>
      <button className='bg-gray-400 rounded-full cursor-pointer px-4 py-1.5 uppercase text-xs tracking-widest font-semibold'>
        Digital Banking Platform
      </button>
    </div>
  )
}

export default Navbar
