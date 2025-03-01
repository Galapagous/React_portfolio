import { useEffect, useState } from 'react';
import Background from '../assets/desk2.jpg';
import Logo from '../assets/logo1.svg';
import Media from './Media.component';

const Main = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Animation timing
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <section 
      id="home" 
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center px-4">
        {/* Card with animation */}
        <div 
          className={`transform transition-all duration-700 ease-out ${
            isLoaded 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="bg-white bg-opacity-95 backdrop-blur-sm shadow-2xl p-8 sm:p-10 rounded-lg flex flex-col items-center justify-center max-w-md">
            {/* Logo with shadow effect */}
            <div className="mb-4 relative">
              <div className="absolute inset-0 -m-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full opacity-10 blur-md"></div>
              <img 
                className="w-32 h-32 sm:w-36 sm:h-36 relative" 
                src={Logo} 
                alt="Muhammed Musa logo"
              />
            </div>

            {/* Name with enhanced typography */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">
              Muhammed Musa
            </h1>

            {/* Title with refined separator */}
            <div className="flex items-center justify-center gap-2 mt-2">
              <div className="w-5 h-px bg-gray-400"></div>
              <p className="text-sm sm:text-base font-medium text-gray-600 uppercase tracking-wider">
                Fullstack Developer
              </p>
              <div className="w-5 h-px bg-gray-400"></div>
            </div>

            {/* Location with icon */}
            <div className="flex items-center mt-2 text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-sm">Lagos, Nigeria</p>
            </div>

            {/* CTA Button */}
            {/* <button className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium py-2 px-6 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
              View Portfolio
            </button> */}
          </div>
        </div>

        {/* Social Media Links with animation */}
        <div 
          className={`mt-6 transition-all duration-700 ease-out delay-300 ${
            isLoaded 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
        >
          <Media />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="flex flex-col items-center text-white">
          <p className="text-xs uppercase tracking-widest mb-2">Scroll Down</p>
          <div className="w-0.5 h-8 bg-white bg-opacity-50 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Main;