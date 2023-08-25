import React from "react";

interface BackgroundProps{
  img: string;
  smVis:boolean;
}




const BackgroundContainer :React.FC<BackgroundProps> = ({img,smVis}) => {
    console.log(typeof img);
    console.log(smVis);
    let styling = "w-[100%]";
    if(smVis){
        styling+=' sm:block hidden'
    }
    else{
        styling+=' sm:hidden block'
    }

    

    let link =  `url('${img}')`;
    console.log(link);

  return (
    <div
      className={styling}
      style={{
        backgroundImage:  `url('${img}')`,
        backgroundSize: "cover",
      }}
    >
    </div>
  )
}

export default BackgroundContainer
