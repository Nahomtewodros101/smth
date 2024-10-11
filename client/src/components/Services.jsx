import React, { useRef } from "react";
import image1 from "../components/images/CREATE.png";
import image2 from "../components/images/CREATE (1).png";
import { gsap } from "gsap";

const Services = () => {
  // Refs to store image DOM elements and so i can practise using it
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  const handleMouseEnter = (ref) => {
    gsap.to(ref.current, { scale: 1.7, duration: 0.5 });
  };

  const handleMouseLeave = (ref) => {
    gsap.to(ref.current, { scale: 1, duration: 0.5 });
  };

  return (
    <section
      id="services"
      className="flex flex-row h-[100vh] items-center justify-center space-x-[15rem] space-y-10  bg-slate-300"
    >
      <img
        ref={img1Ref}
        className="image h-[30rem] rounded-2xl mb-5"
        src={image1}
        alt="something"
        onMouseEnter={() => handleMouseEnter(img1Ref)}
        onMouseLeave={() => handleMouseLeave(img1Ref)}
      />

      <h2 className="text-2xl font-bold">Our Services Include</h2>

      <img
        ref={img2Ref}
        className="image h-[30rem] rounded-2xl mb-8"
        src={image2}
        alt="something"
        onMouseEnter={() => handleMouseEnter(img2Ref)}
        onMouseLeave={() => handleMouseLeave(img2Ref)}
      />
    </section>
  );
};

export default Services;
