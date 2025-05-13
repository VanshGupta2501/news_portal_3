import React from 'react';
import FourCardSections from './four-card-section';

const FourCards = () => {
  return (
    <div className="
      w-full  flex justify-center items-center px-4
    ">
      <div className="w-full max-w-[1400px] flex flex-col gap-10">
        <div className="flex justify-between items-center flex-wrap gap-4 px-2">
          <h1 className="text-2xl xxxsmall:text-4xl font-semibold">
            ताज़ा खबरें
          </h1>
          <p className="text-red-400 text-lg font-semibold mr-10 relative hover:after:w-full after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-red-400 after:w-0">
            और देखें
          </p>
        </div>
        <FourCardSections />
      </div>
    </div>
  );
};

export default FourCards;
