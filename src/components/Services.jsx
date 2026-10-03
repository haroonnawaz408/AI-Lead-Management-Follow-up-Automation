import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
const rows = [
  ['01', 'Web Design & Development', 'Custom websites designed around your brand, audience, and business goals.'],
  ['02', 'E-Commerce', 'Elegant shopping experiences designed to turn visitors into customers.'],
  ['03', 'Web Applications', 'Modern interactive applications built around real-world business workflows.'],
  ['04', 'UI / UX Design', 'Clear, intuitive interfaces that balance beauty with usability.'],
]
export default function Services() {
  return (
    <section id="services" className="py-28 md:py-40">
      <div className="wrap">
        <Reveal><p className="label mb-6">Our services</p><h2 className="h-display mb-16 max-w-3xl text-4xl md:text-6xl">Everything you need to build a stronger digital presence.</h2></Reveal>
        <div className="border-t border-line">
          {rows.map(([n, t, d]) => (
            <Reveal key={n}>
              <a href="#start" className="group relative grid items-center gap-3 border-b border-line px-2 py-9 transition-colors duration-500 hover:bg-ivory md:grid-cols-12 md:gap-6 md:px-6 md:py-12">
                <span className="font-display text-4xl text-soft transition-transform duration-500 group-hover:translate-x-1 md:col-span-2 md:text-6xl">{n}</span>
                <h3 className="font-display text-3xl transition-transform duration-500 group-hover:translate-x-2 md:col-span-5 md:text-4xl">{t}</h3>
                <p className="max-w-sm text-mute md:col-span-4">{d}</p>
                <ArrowUpRight className="text-mute transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ink md:col-span-1 md:justify-self-end" />
                <span className="absolute bottom-[-1px] left-0 h-px w-0 bg-accent transition-all duration-700 group-hover:w-full" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
