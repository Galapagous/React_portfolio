import React from "react";
import { BsGithub } from "react-icons/bs";

const ProjectSample = ({ title, desc, stack, img, link, github }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center border-2 rounded-lg shadow-lg w-full overflow-hidden bg-white">
      {/* Image Section */}
      <div className="md:w-2/3 w-full">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Content Section */}
      <div className="md:w-1/3 w-full flex flex-col gap-4 p-6">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-gray-600">{desc}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap items-center gap-2">
          {stack?.map((each, index) => (
            <span key={index} className="text-sm bg-gray-200 px-2 py-1 rounded-md">
              {each}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-2">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition-all"
          >
            Visit
          </a>
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 hover:text-black transition-all text-xl"
          >
            <BsGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectSample;
