import React from "react";
import developerPic from "../../../assets/images/feelingProud.svg";
import resumePdf from "../../../assets/files/NIBARON-RUET.pdf";
import linkedinIcon from "../../../assets/images/linkedin.png";
import githubIcon from "../../../assets/images/github.png";
import leetcodeIcon from "../../../assets/images/leetcode.png";
import arrowDownIcon from "../../../assets/images/arrow.png";

const Hero = () => {
  const goToContact = () => {
    window.location.href = "/contacts";
  };

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
      id="profile"
      className="flex flex-col lg:flex-row mt-20 justify-between items-center lg:items-stretch relative"
    >
      <div className="self-center text-center dark:text-white lg:w-1/2 lg:mr-8">
        <p className="font-semibold text-2xl">Hello, I'm</p>
        <h1 className="text-5xl">Nibaron Kumar Das</h1>
        <p className="text-2xl mb-4">Frontend Developer</p>

        <div className="flex flex-col lg:flex-row justify-center gap-4">
          <a href={resumePdf} download="Nibaron_Kumar_Das_Resume.pdf">
            <button className="btn rounded bg-gray-700 text-white border border-solid border-gray-700 hover:bg-black transition-all duration-300 ease-in-out text-lg h-12 w-full lg:w-32 mt-2 lg:mt-0">
              Download CV
            </button>
          </a>

          <button
            className="btn rounded bg-gray-700 text-white border border-solid border-gray-700 hover:bg-black transition-all duration-300 ease-in-out text-lg h-12 w-full lg:w-32 mt-2 lg:mt-0"
            onClick={goToContact}
          >
            Contact Info
          </button>
        </div>

        <div className="flex justify-center mt-4">
          <img
            src={linkedinIcon}
            alt="LinkedIn"
            className="cursor-pointer w-6 h-6 mx-2"
            onClick={openLinkedIn}
          />
          <img
            src={githubIcon}
            alt="GitHub"
            className="cursor-pointer w-6 h-6 mx-2"
            onClick={openGitHub}
          />
          <img
            src={leetcodeIcon}
            alt="LeetCode"
            className="cursor-pointer w-6 h-6 mx-2"
            onClick={openLeetcode}
          />
        </div>

        {/* Scroll down arrow */}
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 animate-bounce">
          <img src={arrowDownIcon} alt="Scroll Down" className="w-6 h-6" />
        </div>
      </div>

      <div className="flex flex-auto justify-center mt-8 lg:mt-0">
        <img src={developerPic} alt="profile" className="max-w-full h-auto" />
      </div>
    </section>
  );
};

export default Hero;
