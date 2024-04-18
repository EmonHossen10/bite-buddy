import React from "react";
import chef from "/public/asset/chef.jpg";
import Image from "next/image";

const Chef = () => {
  return (
    <div className="my-24">
      <h2 className="md:ml-24 mb-6 ml-6 md:text-4xl ">
        You prepare the food, we handle the rest
      </h2>
      <Image src={chef} alt={"pic"} className=" h-[500px]  object-cover" />
    </div>
  );
};

export default Chef;
