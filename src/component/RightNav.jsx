import React, { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import Media from "./Media.component";

const RightNav = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const switchMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="fixed top-0 right-0 flex flex-col items-end z-50">
      {/* Menu Toggle Button */}
      <button
        onClick={switchMenu}
        aria-label="Toggle menu"
        className="w-12 h-12 flex items-center justify-center bg-blue-400 text-white rounded-sm shadow-md z-50 focus:outline-none"
      >
        {activeMenu ? <RxCross1 size={24} /> : <BiMenuAltLeft size={24} />}
      </button>

      {/* Navigation Panel */}
      <div
        className={`fixed top-0 right-0 h-screen w-screen bg-gray-900 text-white flex flex-col items-center justify-center transition-all duration-500 ease-in-out 
          ${activeMenu ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
        `}
      >
        <nav className="flex flex-col gap-6 text-lg">
          <a onClick={switchMenu} className="hover:text-gray-300 transition-colors" href="/">
            Home
          </a>
          <a onClick={switchMenu} className="hover:text-gray-300 transition-colors" href="#about">
            About
          </a>
          <a onClick={switchMenu} className="hover:text-gray-300 transition-colors" href="#project">
            Projects
          </a>
          <a onClick={switchMenu} className="hover:text-gray-300 transition-colors" href="#contact">
            Contact
          </a>
        </nav>

        {/* Social Media Section */}
        <div className="mt-6 text-center">
          <p className="text-xl mb-2">Link up</p>
          <Media />
        </div>
      </div>
    </div>
  );
};

export default RightNav;
