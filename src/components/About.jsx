import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal from './Reveal'
import { aboutImg } from '../images'
export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-4%', '4%'])
  return (
    <section id="about" ref={ref} className="bg-sand py-28 md:py-40">
      <div className="wrap grid items-center gap-14 md:grid-cols-12 md:gap-20">
        <div className="md:col-span-6">
          <Reveal><p className="label mb-6">About</p><h2 className="h-display text-4xl uppercase tracking-[0.02em] md:text-6xl">A small studio with big attention to detail.</h2></Reveal>
          <Reveal delay={0.1}><p className="mt-10 max-w-md text-lg leading-relaxed text-mute">NOVA STUDIO is an independent digital studio focused on creating thoughtful websites and digital products for modern businesses.</p>
            <a href="#start" className="group mt-8 inline-block border-b border-ink pb-1 text-sm font-medium">More about us <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span></a></Reveal>
        </div>
        <Reveal className="md:col-span-6"><div className="aspect-[4/5] overflow-hidden rounded-[6px] bg-ivory"><motion.img src={aboutImg} onError={e => (e.currentTarget.style.opacity = 0)} alt="Studio architecture detail" loading="lazy" style={{ y, scale: 1.1 }} className="h-full w-full object-cover" /></div></Reveal>
      </div>
    </section>
  )
}
