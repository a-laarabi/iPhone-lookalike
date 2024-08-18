import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useEffect, useState } from 'react'
import { heroVideo, smallHeroVideo } from '../utils'

const Hero = () => {
  // useState
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  // useEffect

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet)

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet)
    }
  })

  // GSAP
  useGSAP(() => {
    gsap.to(
      '#heroTitle',
      { opacity: 1, delay: 2 }
    )
    gsap.to(
      '.cta',
      {opacity: 1, delay: 1.8, y: -50, stagger: 0.1}
    )
  }, [])

  // functions
  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }
  return (
    <section className="w-full nav-height bg-black relative">
      <div className="flex h-5/6  w-full items-center justify-around flex-col">
        <p id='heroTitle' className="hero-title">iPhone 15 Pro</p>
        <div className='md:w-10/12 w-9/12'>
          <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type='video/mp4'/>
          </video>
        </div>
      </div>

      
      <div className='flex flex-col items-center'>
        <a href='#highlits' className='btn cta translate-y-20 opacity-0'>Buy</a>
        <p className='font-normal text-xl cta translate-y-20 opacity-0'>From $199/month or $999</p>
      </div>
    </section>
  )
}

export default Hero