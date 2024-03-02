import React from 'react';
import Image from 'next/image';


const AutoPlaySlider = () => {
  const settings = {
    dots: false, 
    infinite: true,
    slidesToShow: 3, 
    slidesToScroll: 1, 
    autoplay: true, 
    speed: 2000,
    autoplaySpeed: 3000,
    arrows: false,
    cssEase: "linear",
  };

  const size = 120;

  return (
    <div className="mt-10 flex items-center justify-between w-100 px-26">
        <div className="px-2">
          <div className="pt-2 text-gray-400 dark:text-gray-400">
            <Image
              width={size}
              height={size}
              src={'/img/brands/EstereoPicnic-Logo.png'}
            />
          </div>
        </div>
        <div className="px-2">
          <div className="text-gray-400 dark:text-gray-400">
          <Image
              width={size}
              height={size}
              src={'/img/brands/Livinn-Logo.png'}
            />
          </div>
        </div>
        <div className="px-2">
          <div className="text-gray-400 dark:text-gray-400">
          <Image
              width={size}
              height={size}
              src={'/img/brands/OIM-Logo.png'}
            />
          </div>
        </div>
        <div className="px-2">
          <div className="text-gray-400 dark:text-gray-400">
          <Image
              width={size}
              height={size}
              src={'/img/brands/Schwarzkopf-Logo.png'}
            />
          </div>
        </div>
    </div>
  );
};

export default AutoPlaySlider;
