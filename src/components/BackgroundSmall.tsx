import React from "react";
import mobileBack from "../assets/images/mobileBack.png";

const BackgroundSmall = () => {
  return (
    <div
      className="w-[90%] sm:hidden block h-[500px]"
      style={{ backgroundImage: `url(${mobileBack})`, backgroundSize: "cover" }}
    >
    </div>
  );
};

export default BackgroundSmall;
