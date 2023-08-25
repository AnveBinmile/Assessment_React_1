import React, { KeyboardEvent, useState } from "react";
import { SearchProps } from "../../../components/type";
import {ReactComponent as Filter} from '../assets/svgs/Filter.svg'

const Search: React.FC<SearchProps> = ({ text, setText }) => {
  const handleClick = () => {
    setText("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent): void => {
    if (e.key === "Enter") {
      setText("");
    }
  };

  return (
    <div className="flex rounded-[50px]  justify-between w-[100%]items-center h-[50px] flex-row border-4 items-center px-2 sm:w-[80%]">
      <input
        className="focus:border-none w-[90%] outline-none"
        type="text"
        value={text}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        placeholder="Profession, position or company "
      />
    <Filter/>
    </div>
  );
};

export default Search;
