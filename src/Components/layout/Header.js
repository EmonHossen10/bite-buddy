import React from "react";

import logo from "/public/asset/logo.PNG";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const navlinks = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/">Menu</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/">Contact</Link>
      </li>
      <li>
        <Link href="/developer">Developer</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-md   "    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu font-semibold text-gray-500  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlinks}
          </ul>
        </div>
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
        <Image
          src={logo}
          alt="Description of the image"
          width={250}
          height={250}
        />
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu  w-[500px] text-gray-500  font-semibold menu-horizontal px-1">
          {navlinks}
        </ul>
      </div>
      <div className="navbar-end gap-10  ">
        <Link
          className=" bg-primary hover:bg-[#ff8482] absolute md:right-10 "
          href="/login"
          style={{
            display: "inline-block",
            width: "auto",
            height: "auto",
            color: "#fff",
            padding: "10px 25px",
            borderRadius: "0",
          }}
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
