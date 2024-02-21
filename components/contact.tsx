import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'

function Contact() {
  return (
  <section id="contact" className='mb-20 sm:mb-28 w-[min(100%,38rem)]'>
    <SectionHeading>Contact me</SectionHeading>
    <p>Please contact me directly at <a 
    className='underline' href="mailto:onlinesaleem@gmail.com">onlinesaleem@gmail.com</a>
        or through this form.
    </p>
<form>
    <input type="email" />
    <textarea/>
    <button type="submit">
        Submit <FaPaperPlane/> {" "}
    </button>

</form>
  </section>
  )
}

export default Contact