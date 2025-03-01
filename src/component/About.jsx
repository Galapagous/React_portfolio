// import { BsGithub } from 'react-icons/bs'
// import { DiCss3, DiDocker, DiHtml5, DiJavascript, DiJenkins, DiJira, DiNodejs, DiReact } from 'react-icons/di'
// import { SiSonarqube, SiTypescript } from 'react-icons/si'
// import { VscAzure } from 'react-icons/vsc'

// const About = () => {
//   return (
//     <section id='about' className={`sm:px-28 px-5 text-pretty bg-[rgb(228,224,225)] sm:h-[100vh] h-auto w-[100vw] py-10`}>
//         <h1 className='text-center sm:text-[4rem] text-[2rem] font-extralight uppercase'>Who am i?</h1>
//         <p className='text-center font-light'>A software engineer enthusiast with a passion for math and logic. Experienced in frontend and backend technologies, I deliver exceptional solutions by leveraging my coding expertise. Deep understanding of data structures ensures functional, scalable, and maintainable algorithms. Combining mechanical engineering background with coding skills, I offer a holistic approach to problem-solving. Seeking collaborations to deliver optimal results and eager to connect with fellow professionals.</p>
//         <div className='flex items-start sm:flex-row flex-col justify-evenly sm:mt-10 mt-5'>
//             <div className='flex flex-col items-center justify-center'>
//                 <h1 className='mb-4 sm:text-3xl text-2xl text-[#686D76] font-thin'>What i can</h1>
//                 <div className='flex items-center justify-center gap-10 flex-wrap sm:w-1/2 w-full'>
//                     <DiReact className='sm:text-[3rem] text-[2rem] text-[#686D76]'/>
//                     <DiJavascript className='sm:text-[3rem] text-[2rem] text-[#686D76]'/>
//                     <DiNodejs className='sm:text-[3rem] text-[2rem] text-[#686D76]'/>
//                     <DiHtml5 className='sm:text-[3rem] text-[2rem] text-[#686D76]'/>
//                     <DiCss3 className='sm:text-[3rem] text-[2rem] text-[#686D76]'/>
//                     <SiTypescript className='sm:text-[3rem] text-[2rem] text-[#686D76]'/>
//                 </div>
//                 <div className='sm:mt-2 mt-4 text-center'>
//                     <span>Ruby |</span>
//                     <span> C |</span>
//                     <span> RESTful |</span>
//                     <span> Graphql |</span>
//                     <span> Socket io</span>
//                 </div>
//             </div>
//             <hr className='sm:w-[1px] w-[100%] sm:my-0 my-4 sm:h-[300px] h-[1px] bg-gray-600'/>
//             <div className='flex flex-col items-center justify-center'>
//                 <h1 className='mb-4 sm:text-3xl text-2xl text-[#686D76] font-thin'>What i use</h1>
//                 <div className='flex items-center justify-center gap-10 flex-wrap sm:w-1/2 w-full'>
//                     <VscAzure className='sm:text-[3rem] text-[2rem] text-[#686D76]'/>
//                     <DiDocker className='sm:text-[3rem] text-[2rem] text-[#686D76]'/>
//                     <DiJenkins className='sm:text-[3rem] text-[2rem] text-[#686D76]'/>
//                     <BsGithub className='sm:text-[3rem] text-[2rem] text-[#686D76]'/>
//                     <SiSonarqube className='sm:text-[3rem] text-[2rem] text-[#686D76]'/>
//                     <DiJira className='text-[3rem] text-[#686D76]'/>
//                 </div>
//                 <div className='sm:mt-2 mt-4 text-center'>
//                     <span>Yml |</span>
//                     <span> SQL |</span>
//                     <span> NoSQL |</span>
//                     <span> Babel |</span>
//                     <span> React Native</span>
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default About

// ------ version 2 -------
import React, { useEffect, useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { DiCss3, DiDocker, DiHtml5, DiJavascript, DiJenkins, DiJira, DiNodejs, DiReact } from 'react-icons/di';
import { SiSonarqube, SiTypescript } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

const SkillIcon = ({ icon: Icon, name }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative group transition-transform hover:scale-110 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon className="text-4xl text-gray-700 group-hover:text-indigo-600 transition-colors duration-300" />
      {isHovered && (
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {name}
        </div>
      )}
    </div>
  );
};

const SkillTag = ({ name }) => (
  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-indigo-100 hover:text-indigo-700 transition-colors cursor-default">
    {name}
  </span>
);

const SkillSection = ({ title, icons, tags }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`transition-all duration-700 ease-out transform ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
    }`}>
      <h3 className="text-2xl lg:text-3xl font-light text-gray-700 mb-6 text-center">
        {title}
      </h3>
      
      <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mb-8 justify-items-center">
        {icons.map((item, index) => (
          <SkillIcon key={index} icon={item.icon} name={item.name} />
        ))}
      </div>
      
      <div className="flex flex-wrap gap-2 justify-center">
        {tags.map((tag, index) => (
          <SkillTag key={index} name={tag} />
        ))}
      </div>
    </div>
  );
};

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timeout);
  }, []);

  const skillsData = {
    can: {
      icons: [
        { icon: DiReact, name: "React" },
        { icon: DiJavascript, name: "JavaScript" },
        { icon: DiNodejs, name: "Node.js" },
        { icon: DiHtml5, name: "HTML5" },
        { icon: DiCss3, name: "CSS3" },
        { icon: SiTypescript, name: "TypeScript" }
      ],
      tags: ["Ruby", "C", "RESTful", "GraphQL", "Socket.io"]
    },
    use: {
      icons: [
        { icon: VscAzure, name: "Azure" },
        { icon: DiDocker, name: "Docker" },
        { icon: DiJenkins, name: "Jenkins" },
        { icon: BsGithub, name: "GitHub" },
        { icon: SiSonarqube, name: "SonarQube" },
        { icon: DiJira, name: "Jira" }
      ],
      tags: ["YAML", "SQL", "NoSQL", "Babel"]
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen flex flex-col justify-center">
      <div className="max-w-5xl mx-auto">
        <div className={`mb-12 transition-all duration-500 ease-out transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light uppercase text-center mb-8 text-gray-800">
            Who am I?
          </h2>
          
          <div className="relative mb-10">
            <div className="absolute -top-6 left-0 w-16 h-1 bg-indigo-500"></div>
            <p className="text-lg leading-relaxed text-gray-700">
              A software engineer enthusiast with a passion for math and logic. Experienced in frontend and backend technologies, 
              I deliver exceptional solutions by leveraging my coding expertise. Deep understanding of data structures ensures 
              functional, scalable, and maintainable algorithms.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mt-4">
              Combining mechanical engineering background with coding skills, I offer a holistic approach to problem-solving. 
              Seeking collaborations to deliver optimal results and eager to connect with fellow professionals.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 md:gap-10">
          <SkillSection 
            title="What I Can Do" 
            icons={skillsData.can.icons} 
            tags={skillsData.can.tags} 
          />
          
          <div className="hidden md:block w-px bg-gray-300 mx-auto h-full"></div>
          
          <SkillSection 
            title="Tools I Use" 
            icons={skillsData.use.icons} 
            tags={skillsData.use.tags} 
          />
        </div>
        
        <div className={`mt-16 text-center transition-all duration-1000 ease-out transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition-colors"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;