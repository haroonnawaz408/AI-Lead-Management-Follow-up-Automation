import Reveal from './Reveal'
export default function Statement() {
  return (
    <section className="bg-ink py-32 text-cream md:py-52">
      <div className="wrap text-center">
        <Reveal><h2 className="h-display mx-auto max-w-5xl text-[clamp(2.4rem,6.5vw,6.5rem)]">Digital should not just look good.<br /><span className="italic text-soft">It should make people feel something.</span></h2></Reveal>
        <Reveal delay={0.2}><p className="mt-14 text-[10px] tracking-[0.35em] text-soft">DESIGN / TECHNOLOGY / STRATEGY</p></Reveal>
      </div>
    </section>
  )
}
