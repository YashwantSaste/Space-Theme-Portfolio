"use client"

import { Backend_skill, Frontend_skill, Other_skill } from '@/data'
import React from 'react'
import SkillsDataSection from '../Core/SkillsDataSection'
import SkillsText from '../Core/SkillsText'

const Skills = () => {
  return (
    <section id='skills'
    className='flex flex-col items-center gap-3 h-full relative overflow-hidden py-20'
    style={{transform: "scale(0.9)"}}
    >
        <SkillsText/>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
            {
                Frontend_skill.map((skillImg,index)=>(
                    <SkillsDataSection
                    key={index}
                    src={skillImg.Image}
                    width={skillImg.width}
                    index={index}
                    height={skillImg.height}
                    />
                ))
            }
        </div>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
            {
                Backend_skill.map((skillImg,index)=>(
                    <SkillsDataSection
                    key={index}
                    src={skillImg.Image}
                    width={skillImg.width}
                    index={index}
                    height={skillImg.height}
                    />
                ))
            }
        </div>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
            {
                Other_skill.map((skillImg,index)=>(
                    <SkillsDataSection
                    key={index}
                    src={skillImg.Image}
                    width={skillImg.width}
                    index={index}
                    height={skillImg.height}
                    />
                ))
            }
        </div>
        <div className='w-full h-full absolute'>
            <div className='w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover'>
                <video
                className='w-full h-auto'
                preload='false'
                playsInline
                loop
                muted
                autoPlay
                src='/cards-video.webm'
               />
            </div>
        </div>
    </section>
  )
}

export default Skills