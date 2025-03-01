import { projectData } from '../assets/data';
import ProjectSample from './Project.component';


const Project = () => {
  return (
    <section id='project' className={`sm:px-28 px-5 h-auto w-[100vw] py-10 bg-slate-300`}>
        <div className='w-full h-auto flex flex-col sm:gap-5 gap-14 items-start justify-start'>
            {
                projectData?.map((eachData, index)=>{
                    return(
                        <div key={index}>
                            <ProjectSample title={eachData.title} desc={eachData.desc} img={eachData.img} arrangement={eachData.arrangement} link={eachData.link} github={eachData.github}/>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Project