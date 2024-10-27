import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { DiGithub } from 'react-icons/di'
import { MdEmail } from 'react-icons/md'

const Media = () => {
  return (
    <div className='flex items-center justify-center gap-5 mt-5'>
        <DiGithub className='w-10 h-10 text-white cursor-pointer'/>
        <BsLinkedin className='w-10 h-10 text-white cursor-pointer'/>
        <MdEmail className='w-10 h-10 text-white cursor-pointer'/>
       </div>
  )
}

export default Media