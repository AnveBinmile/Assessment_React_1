import React, { KeyboardEvent, useState } from "react";
import { SearchProps } from "../../../utils/types/type";
import { ReactComponent as Filter } from "../assets/svgs/Filter.svg";

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
    <div className="layout_s">
      <input
        className="layout_s_i"
        type="text"
        value={text}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        placeholder="Profession, position or company "
      />
      <Filter />
    </div>
  );
};

export default Search;
