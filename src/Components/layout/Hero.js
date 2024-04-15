import Image from "next/image";
import React from "react";
import burger from "/public/asset/burger2.png";
import ButtonHooks from "@/Hooks/ButtonHooks";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="flex items-center py-10 space-x-4   ">
        {/* text */}
        <div className="flex-1">
          <h2 className="text-5xl font-bold font-serif leading-tight">
            Everything
            <br />
            is better with a
            <br />
            Bite of
            <span className="text-primary"> Burger</span>
          </h2>
          <p className="mt-5 text-gray-500 text-sm">
            Sinking your teeth into a juicy burger, each bite a symphony of
            savory satisfaction, ignites a blissful culinary journey that
            transcends mere sustenance, indulging in a moment of pure
            gastronomic delight.
          </p>
          <section className="flex items-center gap-3">
            <div className="flex items-center ">
              <ButtonHooks text={"Order Now"}></ButtonHooks>{" "}
              <FaRegArrowAltCircleRight className="relative right-[45px] text-white text-xl " />
            </div>
            <Link href={"/"}>
              Learn More{" "}
              <FaRegArrowAltCircleRight className="text-xl inline ml-3" />
            </Link>
          </section>
        </div>

        {/* images */}
        <div className="flex-1 flex justify-end ">
          <Image src={burger} alt="burger pic"></Image>
        </div>
      </section>
    </>
  );
};

export default Hero;
