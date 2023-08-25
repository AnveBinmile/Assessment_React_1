import React from "react";
import Vector from "./Vector";
import { ReactComponent as Logo } from "./Logo.svg";
import { Itemprops } from "../../../utils/types/type";
import { menuitems } from "../../../utils/constants/DummyData";

const MenuItem: React.FC<Itemprops> = ({ key, itemname }) => {
  return (
    <div className="menu_item">
      {itemname}
    </div>
  );
};

const Menu: React.FC = () => {
  const result = menuitems.map((item, index) => {
    return <MenuItem key={index} itemname={item} />;
  });

  return (
    <div className="menu">
      <Logo />
      <Vector />
      {result}
    </div>
  );
};

export default Menu;
