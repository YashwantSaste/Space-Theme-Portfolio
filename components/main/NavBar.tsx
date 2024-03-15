import React from 'react'
import Image from 'next/image'
import { Social_Media } from '@/data'
import Link from 'next/link'
const NavBar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
        <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px] '>
            <Link href='#about' className='h-auto w-auto flex flex-row items-center'>
                <Image src="/NavLogo.png" alt='logo' width={70} height={70}
                className='cursor-pointer hover:animate-slowspin'
                />
                <span className='font-bold ml-[10px] hidden md:block text-gray-300'>
                    Yashwant Saste
                </span>
            </Link>
            <div className='w-[500px] h-[80%] flex flex-row items-center justify-between md:mr-20'>
                <div className="flex items-center justify-center border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px]
                w-full h-full py-[10px] rounded-full text-gray-200 gap-20">
                    <Link href="#skills" className='cursor-pointer'>Skills</Link>
                    <Link href="#projects" className='cursor-pointer'>Projects</Link>
                    <Link href="#about" className='cursor-pointer'>About Me</Link>
                </div>
            </div>
            <div className='flex flex-row gap-5'>
                {
                    Social_Media.map((social)=>(
                        <Link href={social.link} key={social.name}>
                            <Image src={social.src} alt={social.name}
                            key={social.name}
                            width={40}
                            height={40}
                            className=' hover:scale-110 transition-all duration-300'
                            />
                        </Link>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default NavBar