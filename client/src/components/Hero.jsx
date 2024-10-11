import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#e4e1d8]  h-[100vh] m-5 rounded-md overflow-y-hidden p-10 flex flex-col">
      <div className=" w-full flex flex-col mt-[8rem] items-center justify-center rounded-3xl ">
        <h1 className="text-8xl m-5 text-black">
          <strong>WELCOME TO CHEFCHE™</strong>
        </h1>
        <p className="text-4xl font-bold m-5 text-black">
          Feel Free To Look Around
        </p>
      </div>
      <hr className="border-gray-400 border-t-2 m-10" />

      <div className="flex flex-row items-center justify-center p-5 mt-40 text-center ">
        <div className="w-[200px] h-[100px]  rounded-2xl p-8 font-extrabold text-4xl ">
          <p>Chefche</p>
        </div>
        <div className="w-[200px] h-[100px]  rounded-2xl p-8 font-extrabold text-4xl ">
          <p>Chefche</p>
        </div>
        <div className="w-[200px] h-[100px]  rounded-2xl p-8 font-extrabold text-4xl ">
          <p>Chefche</p>
        </div>
        <div className="w-[200px] h-[100px]  rounded-2xl p-8 font-extrabold text-4xl ">
          <p>Chefche</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
