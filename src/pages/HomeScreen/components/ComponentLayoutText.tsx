import React, { useState } from "react";
import Search from "./ComponentSearch";
import Button from "../../../commonComponents/ComponentButton/ComponentButton";


const LayoutText = () => {
    const [text, setText] = useState<string>("");
  return (
    <div className="layout_img">
      <h1 className="layout_h1">
        Head Hunter
      </h1>
      <h3 className="layout_h3">
        Job For everyone
      </h3>
      <div className="layout_sb">
        <Search text={text} setText={setText} />
        <Button color="primary" width={150} text="Sign In" setText={setText} />
      </div>
    </div>
  );
}

export default LayoutText;