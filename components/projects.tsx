import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Image from 'next/image'

const Projects = () => {
  return (
    <section>
        <SectionHeading>My projects</SectionHeading>
        <div>
            {
                projectsData.map((project,index)=> (
                    <React.Fragment key={index}>
                    <Project {...project}/>
                    </React.Fragment>
                ))
            }
        </div>
    </section>
    
  )
}

type ProjectProps= (typeof projectsData)[number];

function Project(
    { title,description,
        tags,imageUrl
    
    }:ProjectProps) 
    {
    return (
    <section className='bg-gray-100 max-w-[42rem] border 
    border border-black/5 overflow-hidden sm:pr-8'>
        <h3 className='text-2xl'>{title}</h3>
        <p className='mt-2 leading-relaxex text-gray-700'>{description}</p>
        <ul>
            {
            tags.map((tag,index)=>(
                <li key={index}>{tag}</li>
            )) }
        </ul>
        <Image src={imageUrl} alt="Project I worked on"
        quality={95}/>
    </section>
    );
            }
export default Projects