import React from 'react'
import Compo1main from './Compo1main'
import Compo2main from './Compo2main'

const Mainpage = () => {
  return (
    <div className='flex mt-[50px] sm:items-center sm:justify-end gap-[50px]  md:gap-0 xl:gap-[200px] xl:flex-row flex-col items-center'>
        <Compo1main/>
        <Compo2main/>
    </div>
  )
  
}

export default Mainpage