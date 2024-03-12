"use client"
import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';

import { useSectionInView } from '@/lib/hooks';
export const About = () => {

  const{ref}=useSectionInView("About",0.5);


  return (
    <motion.section 
    ref={ref}
    className='mb-28 max-w-[45rem]
    text-center leading-8 scroll-mt-28'
    initial={{opacity:0,y:100}}
    animate={{opacity:1,y:0}}
    transition={{delay:0.175}}
    id="about">
        <SectionHeading>About me</SectionHeading>
        <p className='mb-3'>
        After graduating with a master degree in{" "}
        <span className="font-medium">Information Technology</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        </p>
        <span className="font-medium">
          Java,Jsp,Spring Boot, React, Next.js,  ,Mssql,Mysql and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. 
        <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, reading books, and travelling. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. 
        </p>
    </motion.section>
  )
}
