import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import { projectImgs } from '../images'
const projects = [
  ['01', 'AURELIA', 'Luxury Hotel Experience', 'A calm, image-led booking journey for a boutique hotel group.', projectImgs.aurelia],
  ['02', 'VANTA', 'Fashion E-Commerce', 'An editorial storefront with fast browsing and a frictionless checkout.', projectImgs.vanta],
  ['03', 'ORBIT', 'SaaS Product Experience', 'Product storytelling and onboarding for a workflow platform.', projectImgs.orbit],
]
export default function Portfolio() {
  return (
    <section id="work" className="bg-sand py-28 md:py-40">
      <div className="wrap">
        <Reveal><p className="label mb-6">Selected work</p><h2 className="h-display mb-20 text-4xl md:text-6xl">A few things we've built.</h2></Reveal>
        <div className="space-y-24 md:space-y-36">
          {projects.map(([n, name, cat, desc, img], i) => (
            <Reveal key={n}>
              <a href="#start" className="group grid items-center gap-8 md:grid-cols-12 md:gap-16">
                <div className={`md:col-span-7 ${i % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="aspect-[4/3] overflow-hidden rounded-[6px] bg-ivory">
                    <img src={img} onError={e => (e.currentTarget.style.opacity = 0)} alt={`${name} preview`} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]" />
                  </div>
                </div>
                <div className={`md:col-span-5 ${i % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <span className="text-sm text-accent">{n}</span>
                  <h3 className="h-display mt-3 text-5xl md:text-7xl">{name}</h3>
                  <p className="mt-3 text-sm uppercase tracking-[0.18em] text-olive">{cat}</p>
                  <p className="mt-5 max-w-sm text-mute">{desc}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium">View project <ArrowUpRight size={16} className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-1" /></span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
