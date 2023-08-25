import Background from "../../../components/Background";
import BackgroundSmall from "../../../components/BackgroundSmall";

const LayoutImage = () => {

  return (
    
    <div className="sm:w-4/5  w-[130%]  bg-center flex flex-row items-center justify-center">
      <Background/>
      <BackgroundSmall/>
    </div>
  );
};

export default LayoutImage;
