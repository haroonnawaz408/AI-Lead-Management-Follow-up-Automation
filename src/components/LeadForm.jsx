import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { N8N_WEBHOOK_URL } from '../config'
import Reveal from './Reveal'
const OPTIONS = {
  project_type: ['Business Website', 'E-Commerce', 'Web Application', 'UI / UX Design', 'Other'],
  budget: ['Under $300', '$300–$700', '$700–$1,500', '$1,500+'],
  timeline: ['ASAP', '1–2 Weeks', '1 Month', 'Flexible'],
}
const empty = { full_name: '', email: '', project_type: '', budget: '', timeline: '', requirements: '' }
function validate(v) {
  const e = {}
  if (v.full_name.trim().length < 2) e.full_name = 'Enter your full name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Enter a valid email address.'
  if (!v.project_type) e.project_type = 'Choose a project type.'
  if (v.requirements.trim().length < 10) e.requirements = 'Describe your project in at least 10 characters.'
  return e
}
const Chips = ({ name, value, onChange }) => (
  <div className="flex flex-wrap gap-2" role="radiogroup">
    {OPTIONS[name].map(o => (
      <button type="button" key={o} role="radio" aria-checked={value === o} onClick={() => onChange(name, value === o && name !== 'project_type' ? '' : o)}
        className={`rounded-full border px-4 py-2 text-sm transition-colors duration-300 ${value === o ? 'border-ink bg-ink text-cream' : 'border-line text-mute hover:border-ink hover:text-ink'}`}>{o}</button>
    ))}
  </div>
)
const Err = ({ m }) => m ? <p className="mt-2 text-sm text-red-800/80" role="alert">{m}</p> : null
export default function LeadForm() {
  const [v, setV] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const set = (k, val) => setV(p => ({ ...p, [k]: val }))
  async function onSubmit(ev) {
    ev.preventDefault()
    const e = validate(v); setErrors(e)
    if (Object.keys(e).length) return
    setStatus('sending')
    const payload = { ...v, full_name: v.full_name.trim(), email: v.email.trim(), requirements: v.requirements.trim(), source: 'nova-studio-website', submitted_at: new Date().toISOString() }
    try {
      if (!N8N_WEBHOOK_URL) console.info('[LeadForm] VITE_N8N_WEBHOOK_URL not set. Payload:', payload)
      else {
        const res = await fetch(N8N_WEBHOOK_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
        if (!res.ok) throw new Error(`Webhook responded ${res.status}`)
      }
      setStatus('done')
    } catch (err) { console.error(err); setStatus('error') }
  }
  return (
    <section id="start" className="scroll-mt-10 bg-ivory py-28 md:py-40">
      <div className="wrap grid gap-16 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <p className="label mb-6">Start a project</p>
          <h2 className="h-display text-5xl md:text-6xl">Have a project in mind?</h2>
          <p className="mt-6 max-w-xs text-mute">Tell us what you're building, and we'll take it from there.</p>
        </Reveal>
        <div className="md:col-span-8">
          <AnimatePresence mode="wait">
            {status === 'done' ? (
              <motion.div key="ok" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="rounded-[6px] border border-line bg-cream p-10 md:p-16" role="status">
                <span className="mb-8 block h-px w-12 bg-accent" />
                <h3 className="h-display text-4xl md:text-5xl">Thank you. Your project brief has been received.</h3>
                <p className="mt-6 max-w-md text-mute">We'll review your requirements and get back to you shortly.</p>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={onSubmit} noValidate exit={{ opacity: 0 }} className="space-y-10">
                <div className="grid gap-10 md:grid-cols-2">
                  <div><label htmlFor="full_name" className="label">Full name *</label><input id="full_name" name="full_name" autoComplete="name" className="field" value={v.full_name} onChange={e => set('full_name', e.target.value)} /><Err m={errors.full_name} /></div>
                  <div><label htmlFor="email" className="label">Email address *</label><input id="email" name="email" type="email" autoComplete="email" className="field" value={v.email} onChange={e => set('email', e.target.value)} /><Err m={errors.email} /></div>
                </div>
                <div><p className="label mb-4">Project type *</p><Chips name="project_type" value={v.project_type} onChange={set} /><Err m={errors.project_type} /></div>
                <div><p className="label mb-4">Estimated budget</p><Chips name="budget" value={v.budget} onChange={set} /></div>
                <div><p className="label mb-4">Desired timeline</p><Chips name="timeline" value={v.timeline} onChange={set} /></div>
                <div><label htmlFor="requirements" className="label">Project requirements *</label><textarea id="requirements" name="requirements" rows={6} className="field resize-none" placeholder="What are you building, and what should it achieve?" value={v.requirements} onChange={e => set('requirements', e.target.value)} /><Err m={errors.requirements} /></div>
                {status === 'error' && <p className="text-sm text-red-800/80" role="alert">We couldn't send your brief. Check your connection and try again.</p>}
                <button disabled={status === 'sending'} className="group rounded-full bg-ink px-10 py-4 text-sm font-medium text-cream transition-colors duration-300 hover:bg-accent disabled:opacity-60">
                  {status === 'sending' ? 'Sending…' : <>Send Project Brief <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span></>}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
