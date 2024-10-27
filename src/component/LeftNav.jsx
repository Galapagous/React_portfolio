import React, { useContext } from 'react'
import { BsDot } from 'react-icons/bs'
import Logo from '../assets/logo1.svg'
import { URLContext } from '../context/navContext'

const LeftNav = () => {

    const {url, setURL} = useContext(URLContext)

  return (
    <div className={`flex flex-col items-center justify-center gap-20 fixed left-0 top-0 px-5 text-white`}>
            <img className='sm:w-14 sm:h-14 w-8 h-8 rounded-full bg-white mt-2' src={Logo} alt='site logo' />
            <div className={`sm:flex hidden flex-col gap-16 items-center justify-center`}>
                <span onClick={()=>{setURL('home')}} className={`cursor-pointer ${url === 'home' ? 'text-red-300' : ''}`}>01.</span>
                <span onClick={()=>{setURL('about')}} className={`cursor-pointer ${url === 'about' ? 'text-red-300' : ''}`}>02.</span>
                <span onClick={()=>{setURL('project')}} className={`cursor-pointer ${url === 'project' ? 'text-red-300' : ''}`}>03.</span>
                <div className={`hidden`}>
                    <BsDot className='w-8 h-8 cursor-pointer'/>
                    <BsDot className='w-8 h-8 cursor-pointer'/>
                    <BsDot className='w-8 h-8 cursor-pointer'/>
                    <BsDot className='w-8 h-8 cursor-pointer'/>
                </div>
                <span onClick={()=>{setURL('contact')}} className={`cursor-pointer ${url === 'contact' ? 'text-red-300' : ''}`}>04.</span>
            </div>
        </div>
  )
}

export default LeftNav