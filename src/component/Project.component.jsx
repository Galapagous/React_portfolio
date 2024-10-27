import React from 'react';
import { BsGithub } from 'react-icons/bs';


const ProjectSample = ({ title, desc, stack, img, arrangement }) => {
  // Define clip path styles based on arrangement
  const getClipPathStyles = (arrangement) => {
    const baseStyles = {
      backgroundImage: `url(${img})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: '80vh'
    };

    if (arrangement === 'odd') {
      return {
        ...baseStyles,
        clipPath: 'polygon(0 0, 100% 0%, 51% 100%, 0% 100%)'
      };
    }
    
    return {
      ...baseStyles,
      clipPath: 'polygon(25% 0%, 100% 0%, 100% 99%, 0% 100%)'
    };
  };

  return (
    <div 
      className={`w-full sm:h-screen h-[80%] bg-slate-200 flex items-start justify-start relative
        ${arrangement === 'even' ? 'sm:flex-row-reverse flex-col' : 'sm:flex-row flex-col'}`}
    >
      <div 
        style={getClipPathStyles(arrangement)}
        className="sm:w-1/2 w-full bg-no-repeat"
        role="img"
        aria-label={title}
      />
      
      <div className="sm:w-1/2 w-full sm:bg-inherit bg- bg-black opacity-90 sm:text-current text-white sm:p-8 p-4 mt-10 sm:relative absolute bottom-0">
        <h3 className="text-xl sm:text-gray-500 text-white">DESIGN / CODING</h3>
        <h1 className="sm:text-5xl text-3xl font-medium mt-4">{title}</h1>
        <p className="mt-6 sm:text-gray-700 text-white leading-relaxed">{desc}</p>
        
        <div className="flex flex-wrap items-center mt-6 gap-2">
          {stack.frontend.map((tech, index) => (
            <span 
              key={index}
              className="bg-gray-800 text-white text-sm px-6 py-2"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-4 mt-8">
          <button className="flex items-center gap-2 px-6 py-2 border border-slate-700 text-slate-700 hover:bg-slate-700 hover:text-white transition-colors">
            <BsGithub className="text-xl" />
            GITHUB
          </button>
          <button className="px-6 py-2 border border-slate-700 text-slate-700 hover:bg-slate-700 hover:text-white transition-colors">
            VIEW SITE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSample;