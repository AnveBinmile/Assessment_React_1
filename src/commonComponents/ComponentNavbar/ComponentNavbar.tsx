import React from 'react';
import Menu from './components/Menu';
import Button from '../ComponentButton/ComponentButton';

const ComponentNavbar = () => {
  return (
    <div className='flex sm:gap-[20px] w-[100%]  sm:flex-col lg:flex-row sm:justify-between items-center flex-col  mt-[50px]'>
        <Menu/>
        <div className="btns sm:flex flex-row gap-2 justify-between sm:w-[60%] lg:w-[30%] hidden">
            <Button width={300} color='$' text='Create a Resume' setText={()=>{}}/>
            <Button width={150} color='primary' text='Sign ' setText={()=>{}}/>
        </div>
    </div>
  )
}

export default ComponentNavbar;