import React from "react";
import team from "../components/images/Programmer-pana.png";
import sewoch from "./images/Team work-rafiki.png";
import PersonCard from "../utils/PersonCard";
import PersonCard2 from "../utils/PersonCard2";
import PersonCard3 from "../utils/PersonCard3";

const OurTeam = () => {
  return (
    <section id="team" className="bg-slate-200 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Meet Our Team!</h1>
      </div>

      <div className="flex justify-center gap-[8rem] mb-16">
        <img
          src={team}
          alt="our team"
          width={400}
          className="transition-transform duration-500 ease-in-out hover:scale-105"
        />
        <img
          src={sewoch}
          alt="team work"
          width={400}
          className="transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>

      {/* yaayy i used props  */}
      <div className="flex justify-center gap-10">
        <PersonCard name="Nahom Tewodros" position="Lead Software Engineer" />
        <PersonCard2 name="Mark zuckerberg" position="Tech Lead / CEO" />
        <PersonCard3 name="Sarah McPunani" position="ui/ux Designer" />
      </div>
    </section>
  );
};

export default OurTeam;
