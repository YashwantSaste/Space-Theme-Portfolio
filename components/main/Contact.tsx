import React from 'react'
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromTop } from '@/utils/motion';
const Contact = () => {
  return (
    <div className='mt-6 flex flex-row items-center justify-center'>
        <div className='w-90% mx-auto'>
            <h1 className='text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
                Contact Me
            </h1>
            <p className='text-5xl font-bold text-white'>
                Questions, thoughts, or just want to say Hello?
            </p>
            
            <button className='button-primary py-2 text-center text-white cursor-pointer rounded-lg max-w-[200px] px-8 mt-5'>
              Contact Me Here
            </button>
        </div>
    </div>
  )
}

export default Contact
