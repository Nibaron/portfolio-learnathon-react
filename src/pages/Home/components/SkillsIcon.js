import React from 'react';

const iconData = [
  {
    name: 'React',
    link: 'https://reactjs.org/',
    imgSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
  },
  {
    name: 'Tailwind CSS',
    link: 'https://tailwindcss.com/',
    imgSrc: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
  },
  {
    name: 'Next.js',
    link: 'https://nextjs.org/',
    imgSrc: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg',
  },
  {
    name: 'Bootstrap',
    link: 'https://getbootstrap.com',
    imgSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg',
  },
  {
    name: 'Firebase',
    link: 'https://firebase.google.com/',
    imgSrc: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
  },
  {
    name: 'C++',
    link: 'https://www.w3schools.com/cpp/',
    imgSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg',
  },
  {
    name: 'Git',
    link: 'https://git-scm.com/',
    imgSrc: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
  },
  {
    name: 'HTML5',
    link: 'https://www.w3.org/html/',
    imgSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
  },
  {
    name: 'JavaScript',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    imgSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
  },
  {
    name: 'MySQL',
    link: 'https://www.mysql.com/',
    imgSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
  },
  
  {
    name: 'Node.js',
    link: 'https://nodejs.org',
    imgSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
  },
  {
    name: 'Postman',
    link: 'https://postman.com',
    imgSrc: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
  },
  
];

export const SkillsIcon = () => {
  return (
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
  );
};
