import React from "react";

import "./App.css";
import { Homescreen, ComponentNavbar } from "./CommonComponents";

function App() {
  return (
    <div className="App mx-auto w-5/6 flex flex-col gap-[50px]">
      <ComponentNavbar />
      <Homescreen />
    </div>
  );
}

export default App;
