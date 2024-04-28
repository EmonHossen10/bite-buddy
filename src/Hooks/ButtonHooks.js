import React from "react";

const ButtonHooks = ({ text }) => {
  return (
    <div
      // style={{ fontSize: "20px" }}
      className="btn bg-gradient-to-r from-[#FF8436] to-[#FF0A04]   text-white px-20  "
    >
      {text}
    </div>
  );
};

export default ButtonHooks;
