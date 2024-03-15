import HeroSection from '@/components/main/HeroSection'
import Skills from '@/components/main/Skills'
import Encryption from '@/components/main/Encryption'
import Projects from '@/components/main/Projects'
import Footer from '@/components/main/Footer'
import Contact from '@/components/main/Contact'
export default function Home() {
  return (
    <main className=''>
      <div className='flex flex-col gap-20'>
          <HeroSection/>
          <Skills/>
          <Encryption/>
          <Projects/>
          <Contact/>
          <Footer/>
      </div>
    </main>
  ) 
}
