import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import team from "../components/images/Programmer-pana.png";
import sewoch from "./images/Team work-rafiki.png";
import PersonCard from "../utils/PersonCard";
import PersonCard2 from "../utils/PersonCard2";
import PersonCard3 from "../utils/PersonCard3";

gsap.registerPlugin(ScrollTrigger);

const OurTeam = () => {
  const sectionRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 40%",
        toggleActions: "play reverse restart reverse",
      },
    });

    tl.fromTo(
      img1Ref.current,
      { x: 0, opacity: 1 },
      { x: "-500px", opacity: 1, duration: 1.5 }
    )
      .fromTo(
        img2Ref.current,
        { x: 0, opacity: 1 },
        { x: "500px", opacity: 1, duration: 1.5 },
        "<"
      )
      .fromTo(
        cardsRef.current.children,
        { y: 200, opacity: 0 },
        { y: -300, opacity: 1, stagger: 0.2, duration: 2.5 },
        "-=1" // Overlap with image animations
      );
  }, []);

  return (
    <section id="team" ref={sectionRef} className="bg-gradient-to-r from-slate-500 to-[#bcae79] py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mt-10">Meet Our Team!</h1>
      </div>

      <div className="flex justify-center gap-[8rem] mb-16">
        <img
          ref={img1Ref}
          src={team}
          alt="our team"
          width={400}
          className="transition-transform duration-500 ease-in-out hover:scale-105"
        />
        <img
          ref={img2Ref}
          src={sewoch}
          alt="team work"
          width={400}
          className="transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>

      <div ref={cardsRef} className="flex justify-center gap-10">
        <PersonCard name="Nahom Tewodros" position="Lead Software Engineer" />
        <PersonCard2 name="Mark Zuckerberg" position="Tech Lead / CEO" />
        <PersonCard3 name="Sarah McPunani" position="UI/UX Designer" />
      </div>
    </section>
  );
};

export default OurTeam;
