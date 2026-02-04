import React from 'react'
import RightCard from './RightCard'

const RightContent = (users) => {
  const index=0;
  return (
    <div id='right' className="h-full w-3/4  p-6 m-4 overflow-x-auto hide-scrollbar  ">
      <div className="flex gap-4 flex-nowrap">
        {
          
          users.users.map((user,index) => (
            <RightCard  img={user.img} intro={user.intro} experience={user.experience}  name={user.name} number={user.index} id = {index} />
          ))
        }
    </div>
    </div>
  )
}

export default RightContent
