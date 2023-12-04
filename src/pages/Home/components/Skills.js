import React from "react";
import { ChipIcon } from "@heroicons/react/solid";
import developerPic from "../../../assets/images/experience.svg";
import { SkillsIcon } from "./SkillsIcon";

export const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex flex-col dark:text-white">
      
      {/**Heading */}
      <div className="text-center mb-20">
        <ChipIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
          Skills &amp; Technologies
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Skills and technologies I have learned
        </p>
      </div>

      <div className="container mx-auto flex md:flex-row flex-col items-center">
        {/** image at left side */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="skill"
            src={developerPic}
          />
        </div>

        {/**skill set at right*/}
        <SkillsIcon/>
      </div>
    </section>
  );
};
