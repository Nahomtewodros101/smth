import React from "react";
import numa from "../components/images/numa.jpg";
const PersonCard = ({ image, name, position }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-300 hover:shadow-2xl transition-shadow duration-300">
      <img className="w-full h-48 object-cover" src={numa} alt="numa" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl text-[#8e8664] mb-2">{name}</div>
        <p className=" font-semibold text-zinc-700 ">{position}</p>
      </div>
    </div>
  );
};

export default PersonCard;
