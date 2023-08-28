import React from 'react';
import mobileBack from "../assetsSmall/images/mobileBack.png";
import Illustration from '../assetsSmall/images/Illustration.png';


const ComponentBackground: React.FC = () => {
  return (
    <>
      <img className="w-[110%] sm:hidden block h-[500px]" src={mobileBack} />
      <img className="w-[100%] sm:block hidden h-[800px]" src={Illustration}/>
    </>
  );
}

export default ComponentBackground;