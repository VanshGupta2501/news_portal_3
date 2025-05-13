import React from "react";

const TwoCard = () => {
  return (
    <div className=" w-full h-[550px] flex justify-center items-center">
      <div className=" w-[85%] h-[90%] flex justify-center items-center gap-10   ">
        <div className=" w-[50%] h-[90%] rounded-3xl px-4 flex flex-col gap-5 ">
          <div className=" w-full flex justify-between">
            <h1 className="text-3xl font-semibold">बड़ी खबरें</h1>
            <p className="text-red-400 text-lg font-semibold mr-10 relative hover:after:w-full after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-red-400 after:w-0">और देखें</p>
          </div>

          <div className="flex gap-10">
            <div className="w-[50%] flex flex-col gap-2">
              <img
                className="w-[250px] h-[200px] rounded-3xl"
                src="https://akm-img-a-in.tosshub.com/aajtak/images/story/202505/6822d33b5d929-villagers-surrounded-sp-mp-in-etawah-130557635-16x9.jpg?size=948:533"
                alt=""
              />
              <p className="text-lg text-gray-400">2 घंटे पहले</p>
              <h1 className="text-xl font-semibold">
                पंजाब के अमृतसर में जहरीली शराब का कहर, 15 लोगों की मौत, 6 की
                हालत गंभीर
              </h1>
              <div className="flex gap-5">
                <p className="text-red-400">देश</p>
                <p>2 घंटे पहले</p>
              </div>
            </div>
            <div className="w-[50%] flex flex-col gap-2">
              <img
                className="w-[250px] h-[200px] rounded-3xl"
                src="https://akm-img-a-in.tosshub.com/aajtak/images/story/202505/6822d33b5d929-villagers-surrounded-sp-mp-in-etawah-130557635-16x9.jpg?size=948:533"
                alt=""
              />
              <p className="text-lg text-gray-400">2 घंटे पहले</p>
              <h1 className="text-xl font-semibold">
                पंजाब के अमृतसर में जहरीली शराब का कहर, 15 लोगों की मौत, 6 की
                हालत गंभीर
              </h1>
              <div className="flex gap-5">
                <p className="text-red-400">देश</p>
                <p>2 घंटे पहले</p>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-[50%] h-[90%] rounded-3xl px-4 flex flex-col gap-5 ">
          <div className=" w-full flex justify-between">
            <h1 className="text-3xl font-semibold">सीबीएसई</h1>
            <p className="text-red-400 text-lg font-semibold mr-10 relative hover:after:w-full after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-red-400 after:w-0">और देखें</p>
          </div>

          <div className="flex gap-10">
            <div className="w-[50%] flex flex-col gap-2">
              <img
                className="w-[250px] h-[200px] rounded-3xl"
                src="https://staticimg.amarujala.com/assets/images/2025/05/13/cbse-board-10th-result-2025_e8a601203b37d3402fd74e07bb8434a3.jpeg?w=200&dpr=1.0&q=80"
                alt=""
              />
              <p className="text-lg text-gray-400">2 घंटे पहले</p>
              <h1 className="text-xl font-semibold">
                पंजाब के अमृतसर में जहरीली शराब का कहर, 15 लोगों की मौत, 6 की
                हालत गंभीर
              </h1>
              <div className="flex gap-5">
                <p className="text-red-400">देश</p>
                <p>2 घंटे पहले</p>
              </div>
            </div>
            <div className="w-[50%] flex flex-col gap-2">
              <img
                className="w-[250px] h-[200px] rounded-3xl"
                src="https://staticimg.amarujala.com/assets/images/2025/05/13/cbse-board-result-2025_9066a4bc7eb2949666b429ec06ffb32d.jpeg?q=80&w=200&dpr=1.3"
                alt=""
              />
              <p className="text-lg text-gray-400">2 घंटे पहले</p>
              <h1 className="text-xl font-semibold">
                पंजाब के अमृतसर में जहरीली शराब का कहर, 15 लोगों की मौत, 6 की
                हालत गंभीर
              </h1>
              <div className="flex gap-5">
                <p className="text-red-400">देश</p>
                <p>2 घंटे पहले</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoCard;


