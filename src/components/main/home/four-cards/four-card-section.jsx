import React from 'react';
import data from '/src/constants/context/hn.json';

const FourCardSections = () => {
  const cards = data.fourcard || [];

  return (
    <div className="grid gap-4
      xextrasmall:grid-cols-1 
      lextrasmall:grid-cols-1 
      extrasmall:grid-cols-1 
      xxxxsmall:grid-cols-1 
      xxxsmall:grid-cols-1 
      xxsmall:grid-cols-2 
      xsmall:grid-cols-2 
      small:grid-cols-2 
      medium:grid-cols-3 
      large:grid-cols-4 
      extralarge:grid-cols-4 
      xextralarge:grid-cols-4
      justify-center items-start w-full"
    >
      {cards.slice(0, 4).map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl p-4 flex flex-col gap-2 w-full max-w-[350px] mx-auto h-[520px]"
        >
          <img
            className="rounded-2xl h-[250px] object-cover w-full"
            src={item.img}
            alt={item.title}
          />
          <div className="flex justify-between text-sm text-gray-600">
            <p className="text-red-400 font-medium">{item.title}</p>
            <p>{item.date}</p>
          </div>
          <h1 className="font-semibold text-xl">{item.heading}</h1>
          <p className="text-gray-500 text-[17px]">{item.context}</p>
        </div>
      ))}
    </div>
  );
};

export default FourCardSections;
