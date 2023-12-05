import React from "react";
import { ChipIcon } from "@heroicons/react/solid";
import developerPic from "../../../assets/images/experience.svg";
import { iconData } from "../../../data/SkillsIcon";

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
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {iconData.map((icon, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
              <div className="rounded-lg p-4 h-full hover:shadow-md transition-all duration-300">
                <a href={icon.link} target="_blank" rel="noreferrer">
                  <img
                    src={icon.imgSrc}
                    alt={icon.name}
                    className="w-10 h-10 mx-auto mb-2 transition-all duration-300 hover:opacity-75"
                  />
                </a>
                <p className="text-center">{icon.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
