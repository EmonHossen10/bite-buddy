import Image from "next/image";
import React from "react";
import burger from "/public/asset/burger2.png";
import ButtonHooks from "@/Hooks/ButtonHooks";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <section className="flex flex-col-reverse md:flex-row items-center py-10 space-y-4 md:space-y-0 md:space-x-4">
          {/* text */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-bold   leading-tight">
              Everything
              <br />
              is better with a
              <br />
              Bite of
              <span className="text-primary"> Burger</span>
            </h2>
            <p className="mt-3 md:mt-5 text-gray-500 text-sm md:text-base">
              Sinking your teeth into a juicy burger, each bite a symphony of
              savory satisfaction, ignites a blissful culinary journey that
              transcends mere sustenance.
            </p>
            {/* buttons */}

            <section className="flex flex-col items-start    mt-4 md:mt-10    ">
              <div className="relative">
                <ButtonHooks text="Order Now"></ButtonHooks>
                <IoIosArrowRoundForward className="absolute text-3xl text-white left-[220px] md:left-44 bottom-[12px]  md:bottom-[13px]"></IoIosArrowRoundForward>
              </div>
              {/* button 2 */}

              <div className="relative">
                <button className="btn shadow-md hover:bg-[#f1f1f1] transition-all hover:shadow-none mt-3 px-20 py-2 bg-white">
                  Learn More
                </button>
                <IoIosArrowRoundForward className="absolute text-3xl left-[220px] md:left-44 bottom-[12px] md:bottom-[13px] transition-all"></IoIosArrowRoundForward>
              </div>
            </section>
          </div>

          {/* images */}
          <div className="flex-1 md:flex-initial flex justify-end">
            <Image src={burger} alt="burger pic"></Image>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
