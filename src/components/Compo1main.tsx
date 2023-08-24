import React, { useState } from "react";
import Search from "./Search";
import Button from "./Button";

const Compo1main = () => {
  const [text, setText] = useState<string>("");
  return (
    <div className="sm:w-2/3 gap-[30px] md:gap-[40px] flex flex-col justify-center w-[100%] items-start">
      <h1 className="font-bold text-gray-700 font-montserrat text-6xl">
        Head Hunter
      </h1>
      <h3 className="font-normal text-gray-400 font-montserrat text-2xl"   >
        Job For everyone
      </h3>
      <div className="search flex lg:flex-row md:flex-col sm:flex-row md:gap-[30px] justify-start sm:justify-between  w-[90%] sm:w-[100%]  gap-[20px]">
        <Search text={text} setText={setText} />
        <Button color='primary' width={150} text='Sign In' setText={setText} />
      </div>
    </div>
  );
};

export default Compo1main;
