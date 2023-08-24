import React from 'react';
import mobileBack from '../assets/mobileBack.png'

const BackgroundSmall = () => {
    return (
        <div className='w-[90%] sm:hidden block h-[500px]' style={{ backgroundImage: `url(${mobileBack})`, backgroundSize: 'cover' }}>
          {/* Your content */}
        </div>
      );
}

export default BackgroundSmall