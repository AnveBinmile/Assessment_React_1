import mobileBack from '../../../assets/images/mobileBack.png'
import Illustration from '../../../assets/images/Illustration.png'

const BackgroundComponent:React.FC = () => {
    console.log(mobileBack);
  return (
    <>
      <img className="w-[90%] sm:hidden block h-[500px]" src={mobileBack} />
      <img className="w-[100%] sm:block hidden h-[800px]" src={Illustration}/>
    </>
  );
};
export default BackgroundComponent;
