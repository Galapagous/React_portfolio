import React, { useState } from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { RxCross1 } from 'react-icons/rx';
import Media from './Media.component';

const RightNav = () => {
    const [activeMenu, setActiveMenu] = useState(false);

    const switchMenu = () => {
        setActiveMenu(!activeMenu);
    };

    return (
        <div className={`fixed right-0 top-0 flex flex-col items-end bg-gray-800 text-white transition-all duration-500 ease-in-out
            ${activeMenu ? 'w-screen h-screen' : 'w-12 h-12'}`}>
            
            {/* Menu Icons */}
            <div onClick={switchMenu} className="w-12 h-12 relative flex items-center justify-center cursor-pointer">
            <div className="w-12 h-12 flex flex-col justify-center items-center mx-auto">
                {/* Top bar */}
                <div 
                    className={`absolute h-[2px] bg-white rounded-sm transition-all duration-300 ease-in-out
                        ${activeMenu 
                            ? 'w-6 rotate-45 translate-y-0' 
                            : 'w-6 -translate-y-3'
                        }`}
                />
                
                {/* Middle bar */}
                <div 
                    className={`absolute h-[2px] bg-white rounded-sm transition-all duration-300 ease-in-out
                        ${activeMenu 
                            ? 'w-0 opacity-0' 
                            : 'w-4 opacity-100'
                        }`}
                />
                
                {/* Bottom bar */}
                <div 
                    className={`absolute h-[2px] bg-white rounded-sm transition-all duration-300 ease-in-out
                        ${activeMenu 
                            ? 'w-6 -rotate-45 translate-y-0' 
                            : 'w-3 translate-y-3'
                        }`}
                />
            </div>
        </div>

            {/* Navigation Links */}
            <div className={`flex flex-col items-center justify-center w-full flex-1 gap-10 transition-all duration-500 ease-in-out
                ${activeMenu ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
                <a onClick={()=>{setActiveMenu(false)}} className="text-xl hover:text-gray-300 transition-colors" href="/">Home</a>
                <a onClick={()=>{setActiveMenu(false)}} className="text-xl hover:text-gray-300 transition-colors" href="#about">About</a>
                <a onClick={()=>{setActiveMenu(false)}} className="text-xl hover:text-gray-300 transition-colors" href="#project">Project</a>
                <a onClick={()=>{setActiveMenu(false)}} className="text-xl hover:text-gray-300 transition-colors" href="#contact">Contact</a>
                <div className='text-center mt-3'>
                <p className='text-white text-xl mb-none'>Link up</p>
                <Media/>
                </div>
            </div>
        </div>
    );
};

export default RightNav;