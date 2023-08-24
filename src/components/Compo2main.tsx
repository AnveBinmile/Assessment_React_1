import React from "react";
import Illustration from "../assets/Illustration.png";
import mobileBack from "../assets/mobileBack.png";
import Background from "./Background";
import BackgroundSmall from "./BackgroundSmall";

const Compo2main = () => {
  return (
    <div className="sm:w-4/5  w-[130%]  bg-center flex flex-row items-center justify-center">
      <Background />
      <BackgroundSmall />
    </div>
  );
};

export default Compo2main;
