import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
interface Props{
    src:string,
    title:string,
    description:string,
    link:string,
}
const ProjectCard = ({src,title,description,link}:Props) => {
  return (
    <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] z-[-1]'>
        
       <Link href={link} className=' pointer-events-none -z-10'>
       <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className='w-full object-contain'
          />   
       </Link>     
        

        <div className='relative p-4'>
            <h1 className='text-2xl font-semibold text-white'>
                {title}
            </h1>
            <a className=' text-white ' href={link}>
              Website
            </a>
            <p className='mt-2 text-gray-300'>{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard