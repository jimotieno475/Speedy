import Icon from '@/shared/components/Icon'
import { Btn } from '@/shared/components/ui'
import StaticLayout from './StaticLayout'

const PERKS = [
  { icon: 'dollar', title: 'Competitive pay', text: 'Salary bands benchmarked yearly against the Nairobi tech market.' },
  { icon: 'shield', title: 'Health cover', text: 'Medical insurance for you and your immediate family.' },
  { icon: 'bolt', title: 'Real ownership', text: 'Ship features that thousands of riders and customers use the same week.' },
  { icon: 'users', title: 'Small teams', text: 'Flat structure — you will talk directly to the people who use what you build.' },
]

const ROLES = [
  { title: 'Senior Backend Engineer', dept: 'Engineering', location: 'Nairobi · Hybrid' },
  { title: 'Product Designer', dept: 'Design', location: 'Nairobi · Hybrid' },
  { title: 'Operations Associate — Dispatch', dept: 'Operations', location: 'Nairobi · On-site' },
  { title: 'Rider Support Specialist', dept: 'Support', location: 'Nairobi · On-site' },
  { title: 'Growth Marketing Lead', dept: 'Marketing', location: 'Nairobi · Hybrid' },
]

export default function Careers() {
  return (
    <StaticLayout eyebrow="We're hiring" title="Build the backbone of Nairobi delivery" sub="Join a team that ships fast and measures its work in minutes saved for real people.">
      <div className="grid gap-4 min-[640px]:grid-cols-2 min-[900px]:grid-cols-4">
        {PERKS.map(p => (
          <div key={p.title} className="rounded-[18px] border border-line bg-card p-5">
            <div className="mb-3 flex size-9 items-center justify-center rounded-[10px] bg-brand-soft text-brand">
              <Icon name={p.icon} className="size-[18px]" />
            </div>
            <div className="text-[13.5px] font-bold">{p.title}</div>
            <div className="mt-1 text-[12px] leading-relaxed text-dim">{p.text}</div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="mb-5 font-display text-xl font-bold">Open roles</h2>
        <div className="flex flex-col gap-2.5">
          {ROLES.map(r => (
            <div key={r.title} className="flex flex-col gap-3 rounded-[16px] border border-line bg-card p-4 min-[640px]:flex-row min-[640px]:items-center min-[640px]:justify-between">
              <div>
                <div className="text-[13.5px] font-semibold">{r.title}</div>
                <div className="mt-0.5 text-[12px] text-dim">{r.dept} · {r.location}</div>
              </div>
              <a href="mailto:careers@speedy.co.ke?subject=Application">
                <Btn variant="ghost" className="!px-4 !py-2 !text-xs">Apply</Btn>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 rounded-[18px] border border-line bg-card p-6 text-center">
        <div className="text-[13.5px] font-semibold">Don't see a fit?</div>
        <div className="mt-1 text-[13px] text-dim">
          Send your CV to <a href="mailto:careers@speedy.co.ke" className="font-semibold text-brand">careers@speedy.co.ke</a> — we keep good applications on file.
        </div>
      </div>
    </StaticLayout>
  )
}