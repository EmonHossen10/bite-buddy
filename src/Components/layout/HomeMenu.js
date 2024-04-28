import React from "react";
import Image from "next/image";
import MenuItems from "./MenuItems";
import SectionHeader from "./SectionHeader";

const HomeMenu = () => {
  return (
    <>
     <SectionHeader 
     sub={'Check Out'}
     main={'Menu'}
     ></SectionHeader>
      {/* MENU CARDS ADDED HERE */}
      <div className="grid grid-cols-1  md:grid-cols-3 gap-5">
        <MenuItems></MenuItems>
        <MenuItems></MenuItems>
        <MenuItems></MenuItems>
        <MenuItems></MenuItems>
        <MenuItems></MenuItems>
        <MenuItems></MenuItems>
      </div>
    </>
  );
};

export default HomeMenu;
