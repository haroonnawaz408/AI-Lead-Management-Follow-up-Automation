import Reveal from './Reveal'
const tech = ['React', 'JavaScript', 'Next.js', 'Tailwind CSS', 'Three.js', 'Node.js']
export default function Technology() {
  const row = [...tech, ...tech, ...tech, ...tech]
  return (
    <section className="overflow-hidden py-28 md:py-36">
      <div className="wrap mb-14"><Reveal><p className="label mb-5">Technology</p><p className="h-display max-w-2xl text-3xl md:text-5xl">Built with modern tools. Designed for the real world.</p></Reveal></div>
      <div className="border-y border-line py-8"><div className="marquee flex w-max gap-14 whitespace-nowrap">
        {row.map((t, i) => <span key={i} className="flex items-center gap-14 font-display text-4xl text-mute md:text-5xl">{t}<span className="h-1 w-1 rounded-full bg-accent" /></span>)}
      </div></div>
    </section>
  )
}
