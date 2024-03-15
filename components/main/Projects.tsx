import React from 'react'
import ProjectCard from '../Core/ProjectCard'
import { project_details } from '@/data'

const Projects = () => {
  return (
    <div id='projects'
     className='flex flex-col justify-center py-20 z-[1]'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 text-center'>
            My Projects
        </h1>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
           {
            project_details.map((project)=>(
              <ProjectCard
                key={project.src}
                src={project.src}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            ))
           }
        </div>
    </div>
  )
}

export default Projects