import { useEffect, useState } from 'react'
import { ease } from './Reveal'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
const links = [['Work', '#work'], ['Services', '#services'], ['Process', '#process'], ['About', '#about']]
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30); on()
    window.addEventListener('scroll', on, { passive: true }); return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${scrolled || open ? 'border-line bg-ivory/80 backdrop-blur-md' : 'border-transparent'}`}>
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-xl font-semibold leading-none tracking-[0.18em]">NOVA<span className="ml-2 text-[11px] font-body font-medium tracking-[0.3em] text-accent">STUDIO</span></a>
        <nav className="hidden gap-10 md:flex">
          {links.map(([t, h]) => <a key={t} href={h} className="text-sm text-mute transition-colors duration-300 hover:text-ink">{t}</a>)}
        </nav>
        <a href="#start" className="group hidden text-sm font-medium md:block">Start a Project <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span></a>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} transition={{ duration: 0.45, ease }} className="overflow-hidden md:hidden">
            <div className="wrap flex flex-col gap-5 pb-8 pt-3">
              {[...links, ['Start a Project →', '#start']].map(([t, h]) => <a key={t} href={h} onClick={() => setOpen(false)} className="font-display text-3xl">{t}</a>)}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
