"use client"
import React from 'react'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
import SectionHeading from './section-heading'
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

export default function Experience() {

    const { ref,inView} = useSectionInView("Experience");
    const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

    return (
        <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
          <SectionHeading>My experience</SectionHeading>
          <VerticalTimeline   lineColor="">
            {experiencesData.map((item, index) => (
              <React.Fragment key={index}>
                <VerticalTimelineElement
                  visible={true}
                >
                  <h3 className="font-semibold capitalize">{item.title}</h3>
                  <p className="font-normal !mt-0">{item.location}</p>
                  <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                    {item.description}
                  </p>
                </VerticalTimelineElement>
              </React.Fragment>
            ))}
          </VerticalTimeline>
        </section>
      );

}

