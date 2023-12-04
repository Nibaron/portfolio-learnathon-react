import React from "react";
import emailPic from "../../../assets/images/email.png";

export const Contact = () => {
  return (
    <section id="contact" className="flex flex-col items-center">
      <p className="text-lg text-gray-500">Get in Touch</p>
      <h1 className="text-3xl font-medium mb-4">Contact Me</h1>
      <div className="flex bg-green-500 rounded-lg p-4 my-8">
        <div className="flex items-center gap-2 mr-4">
          <img
            src={emailPic}
            alt="Email icon"
            className="w-8 h-8"
          />
          <p className="text-lg">
            <a href="mailto:nibaronkumar02@gmail.com" className="text-white">
              nibaronkumar02@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
