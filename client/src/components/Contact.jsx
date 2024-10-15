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

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { y: 0 },
      {
        y: -20,
        duration: 0.5,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      id="contact"
      className="h-[100vh] bg-[#eae8e0] flex flex-col justify-center items-center"
    >
      <h1 className="font-bold text-5xl mb-8">Contact Us</h1>
      <div className="flex flex-wrap justify-center items-center gap-10">
        <img
          src={hello}
          alt="Contact Us"
          width={600}
          ref={imgRef}
          className="flex-shrink-0"
        />
        <ContactDetails />
      </div>
      <div className="flex gap-[10rem] mt-8 ">
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
