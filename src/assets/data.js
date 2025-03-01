import Medex from './medex.png'
import Idec from './idec.png'
import Ejobs from './ejobs.png'
import OOSH from './oosh2.png'

export const projectData = [
    {
        title: "MedEx",
        desc: "A medical platform linking hospital to logistic provider.",
        stack: ["Nextjs", "Tailwind", "Context Api"],
        img: Medex,
        arrangement: 'even',
        link:"https://medex-dev.ogtlprojects.com/",
        github: "https://github.com/ogtlimited/MEDEX-Delivery-Logistic-FE"
    },
    {
        title: "Idec",
        desc: "An exception certificate issueing platform, exempting import duty charge from critical key players in the economy",
        stack: ["Nextjs", "Tailwind", "Context Api"],
        img: Idec,
        arrangement: 'odd',
        link:"https://idec.gov.ng/",
        github: "https://github.com/ogtlimited/IDEC-FRONTEND"
    },
    {
        title: "Ejobs",
        desc: "A job platform that brings companies and job seekers together",
        stack: ["ReactJs", "Tailwind", "Redux", "Nodejs", "express", "mongodb"],
        img: Ejobs,
        arrangement: 'even',
        link: "https://ejobs.com.ng/",
        github: "https://github.com/Essentialng/ejob-new-musa"
    },
    {
        title: "OOSH",
        desc: "A Simple social media platform, connecting developers together",
        stack: ["ReactJs", "Tailwind", "Redux", "Nodejs", "express", "mongodb", "typescript"],
        img: OOSH,
        arrangement: 'even',
        link: "https://ooshlink.com/",
        github: "https://github.com/Essentialng/oosh-musa-frontend"
    },
]