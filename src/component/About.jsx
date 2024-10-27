import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { DiCss3, DiDocker, DiHtml5, DiJavascript, DiJenkins, DiJira, DiNodejs, DiReact } from 'react-icons/di'
import { FaAws } from 'react-icons/fa'
import { SiSonarqube, SiTypescript } from 'react-icons/si'
import { VscAzure } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about' className={`sm:px-28 px-5 text-pretty bg-[rgb(228,224,225)] sm:h-[100vh] h-auto w-[100vw] py-10`}>
        <h1 className='text-center sm:text-[4rem] text-[2rem] font-extralight uppercase'>Who am i?</h1>
        <p className='text-center font-light'>A software engineer enthusiast with a passion for math and logic. Experienced in frontend and backend technologies, I deliver exceptional solutions by leveraging my coding expertise. Deep understanding of data structures ensures functional, scalable, and maintainable algorithms. Combining mechanical engineering background with coding skills, I offer a holistic approach to problem-solving. Seeking collaborations to deliver optimal results and eager to connect with fellow professionals.</p>
        <div className='flex items-start sm:flex-row flex-col justify-evenly sm:mt-10 mt-5'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='mb-4 sm:text-3xl text-2xl text-[#686D76] font-thin'>What i can</h1>
                <div className='flex items-center justify-center gap-10 flex-wrap sm:w-1/2 w-full'>
                    <DiReact className='sm:text-[3rem] text-[2rem] text-[#686D76]'/>
                    <DiJavascript className='sm:text-[3rem] text-[2rem] text-[#686D76]'/>
                    <DiNodejs className='sm:text-[3rem] text-[2rem] text-[#686D76]'/>
                    <DiHtml5 className='sm:text-[3rem] text-[2rem] text-[#686D76]'/>
                    <DiCss3 className='sm:text-[3rem] text-[2rem] text-[#686D76]'/>
                    <SiTypescript className='sm:text-[3rem] text-[2rem] text-[#686D76]'/>
                </div>
                <div className='sm:mt-2 mt-4 text-center'>
                    <span>Ruby |</span>
                    <span> C |</span>
                    <span> RESTful |</span>
                    <span> Graphql |</span>
                    <span> Socket io</span>
                </div>
            </div>
            <hr className='sm:w-[1px] w-[100%] sm:my-0 my-4 sm:h-[300px] h-[1px] bg-gray-600'/>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='mb-4 sm:text-3xl text-2xl text-[#686D76] font-thin'>What i use</h1>
                <div className='flex items-center justify-center gap-10 flex-wrap sm:w-1/2 w-full'>
                    <VscAzure className='sm:text-[3rem] text-[2rem] text-[#686D76]'/>
                    <DiDocker className='sm:text-[3rem] text-[2rem] text-[#686D76]'/>
                    <DiJenkins className='sm:text-[3rem] text-[2rem] text-[#686D76]'/>
                    <BsGithub className='sm:text-[3rem] text-[2rem] text-[#686D76]'/>
                    <SiSonarqube className='sm:text-[3rem] text-[2rem] text-[#686D76]'/>
                    <DiJira className='text-[3rem] text-[#686D76]'/>
                </div>
                <div className='sm:mt-2 mt-4 text-center'>
                    <span>Yml |</span>
                    <span> SQL |</span>
                    <span> NoSQL |</span>
                    <span> Babel |</span>
                    <span> React Native</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About