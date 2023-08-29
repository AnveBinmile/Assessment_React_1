import React from "react";
import Vector from "./ComponentVector";
import Logo from "./ComponentLogo";
import { Itemprops } from "../../utils/types/typesCommonComponents";
import { menuitems } from "../../../pages/HomeScreen/utils/constants/DummyData";

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
