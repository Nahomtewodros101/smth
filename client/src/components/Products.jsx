import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductCard from "../utils/ProductCard";
import ProductCard2 from "../utils/ProductCard2";
import ProductCard3 from "../utils/ProductCard3";
import ProductCard4 from "../utils/ProductCard4";

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const sectionRef = useRef(null);
  const proRef = useRef(null);
  const pro2Ref = useRef(null);
  const pro3Ref = useRef(null);
  const pro4Ref = useRef(null);

  const handleMouseEnter = (ref) => {
    gsap.to(ref.current, { scale: 1.5, duration: 0.5 });
  };

  const handleMouseLeave = (ref) => {
    gsap.to(ref.current, { scale: 1, duration: 0.5 });
  };

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 40%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="products"
      className="flex flex-col h-[100vh] items-center justify-center gap-[5rem] bg-[#eae8e0]"
    >
      <h2 className="text-4xl font-bold mb-10">Our Products</h2>
      <div className="flex flex-row items-center justify-center gap-[8rem]">
        <ProductCard
          ref={pro2Ref}
          onMouseEnter={() => handleMouseEnter(pro2Ref)}
          onMouseLeave={() => handleMouseLeave(pro2Ref)}
        />
        <ProductCard2
          ref={proRef}
          onMouseEnter={() => handleMouseEnter(proRef)}
          onMouseLeave={() => handleMouseLeave(proRef)}
        />
        <ProductCard3
          ref={pro3Ref}
          onMouseEnter={() => handleMouseEnter(pro3Ref)}
          onMouseLeave={() => handleMouseLeave(pro3Ref)}
        />
        <ProductCard4
          ref={pro4Ref}
          onMouseEnter={() => handleMouseEnter(pro4Ref)}
          onMouseLeave={() => handleMouseLeave(pro4Ref)}
        />
      </div>
    </section>
  );
};

export default Products;
