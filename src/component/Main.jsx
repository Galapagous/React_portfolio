import React from 'react'
import Background from '../assets/desk2.jpg'
import Logo from '../assets/logo1.svg'
import { BsDash} from 'react-icons/bs'
import Media from './Media.component'



const Main = () => {
  return (
    <section id='home' style={{backgroundImage:`url(${Background})`}} className={`px-28 h-[100vh] w-[100vw] border-2 py-10 bg-no-repeat bg-cover flex flex-col items-center justify-center`}>
       <div className='w-80 h-72 bg-gray-50 opacity-85 flex flex-col items-center justify-center'>
        <img className='w-36 h-36' src={Logo} alt='logo'/>
        <h1 className='text-3xl'>Muhammed Musa</h1>
        <div className='flex items-center justify-center gap-2'>
            <BsDash className='w-3'/>
        <p className='text-sm text-gray-800'>Fullstack developer</p>
            <BsDash className='w-3'/>
        </div>
        <p className='text-xs text-gray-800'>lagos. Nigeria</p>
       </div>
       <Media/>
    </section>

  )
}

export default Main