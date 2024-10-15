import React, { useEffect, useRef } from "react";
import hello from "../components/images/Contact us-cuate.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ContactDetails from "../utils/ContactDetails";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const imgRef = useRef(null);
  const headingRef = useRef(null);
  const contactDetailsRef = useRef(null);
  const socialIconsRef = useRef(null);

  useEffect(() => {
    // Heading: From top-left corner
    gsap.fromTo(
      headingRef.current,
      { x: -300, y: -200, opacity: 0 },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Image: From bottom-left corner
    gsap.fromTo(
      imgRef.current,
      { x: -300, y: 300, opacity: 0 },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Contact details: From bottom-right corner
    gsap.fromTo(
      contactDetailsRef.current,
      { x: 300, y: 300, opacity: 0 },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactDetailsRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Social icons: From top-right corner
    gsap.fromTo(
      socialIconsRef.current,
      { x: 300, y: -200, opacity: 0 },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: socialIconsRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <section
      id="contact"
      className="h-[100vh] bg-[#dfd3a6] flex flex-col justify-center items-center"
    >
      <h1 ref={headingRef} className="font-bold text-5xl mb-8">
        Contact Us
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-10">
        <img
          src={hello}
          alt="Contact Us"
          width={600}
          ref={imgRef}
          className="flex-shrink-0"
        />
        <div ref={contactDetailsRef}>
          <ContactDetails />
        </div>
      </div>
      <div ref={socialIconsRef} className="flex gap-[10rem] mt-8">
        <a href="mailto:nahomtewodrosm@gmail.com" aria-label="Email">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
        <a
          href="https://github.com/Nahomtewodros101"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://linkedin.com/in/nahom-tewodros"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
