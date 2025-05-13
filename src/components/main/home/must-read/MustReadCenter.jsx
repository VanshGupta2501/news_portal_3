import React from "react";

const MustReadCenter = () => {
  return (
    <div className=" w-[50%] h-[95%] flex justify-center items-center">
      <div className="absolute  w-[700px] h-[520px]">
        <img
          className="w-full h-full rounded-4xl "
          src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/2d6f/live/a21a8950-2f07-11f0-90bf-8d5b436191fe.jpg.webp"
          alt=""
        />
      </div>
      <div className=" relative flex flex-col gap-3 top-32 px-6">
        <h1 className="text-3xl font-semibold text-white">
          11 सैनिकों की मौत, 78 घायल, 40 सिविलियन... PAK कुबूलने लगा भारत की
          एयरस्ट्राइक में अपने नुकसान का सच
        </h1>
        <p className="text-gray-300">
          पाकिस्तान ने कुबूल कर लिया है कि भारत की जवाबी कार्रवाई में उसके 11
          सैनिक मारे गए है और 78 कर्मी घायल हो गए. साथ ही पाकिस्तान ने ये भी
          स्वीकार किया है..
        </p>
        <div className="flex gap-10 text-gray-300">
          <p>राज्य</p>
          <p>2 घंटे पहले</p>
        </div>
      </div>
    </div>
  );
};

export default MustReadCenter;
