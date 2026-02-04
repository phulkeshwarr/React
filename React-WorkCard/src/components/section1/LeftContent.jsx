import React from 'react'
import { ArrowUpRight } from 'lucide-react';

const LeftContent = () => {
  return (
    <div className='h-full w-1/4 bg-gray-100 flex flex-col   px-4 py-6'>
      <div className='flex justify-center px-4'>
        <h3 className="text-5xl font-bold justify-center pt-12">Popular Products This Week </h3>
      </div>
      <div className='flex flex-col justify-center p-6  '>
        <h5>Depending on customer
satisfaction and access
to banking products. potential
target audience can be divided
into three groups.</h5>
</div>
      <div className='pt-8'><ArrowUpRight size={72} /></div>     
    </div>
  )
}

export default LeftContent
