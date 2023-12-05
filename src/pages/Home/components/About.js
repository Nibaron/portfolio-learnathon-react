import React from "react";

import developerPic from "../../../assets/images/feelingProud.svg";
import resumePdf from "../../../assets/files/NIBARON-RUET.pdf";
import linkedinIcon from "../../../assets/images/linkedin.png";
import githubIcon from "../../../assets/images/github.png";
import leetcodeIcon from "../../../assets/images/leetcode.png";
import arrowDownIcon from "../../../assets/images/arrow.png";

export const About = () => {
  
  const openLink = (link) => {
    window.open(link, "_blank");
  };

  const gotoProjects = () => {
    const aboutSection = document.querySelector("#projects");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="min-h-screen flex flex-col justify-between">
      <div className="container mx-auto flex px-4 sm:px-6 md:px-8 py-16 md:flex-row flex-col items-center">
        
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center dark:text-white">
          
          {/**Intro text at left */}
          <p className="font-semibold text-lg sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl">
            Hello, I'm
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl">
            Nibaron Kumar Das
          </h1>
          <p className="text-lg sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl mb-4">
            Frontend Developer
          </p>
          <p className="mb-8 leading-relaxed text-lg sm:text-base md:text-base lg:text-base xl:text-base text-justify">
            Responsible and Ambitious CS graduate from RUET. Have Passion in
            Frontend development, competitive programming and machine Learning.
          </p>
          {/** intro Button */}
          <div className="flex justify-center">
            <button
              onClick={gotoProjects}
              className="flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg"
            >
              My Projects
            </button>
            <a
              href={resumePdf}
              download="Nibaron_Kumar_Das_Resume.pdf"
              className="ml-4 inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg"
            >
              Download CV
            </a>
          </div>

          {/**social icons */}
          <div className="flex justify-center mt-6">
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="cursor-pointer w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:w-10 xl:h-10 mx-4"
              onClick={() => openLink("https://www.linkedin.com/in/nibaron-ruet/")}
            />
            <img
              src={githubIcon}
              alt="GitHub"
              className="cursor-pointer w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:w-10 xl:h-10 mx-4"
              onClick={() => openLink("https://github.com/Nibaron")}
            />
            <img
              src={leetcodeIcon}
              alt="LeetCode"
              className="cursor-pointer w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:w-10 xl:h-10 mx-4"
              onClick={() => openLink("https://leetcode.com/Nibaron_RUET/")}
            />
          </div>
        </div>

        {/**Image at right */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={developerPic}
          />
        </div>
      </div>

      {/* Scroll down arrow */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
        <img src={arrowDownIcon} alt="Scroll Down" className="w-6 h-6" />
      </div>

    </section>
  );
};
