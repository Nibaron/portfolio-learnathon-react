import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../components/ProjectsData";

export default function Projects() {
  return (
    <section id="projects" className="body-font dark:text-white">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I love developing Apps using REACT and Tailwind CSS. I have also
            developed websites with PHP, MySQL, Android Studio, etc.
          </p>
        </div>
        <div className="flex flex-wrap m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.key}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <img
                  src={project.image}
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center border-4 border-slate-300"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 bg-slate-800 opacity-0 hover:opacity-100">
                  <h1 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h1>
                  
                  <p className="leading-relaxed text-white">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
