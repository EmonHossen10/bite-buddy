import React from "react";

const SectionHeader = ({ main, sub }) => {
  return (
    <div className="text-center my-5">
      <h2 className="uppercase text-gray-600 font-semibold">{sub}</h2>
      <h2 className="text-primary font-bold text-4xl italic">{main}</h2>
    </div>
  );
};

export default SectionHeader;
