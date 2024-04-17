import Image from "next/image";
import React from "react";
import { ImSpoonKnife } from "react-icons/im";
import play from "/public/asset/play-store.png";
import apple from "/public/asset/appstore.png";
import mobile from "/public/asset/mobile.png";
import step from "/public/asset/step-illustration.png";
import boy from "/public/asset/boy.png";
import road from "/public/asset/road.png";
import img3 from "/public/asset/img3.jpg";
import cash from "/public/asset/cash.png";




const OrderProcess = () => {
  return (
    <section className="my-20 w-10/12 mx-auto md:w-full">
      {/* box-1 */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* text */}
        <div>
          <div className="flex items-center gap-3">
            <ImSpoonKnife className="bg-[#defcdb] text-[#4cfb3c] p-4  w-20 rounded-md h-20" />
            <h2>
              <span className="text-gray-500 "> Order Food With</span> <br />{" "}
              <span className="font-bold text-primary text-3xl">BiteBuddy</span>{" "}
            </h2>
          </div>
          <h1 className="text-gray-300 font-bold pt-10 text-4xl">01</h1>
          <h1 className="text-4xl font-bold mt-5 ">Go to Our App </h1>
          <p className="text-gray-500 mt-6">
            Download the BiteBuddy App and order your food <br /> online to get
            the fastest delivery.
          </p>
          <div className="mt-4 flex gap-5">
            <Image src={play} alt="pic"></Image>
            <Image src={apple} alt="pic"></Image>
          </div>
        </div>
        {/* images */}
        <div>
          <Image src={mobile} alt="pic"></Image>
        </div>
      </div>

      <Image src={step} alt="pic" className="w-full h-[450px]"></Image>
      {/* box-2 */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center md:-mt-20">
        {/* image */}
        <div>
          <Image src={boy} alt="pic" className="w-full h-[450px]"></Image>
        </div>
        {/*text  */}
        <div>
          <h1 className="text-gray-300 font-bold pt-10 text-4xl">02</h1>
          <h2 className="text-4xl font-bold mt-5 ">
            {" "}
            Select and set your food
          </h2>
          <p className="text-gray-500 mt-6">
            Select the food you want from thousands of <br /> restaurants.
          </p>
        </div>
      </div>
      <Image src={road} alt="pic" className="    h-[350px]"></Image>
      {/* box-3 */}
      <div className="flex justify-between  ">
        {/* text */}
        <div>
          <h1 className="text-gray-300 font-bold pt-10 text-4xl">03</h1>
          <h1 className="text-4xl font-bold mt-5 ">
            Confirm your order and wait{" "}
          </h1>
          <p className="text-gray-500 mt-6">
            Just confirm your order and enjoy our fastest <br /> delivery. Fresh
            and delicious food will be <br /> delivered to your doorstep.
          </p>
        </div>
        {/* images */}
        <div>
          <Image src={img3} alt="pic" className="w-[600px] h-[450px]"></Image>
        </div>
      </div>
      <hr className="mt-10" />
      {/* box-4 */}
      <div className="mt-20 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-4xl font-bold  mb-8">
            Pay Cashless for your <br /> Food
          </h2>
          <p className="text-gray-500 ">
            Dont have any cash? <br /> No worries! Pay digitally instead of
            cash.
          </p>
        </div>
        <div>
          <Image src={cash} alt="pic" className="w-[600px] h-[450px]"></Image>
        </div>
      </div>
    </section>
  );
};

export default OrderProcess;
