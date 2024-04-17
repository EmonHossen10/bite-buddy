import React from "react";
import Image from "next/image";
import salad from "/public/asset/card Images/salad.jpg";
 

const MenuItems = () => {
  return (
    <div className="card bg-gray-200 w-10/12 mx-auto  md:w-full  transition-all duration-300 hover:bg-white hover:shadow-md hover:shadow-black/25">
      <figure className="px-5 pt-5">
        <Image
          src={salad}
          width={400}
          alt="Shoes"
          className="rounded h-[350px]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Salad</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions text-center  ">
          <button className="btn bg-gradient-to-r from-[#FF8436] to-[#FF0A04] my-2 text-white px-16 md:px-20  ">
            Add to Cart $12
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
