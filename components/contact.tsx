
"use client"
import React from 'react'
import SectionHeading from './section-heading'

import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/app/actions/sendEmail'

import SubmitBtn from './submit-btn'
import toast from 'react-hot-toast'

function Contact() {
  const{ref}=useSectionInView("Contact");
 

  return (
  <motion.section id="contact" ref={ref} className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
  initial={{
    opacity:0,
  }}
  whileInView={{
    opacity:1,
  }}
  transition={{
    duration:1
  }}
  viewport={{
    once:true,
  }}
  >
    <SectionHeading>Contact me</SectionHeading>
    <p className='text-gray-700 -mt-6 dark:text-white/80'>Please contact me directly at <a 
    className='underline' href="mailto:onlinesaleem@gmail.com">onlinesaleem@gmail.com </a>
        or through this form.
    </p>
<form className='mt-10 flex flex-col dark:text-black'
 action={async (formData) => {
  const{data,error}=await sendEmail(formData);

  if(error) {
   toast.error(error);
    return;
  }
  toast.success('Email sent successfully');
 }}>
    <input name="senderEmail" className="h-14  px-4 rounded-lg borderBlack" type="email" placeholder='Your email'
    required maxLength={500}/>
    <textarea name="message" className='h-52 my-3 rounded-lg borderBlack p-4' placeholder='Your message'
    required maxLength={5000}/>
 <SubmitBtn/>

</form>
  </motion.section>
  )
}

export default Contact