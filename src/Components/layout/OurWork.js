import Image from "next/image";
import React from "react";
import img from "/public/asset/animation/delivery.jpg";
import img2 from "/public/asset/animation/img2.png";
import img3 from "/public/asset/animation/img4.PNG";

const OurWork = () => {
  return (
    <div className="my-20  grid grid-cols-1 md:grid-cols-3 md:gap-10  ">
      {/* div 1 */}
      <div className="flex flex-col text-center items-center ">
        <Image src={img} alt="pic" width={"300"} height={"300"}></Image>
        <h2 className="text-3xl font-bold">
          Fastest <br /> Delivery
        </h2>
        <p className=" mx-auto  mt-2    w-8/12 text-gray-500">
          Get your food delivered in less than an hour! That’s as fast as it can
          get.
        </p>
      </div>
      {/* div 2*/}
      <div className="flex flex-col text-center items-center ">
        <Image src={img2} alt="pic" className="w-[380px] h-[300px] "></Image>
        <h2 className="text-3xl font-bold">
          So Much to <br /> Choose From
        </h2>
        <p className=" mx-auto  mt-2    w-8/12 text-gray-500">
          Find your favourite among the thousands of restaurants in our app.
        </p>
      </div>
      {/* div 3 */}

      <div className="flex flex-col text-center items-center ">
        <Image src={img3} alt="pic" width={"300"} height={"300"}></Image>
        <h2 className="text-3xl font-bold">
          Best Offers <br />
          In Town!
        </h2>
        <p className=" mx-auto  mt-2    w-8/12 text-gray-500">
          Get the best offers and combos at the best price only at Pathao Food!
        </p>
      </div>
    </div>
  );
};

export default OurWork;
