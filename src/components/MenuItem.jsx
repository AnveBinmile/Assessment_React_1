import React from 'react';

const MenuItem = ({itemname}) => {
  return (
    <div className='hidden sm:block md:text-lg text-sm transition-[0.8] hover:border-b-[5px] border-black'>{itemname}</div>
  )
}

export default MenuItem