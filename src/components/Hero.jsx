import { motion } from 'framer-motion'
import { heroImg } from '../images'
import { ease } from './Reveal'
const Line = ({ children, i }) => (
  <span className="block overflow-hidden pb-[0.1em]"><motion.span className="block" initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ duration: 1.1, delay: 0.25 + i * 0.12, ease }}>{children}</motion.span></span>
)
const fade = (d, y = 14) => ({ initial: { opacity: 0, y }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay: d, ease } })
export default function Hero() {
  return (
    <section id="top" className="pb-24 pt-32 md:pt-40">
      <div className="wrap grid items-center gap-14 md:grid-cols-12">
        <div className="md:col-span-7">
          <motion.p {...fade(0.1)} className="label mb-8">Independent Digital Studio</motion.p>
          <h1 className="h-display text-[clamp(2.8rem,6.6vw,6.2rem)]">
            <Line i={0}>We create digital</Line><Line i={1}>experiences that</Line>
            <Line i={2}><span className="italic text-olive">move brands forward.</span></Line>
          </h1>
          <motion.p {...fade(1)} className="mt-9 max-w-lg text-lg leading-relaxed text-mute">
            We design and develop premium websites, e-commerce experiences, and modern web applications for ambitious businesses.
          </motion.p>
          <motion.div {...fade(1.2)} className="mt-10 flex flex-wrap gap-4">
            <a href="#start" className="group rounded-full bg-ink px-8 py-4 text-sm font-medium text-cream transition-colors duration-300 hover:bg-accent">Start a Project <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span></a>
            <a href="#work" className="rounded-full border border-line px-8 py-4 text-sm transition-colors duration-300 hover:border-ink">View Our Work</a>
          </motion.div>
          <motion.p {...fade(1.5, 0)} className="mt-12 flex items-center gap-3 text-sm text-mute"><span className="h-2 w-2 rounded-full bg-olive" />Available for selected projects</motion.p>
        </div>
        <motion.div className="relative md:col-span-5" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.4, delay: 0.5, ease }}>
          <div className="aspect-[4/5] overflow-hidden rounded-[6px] bg-sand"><img src={heroImg} onError={e => (e.currentTarget.style.opacity = 0)} alt="Designer workspace" className="h-full w-full object-cover" /></div>
          <span className="absolute bottom-5 left-5 rounded-full bg-ivory/85 px-4 py-2 text-[10px] font-medium tracking-[0.22em] backdrop-blur">DESIGN / DEVELOPMENT / EXPERIENCE</span>
        </motion.div>
      </div>
    </section>
  )
}
