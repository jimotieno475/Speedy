import { useState } from 'react'
import Icon from '@/shared/components/Icon'
import StaticLayout from './StaticLayout'

const TOPICS = [
  { icon: 'orders', title: 'Orders & delivery', text: 'Tracking, delays, cancellations' },
  { icon: 'card', title: 'Payments & wallet', text: 'M-Pesa, refunds, top-ups' },
  { icon: 'bike', title: 'Rider account', text: 'Applications, payouts, documents' },
  { icon: 'users', title: 'Account & profile', text: 'Login issues, details, addresses' },
]

const FAQS = [
  { q: 'Where is my order?', a: 'Open Orders in the app to see live tracking and an ETA. You can also message or call your rider directly from the active order screen.' },
  { q: 'How do I get a refund?', a: 'Report the issue from the order in your Orders tab. Most refunds are reviewed within a few hours and paid back to your Speedy wallet.' },
  { q: 'How do rider payouts work?', a: 'Riders can request a payout to M-Pesa at any time from the Earnings tab. Payouts are auto-processed weekly, or instantly on request.' },
  { q: 'How do I become a rider?', a: 'Sign up and choose the Rider role. You will need a valid ID, a vehicle, and to pass a short verification step before going online.' },
  { q: 'I was charged twice — what do I do?', a: 'File a complaint from the affected order with the category "Payment issue." Our team resolves duplicate charges quickly once confirmed.' },
]

export default function HelpCentre() {
  const [open, setOpen] = useState(0)
  const [q, setQ] = useState('')
  const filtered = FAQS.filter(f => f.q.toLowerCase().includes(q.toLowerCase()))

  return (
    <StaticLayout eyebrow="Help centre" title="How can we help?" sub="Search common questions, or browse by topic below.">
      <div className="mx-auto mb-10 flex max-w-lg items-center gap-2.5 rounded-xl border border-line bg-card px-4 py-3">
        <Icon name="search" className="size-4 text-dim" />
        <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search for an answer…"
          className="w-full bg-transparent text-[14px] text-ink outline-none placeholder:text-dim" />
      </div>

      <div className="mb-10 grid gap-3.5 min-[640px]:grid-cols-2 min-[900px]:grid-cols-4">
        {TOPICS.map(t => (
          <div key={t.title} className="rounded-[16px] border border-line bg-card p-4 text-center hover:border-raised">
            <div className="mx-auto mb-2.5 flex size-9 items-center justify-center rounded-[10px] bg-brand-soft text-brand"><Icon name={t.icon} className="size-[18px]" /></div>
            <div className="text-[13px] font-semibold">{t.title}</div>
            <div className="mt-0.5 text-[11px] text-dim">{t.text}</div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="mb-4 font-display text-lg font-bold">Frequently asked questions</h2>
        <div className="flex flex-col gap-2.5">
          {filtered.map((f, i) => (
            <div key={f.q} className="rounded-[14px] border border-line bg-card">
              <button onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left">
                <span className="text-[13.5px] font-semibold">{f.q}</span>
                <Icon name="chevron" className={`size-4 shrink-0 text-dim transition-transform ${open === i ? 'rotate-90' : ''}`} />
              </button>
              {open === i && <div className="px-4 pb-4 text-[13px] leading-relaxed text-dim">{f.a}</div>}
            </div>
          ))}
          {!filtered.length && <div className="py-8 text-center text-[13px] text-dim">No results — try a different search, or contact us.</div>}
        </div>
      </div>
    </StaticLayout>
  )
}