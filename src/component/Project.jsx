import ProjectSample from './Project.component';
import Project1 from '../assets/paint1.jpg'
import Project2 from '../assets/paint2.jpg'
import Project3 from '../assets/project.jpg'


const Project = () => {
        const blogPlatform = {
            description: "A full-featured blogging platform where users can create, edit, and publish blog posts, comment on articles, and follow other users.",
            techStack: {
                frontend: ["React", "Next.js", "Tailwind CSS"],
                backend: ["Node.js", "Express", "MongoDB"],
                authentication: ["JWT (JSON Web Tokens)", "Passport.js"],
                hosting: ["Vercel", "Heroku"],
                additionalTools: ["Cloudinary (for image uploads)", "Redux (for state management)"]
            }
        }

        const eCommerceStore = {
            description: "An online shopping platform that allows users to browse products, add them to a cart, and make secure purchases.",
            techStack: {
                frontend: ["Vue.js", "Vuetify", "Axios"],
                backend: ["Django", "Django REST Framework", "PostgreSQL"],
                authentication: ["OAuth 2.0", "Django Allauth"],
                hosting: ["AWS (Amazon Web Services)", "Netlify"],
                additionalTools: ["Stripe (for payment processing)", "Redis (for caching)"]
            }
        }
        const taskManagementApp = {
            description: "A collaborative task management application that allows users to create, assign, and track tasks within projects.",
            techStack: {
                frontend: ["Angular", "Bootstrap", "RxJS"],
                backend: ["Spring Boot", "Java", "MySQL"],
                authentication: ["Spring Security", "JWT (JSON Web Tokens)"],
                hosting: ["DigitalOcean", "Firebase"],
                additionalTools: ["Socket.IO (for real-time updates)", "Docker (for containerization)"]
            }
        }

  return (
    <section id='project' className={`sm:px-28 px-5 h-auto w-[100vw] py-10 bg-slate-300`}>
        <div className='w-full h-auto flex flex-col sm:gap-5 gap-14 items-start justify-start'>
                <ProjectSample img={Project1} arrangement='even' title='GalapMuseum' desc={blogPlatform.description} stack={blogPlatform.techStack}/>
                <ProjectSample img={Project2} arrangement='odd' title='GalapMuseum' desc={blogPlatform.description} stack={blogPlatform.techStack}/>
                <ProjectSample img={Project3} arrangement='even' title='GalapMuseum' desc={blogPlatform.description} stack={blogPlatform.techStack}/>
        </div>
    </section>
  )
}

export default Project