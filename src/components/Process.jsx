import Reveal from './Reveal'
const steps = [
  ['01', 'Discover', 'We understand the business, audience, goals, and requirements.'],
  ['02', 'Define', 'We establish the visual direction, structure, and user experience.'],
  ['03', 'Build', 'We design and develop the complete digital experience.'],
  ['04', 'Launch', 'We refine, optimize, and prepare everything for launch.'],
]
export default function Process() {
  return (
    <section id="process" className="py-28 md:py-40">
      <div className="wrap">
        <Reveal><p className="label mb-6">Our process</p><h2 className="h-display mb-16 max-w-3xl text-4xl md:text-6xl">From first conversation to final launch.</h2></Reveal>
        <div className="grid gap-10 border-t border-line pt-10 md:grid-cols-4 md:gap-8">
          {steps.map(([n, t, d], i) => (
            <Reveal key={n} delay={i * 0.12}>
              <span className="font-display text-5xl text-soft">{n}</span>
              <h3 className="mt-6 text-xs font-medium uppercase tracking-[0.24em]">{t}</h3>
              <p className="mt-3 max-w-[16rem] leading-relaxed text-mute">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
