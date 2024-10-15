import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-t from-slate-500 to-[#bcae79]  h-[100vh] m-5 rounded-md overflow-hidden p-10 flex flex-col"
    >
      <div className="w-full flex flex-col mt-[8rem] items-center justify-center rounded-3xl">
        <h1 className="text-8xl m-5 text-black">
          <strong>WELCOME TO CHEFCHE™</strong>
        </h1>
        <p className="text-4xl font-bold m-5 text-black">
          Feel Free To Look Around
        </p>
      </div>
      <hr className="border-gray-400 border-t-2 m-10" />

      {/* Moving text with invisible background */}
      <div className="relative flex items-center justify-center mt-40">
        {/* Invisible container */}
        <div className="overflow-hidden w-[800px] h-[300px] bg-transparent relative">
          {/* Text that moves horizontally */}
          <div className="whitespace-nowrap animate-scroll text-4xl font-extrabold text-center text-black">
            <span className="inline-block mr-8">Chefche</span>
            <span className="inline-block mr-8">Chefche</span>
            <span className="inline-block mr-8">Chefche</span>
            <span className="inline-block mr-8">Chefche</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
