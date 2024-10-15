import React, { useRef, useEffect } from "react";
import image1 from "../components/images/CREATE.png";
import image2 from "../components/images/Computer Program Clipart Transparent PNG Hd, Programming And Web Technology Vector With Computer Illustration, Classic, Web, Development PNG Image For Free Download.jfif";
import { gsap } from "gsap";

const Services = () => {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const sectionRef = useRef(null);

  const handleMouseEnter = (ref) => {
    gsap.to(ref.current, { scale: 1.1, duration: 0.3 });
  };

  const handleMouseLeave = (ref) => {
    gsap.to(ref.current, { scale: 1, duration: 0.3 });
  };

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="flex flex-col items-center justify-center h-[100vh] bg-slate-300 p-10 space-y-10"
    >
      <h2 className="text-4xl font-bold mb-8">Our Services Include</h2>
      <div className="flex flex-wrap justify-center gap-[10rem]">
        <div
          ref={img1Ref}
          className="bg-white rounded-xl shadow-lg transition-transform duration-300 ease-in-out overflow-hidden"
          onMouseEnter={() => handleMouseEnter(img1Ref)}
          onMouseLeave={() => handleMouseLeave(img1Ref)}
        >
          <img
            className="h-[20rem] w-full object-cover"
            src={image1}
            alt="Service 1"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold">Websites</h3>
            <p className="text-gray-600 ">
              Top-notch Websites that make you come back for more .
            </p>
          </div>
        </div>

        <div
          ref={img2Ref}
          className="bg-white rounded-xl shadow-lg transition-transform duration-300 ease-in-out overflow-hidden"
          onMouseEnter={() => handleMouseEnter(img2Ref)}
          onMouseLeave={() => handleMouseLeave(img2Ref)}
        >
          <img
            className="h-[18rem] w-full object-cover"
            src={image2}
            alt="Service 2"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold">WebApps</h3>
            <p className="text-gray-600">
              Elegant and Appeling Modern Webapps For any Organizations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
