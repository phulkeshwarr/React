import React from 'react'
import LeftContent from './LeftContent.jsx'
import RightContent from './RightContent.jsx'


const Content = (props) => {
  return (
    <div className='flex items-center justify-between h-[85vh] bg-gray-100 px-4 gap-4 '>
      <LeftContent />
      <RightContent users={props.users} id={props.id} />
    </div>
  )
}

export default Content