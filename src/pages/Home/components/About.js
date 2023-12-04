import React from "react";
import developerPic from "../../../assets/images/feelingProud.svg";
import resumePdf from "../../../assets/files/NIBARON-RUET.pdf";
import linkedinIcon from "../../../assets/images/linkedin.png";
import githubIcon from "../../../assets/images/github.png";
import leetcodeIcon from "../../../assets/images/leetcode.png";
import arrowDownIcon from "../../../assets/images/arrow.png";

export const About = () => {
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/nibaron-ruet/", "_blank");
  };

  const openGitHub = () => {
    window.open("https://github.com/Nibaron", "_blank");
  };

  const openLeetcode = () => {
    window.open("https://leetcode.com/Nibaron_RUET/", "_blank");
  };

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-between"
    >
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center dark:text-white">
          <p className="font-semibold text-2xl">Hello, I'm</p>
          <h1 className="text-5xl">Nibaron Kumar Das</h1>
          <p className="text-2xl mb-4">Frontend Developer</p>
          <p className="mb-8 leading-relaxed text-justify">
            Responsible and Ambitious CS graduate from RUET. Have Passion in
            Frontend development, competitive programming and machine Learning.
          </p>
          <div className="flex justify-center">
            <a
              href="/projects"
              className="flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              My Projects
            </a>
            <a
              href={resumePdf}
              download="Nibaron_Kumar_Das_Resume.pdf"
              className="ml-4 inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Download CV
            </a>
          </div>
          <div className="flex justify-center mt-6">
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="cursor-pointer w-10 h-10 mx-4"
              onClick={openLinkedIn}
            />
            <img
              src={githubIcon}
              alt="GitHub"
              className="cursor-pointer w-10 h-10 mx-4"
              onClick={openGitHub}
            />
            <img
              src={leetcodeIcon}
              alt="LeetCode"
              className="cursor-pointer w-10 h-10 mx-4"
              onClick={openLeetcode}
            />
          </div>
        </div>

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={developerPic}
          />
        </div>
      </div>
      {/* Scroll down arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <img src={arrowDownIcon} alt="Scroll Down" className="w-6 h-6" />
      </div>
    </section>
  );
};
