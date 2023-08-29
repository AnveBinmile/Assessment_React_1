import React from 'react';
import Menu from './components/ComponentMenu';
import Button from '../ComponentButton/ComponentButton';

const ComponentNavbar = () => {
  return (
    <div className='nav'>
        <Menu/>
        <div className="btns sm:flex flex-row gap-2 justify-between sm:w-[60%] lg:w-[30%] hidden">
            <Button width={300} color='$' text='Create a Resume' setText={()=>{}}/>
            <Button width={150} color='primary' text='Sign ' setText={()=>{}}/>
        </div>
    </div>
  )
}

export default ComponentNavbar;