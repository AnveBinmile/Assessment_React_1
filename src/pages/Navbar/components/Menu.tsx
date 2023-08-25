import React from "react";
import Vector from "./Vector";
import {ReactComponent as Logo} from './Logo.svg'
import { Itemprops } from "../../../components/type";


const MenuItem:React.FC<Itemprops> = ({itemname}) => {
  return (
    <div className='hidden sm:block md:text-lg text-sm transition-[0.8] hover:border-b-[5px] border-black'>{itemname}</div>
  )
}


const menuitems = ["New York", "For Job Seekers", "For Employers"];

const Menu = () => {
  return (
    <div className="flex flex-row justify-between items-center w-[100%] sm:w-[80%] mx-[20px]  lg:w-[50%]">
      <Logo />
      <Vector/>
      {menuitems.map((item) => {
        return <MenuItem  itemname={item} />;
      })}
    </div>
  );
};

export default Menu;