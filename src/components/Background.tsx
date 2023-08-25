import React from "react";
import Illustration from "../assets/images/Illustration.png";

const Background = () => {
  return (
    <div
      className="w-[100%] sm:block hidden h-[800px]"
      style={{
        backgroundImage: `url(${Illustration})`,
        backgroundSize: "contain",
        backgroundRepeat:'no-repeat',
      }}
    >
      {/* Your content */}
    </div>
  );
};

export default Background;
