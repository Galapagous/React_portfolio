import React, { useEffect, useState } from 'react'
import LeftNav from '../component/LeftNav'
import RightNav from '../component/RightNav'
import Main from '../component/Main'
import About from '../component/About'
import Project from '../component/Project'
import Contact from '../component/Contact.component'

const Homepage = () => {
    const [activeSection, setActiveSection] = useState('home')
    const handleSelection = (value)=>{
        setActiveSection(value)
    }

    const sections = ['/', 'about', 'project']

    // scroll listeners
    const handleScroll = () => {
        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                // Check if the section is in the viewport
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    setActiveSection(section);
                    // Call your function here
                    console.log(`Scrolled to ${section}`);
                }
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
    <div className='relative h-auto'>
        <LeftNav currentSection={activeSection} setSelection={handleSelection} section={activeSection}/>
        {/* hero section */}
        <Main/>

        {/* about section */}
            <About/>
        {/* project section */}
            <Project/>
        {/* contact section */}
            <Contact/>
        {/* right nav */}
        <RightNav section={activeSection}/>
    </div>
  )
}

export default Homepage