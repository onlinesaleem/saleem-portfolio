
import Intro from '@/components/Intro'
import SectionDivider from '@/components/SectionDivider'
import { About } from '@/components/about'
import Projects from '@/components/projects'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center
    px-4">
     <Intro />
     <SectionDivider/>
     <About/>
     <Projects/>
    </main>
  )
}
