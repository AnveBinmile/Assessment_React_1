import React from "react";
import { LayoutText, LayoutImage } from "./Export";

const index = () => {
  return (
    <div className="flex mt-[50px] sm:items-center sm:justify-end gap-[50px]  md:gap-0 xl:gap-[200px] xl:flex-row flex-col items-center">
      <LayoutText />
      <LayoutImage />
    </div>
  );
};

export default index;
