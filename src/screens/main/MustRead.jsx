import MustReadCenter from "components/main/home/must-read/MustReadCenter";
import MustReadLeft from "components/main/home/must-read/MustReadLeft";
import MustReadRight from "components/main/home/must-read/MustReadRight";
import React from "react";

const MustRead = () => {
  return (
    <div className="w-full  h-[700px] flex justify-center items-center">
      <div className="w-[85%]  h-[90%] flex flex-col gap-8 xextralarge:w-[55%]  ">
       <div className="w-full h-[20%] flex justify-between items-center">
         <h1 className="text-4xl font-semibold " >अवश्य पढ़ें</h1>
         <p className="text-red-400 text-lg font-semibold mr-10 relative hover:after:w-full after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-red-400 after:w-0">और देखें</p>
       </div>
        <div className="flex h-full">
          <MustReadLeft />
          <MustReadCenter />
          <MustReadRight />
        </div>
      </div>
    </div>
  );
};

export default MustRead;
