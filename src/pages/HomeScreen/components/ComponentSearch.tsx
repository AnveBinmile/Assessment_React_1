import React, { KeyboardEvent, useState } from "react";
import { SearchProps } from "../../../utils/types/type";
import { ReactComponent as FilterIcon } from "../../../assets/svgs/FilterIcon.svg";
import { keyString } from "../../../utils/constants/DummyData";

const Search: React.FC<SearchProps> = ({ text, setText }) => {

  const handleKeyDown = (e: KeyboardEvent): void => {
    if (e.key === keyString) {
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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setText(e.target.value);
        }}
        placeholder="Profession, position or company "
      />
      <FilterIcon />
    </div>
  );
};

export default Search;
