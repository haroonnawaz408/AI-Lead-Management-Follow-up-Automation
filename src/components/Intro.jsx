import { motion } from 'framer-motion'
import Reveal, { ease } from './Reveal'
export default function Intro() {
  return (
    <section className="bg-sand py-28 md:py-44">
      <div className="wrap">
        <Reveal><p className="label mb-8">What we believe</p></Reveal>
        <Reveal delay={0.1}><h2 className="h-display max-w-4xl text-5xl md:text-8xl">Good digital design should feel effortless.</h2></Reveal>
        <motion.div className="my-14 h-px origin-left bg-line" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, ease }} />
        <Reveal><p className="max-w-2xl text-lg leading-relaxed text-mute md:ml-auto md:w-1/2">We combine thoughtful design, modern technology, and business strategy to create digital experiences that are beautiful, useful, and built to perform.</p></Reveal>
      </div>
    </section>
  )
}
