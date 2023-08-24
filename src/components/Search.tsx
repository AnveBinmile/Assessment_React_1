import React, { KeyboardEvent, useState } from "react";
import { SearchProps } from "./type";


const Search:React.FC<SearchProps> = ({text,setText}) => {

  const handleClick =()=>{
    setText("");
  }



  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    console.log(text);
    setText(e.target.value);
  }

  const handleKeyDown=(e:KeyboardEvent):void => {
    if(e.key==='Enter')
    {
      setText("");
    }
  }

  return (
    <div className="flex rounded-[50px]  justify-between w-[100%]items-center h-[50px] flex-row border-4 items-center sm:px-2 sm:w-[80%]">
      <input className="focus:border-none w-[90%]" type="text" value={text} onKeyDown={handleKeyDown} onChange={handleChange}  placeholder="Profession, position or company " />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="11"
        viewBox="0 0 15 11"
        fill="none"
      >
        <path
          d="M5.10132 8.46002H13.7511"
          stroke="#767676"
          stroke-width="1.31641"
          stroke-linecap="round"
        />
        <path
          d="M0.776367 2.69348L13.7511 2.69348"
          stroke="#767676"
          stroke-width="1.31641"
          stroke-linecap="round"
        />
        <circle
          cx="7.98451"
          cy="2.6935"
          r="1.74452"
          fill="white"
          stroke="#767676"
          stroke-width="1.31641"
        />
        <circle
          cx="2.69862"
          cy="8.46004"
          r="1.74452"
          fill="white"
          stroke="#767676"
          stroke-width="1.31641"
        />
      </svg>

    </div>
  );
};

export default Search;
