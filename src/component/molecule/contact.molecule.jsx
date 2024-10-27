import React from 'react'
import { BsStars } from 'react-icons/bs'
import { GiFlowerStar } from 'react-icons/gi'

const ContactInput = ({title, required, placeholder}) => {
  return (
    <div className='bg-inherit text-white'>
        <label className='flex items-center justify-start relative w-fit text-xl uppercase font-thin' htmlFor="name">{title}<GiFlowerStar className={`w-2 h-2 ${required ? '' : 'hidden'} text-orange-600 absolute top-0 right-0`}/>  :</label>
        <input className='p-2 border-b-2 bg-inherit text-white w-[200px] text-lg font-thin outline-none' type="text" placeholder={placeholder}/>
    </div>
  )
}

export default ContactInput