import React from 'react';

interface ButtonProps {
  color:string,
  text:string,
  width:number,
  setText: Function |  React.Dispatch<React.SetStateAction<string>> ;
}




const Button:React.FC<ButtonProps> = ({color,width,text,setText}) => {

  let styling = 'flex w-[200px] h-12 text-sm md:text-sm text-lg rounded-full justify-center items-center';

  if(color==='primary'){
    styling+=' bg-red-700 text-white '
  }
  else{
    styling+=' bg-blue text-black border-2 border-black'
  }


  console.log('WWWWWW',color,width,text);



  styling+=` w-[${width}px]`;



  // console.log(styling);

  
  const handleClick =()=>{
    setText("");
  }
  return (
  
        <button onClick={handleClick}  className={styling}>{text}</button>
  )
}




export default Button;