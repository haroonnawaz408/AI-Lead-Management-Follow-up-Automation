const nav = [['Work', '#work'], ['Services', '#services'], ['Process', '#process'], ['About', '#about'], ['Start a Project', '#start']]
const social = ['Instagram', 'LinkedIn', 'Behance']
export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream py-16">
      <div className="wrap grid gap-12 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="font-display text-2xl font-semibold tracking-[0.18em]">NOVA STUDIO</p>
          <p className="mt-3 font-display text-xl italic text-mute">Digital experiences, thoughtfully crafted.</p>
        </div>
        <nav className="flex flex-col gap-2 text-sm text-mute md:col-span-3">{nav.map(([t, h]) => <a key={t} href={h} className="transition-colors hover:text-ink">{t}</a>)}</nav>
        <div className="flex flex-col gap-2 text-sm text-mute md:col-span-3">{social.map(s => <a key={s} href="#" className="transition-colors hover:text-ink">{s}</a>)}</div>
      </div>
      <div className="wrap mt-14 border-t border-line pt-6 text-xs text-mute">© 2026 NOVA STUDIO</div>
    </footer>
  )
}
