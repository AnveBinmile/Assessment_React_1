import React from "react";
import MenuItem from "./MenuItem";
import Logo from "./Logo";
import Vector from "./Vector";

const menuitems = ["New York", "For Job Seekers", "For Employers"];

const Menu = () => {
  return (
    <div className="flex flex-row justify-between items-center w-[80%] mx-[20px]  lg:w-[50%]">
      <Logo />
      <Vector/>
      {menuitems.map((item) => {
        return <MenuItem  itemname={item} />;
      })}
    </div>
  );
};

export default Menu;
