import { useState } from 'react'
import Icon from '@/shared/components/Icon'
import { Btn } from '@/shared/components/ui'
import { TextField } from '../FormField'
import StaticLayout from './StaticLayout'

const CHANNELS = [
  { icon: 'phone', title: 'Call us', value: '0800 123 456', note: 'Mon–Sun, 6am–11pm' },
  { icon: 'chat', title: 'Email us', value: 'help@speedy.co.ke', note: 'We reply within a few hours' },
  { icon: 'pin', title: 'Visit us', value: 'Sasson Mall, Kilimani', note: '3rd Floor, Nairobi' },
]

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const set = k => e => setForm({ ...form, [k]: e.target.value })

  const submit = e => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return
    setSent(true)
  }

  return (
    <StaticLayout eyebrow="Contact us" title="We'd love to hear from you" sub="Questions, feedback, or partnership ideas — reach out any way that works for you.">
      <div className="mb-10 grid gap-3.5 min-[900px]:grid-cols-3">
        {CHANNELS.map(c => (
          <div key={c.title} className="rounded-[16px] border border-line bg-card p-5 text-center">
            <div className="mx-auto mb-2.5 flex size-9 items-center justify-center rounded-[10px] bg-brand-soft text-brand"><Icon name={c.icon} className="size-[18px]" /></div>
            <div className="text-[12px] text-dim">{c.title}</div>
            <div className="mt-1 text-[13.5px] font-semibold">{c.value}</div>
            <div className="mt-0.5 text-[11px] text-dim">{c.note}</div>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-lg rounded-[20px] border border-line bg-card p-6">
        {sent ? (
          <div className="py-6 text-center">
            <Icon name="check" className="mx-auto mb-3 size-8 text-ok" />
            <div className="font-display text-base font-bold">Message sent</div>
            <div className="mt-1 text-[13px] text-dim">Thanks {form.name.split(' ')[0]} — we'll get back to you soon.</div>
          </div>
        ) : (
          <form onSubmit={submit} className="flex flex-col gap-4">
            <TextField label="Full name" icon="users" placeholder="Your name" value={form.name} onChange={set('name')} />
            <TextField label="Email" icon="phone" placeholder="you@example.com" value={form.email} onChange={set('email')} />
            <label className="block">
              <div className="mb-1.5 text-[12px] font-medium text-dim">Message</div>
              <textarea rows={4} value={form.message} onChange={set('message')} placeholder="How can we help?"
                className="w-full resize-none rounded-xl border border-line bg-raised px-3.5 py-3 text-[14px] text-ink outline-none placeholder:text-dim focus:border-brand/60" />
            </label>
            <Btn onClick={submit} className="w-full">Send message</Btn>
          </form>
        )}
      </div>
    </StaticLayout>
  )
}