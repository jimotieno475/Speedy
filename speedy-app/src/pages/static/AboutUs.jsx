import Icon from '@/shared/components/Icon'
import { Btn } from '@/shared/components/ui'
import { Link } from 'react-router-dom'
import StaticLayout from './StaticLayout'

const STATS = [
  { value: '50k+', label: 'Orders delivered' },
  { value: '1,200+', label: 'Active riders' },
  { value: '18', label: 'Nairobi neighbourhoods' },
  { value: '4.8★', label: 'Average rating' },
]

const VALUES = [
  { icon: 'bolt', title: 'Move fast', text: 'Every minute matters — to a hungry customer and to a rider trying to make their target for the day.' },
  { icon: 'shield', title: 'Earn trust', text: 'Verified riders, transparent pricing, and support that actually picks up.' },
  { icon: 'users', title: 'Back the city', text: "We're built around Nairobi's streets, traffic and rhythms — not adapted from somewhere else." },
]

function AboutUs() {
  return (
    <StaticLayout eyebrow="About Speedy" title="Delivery, built for Nairobi" sub="We started Speedy to close the gap between hungry customers and hardworking riders — with fair pay and honest tracking on both sides.">
      <div className="grid grid-cols-2 gap-3.5 min-[640px]:grid-cols-4">
        {STATS.map(s => (
          <div key={s.label} className="rounded-[16px] border border-line bg-card p-4 text-center">
            <div className="font-display text-xl font-bold text-brand">{s.value}</div>
            <div className="mt-1 text-[11px] text-dim">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-8 min-[900px]:grid-cols-2 min-[900px]:items-center">
        <div>
          <h2 className="font-display text-xl font-bold">Our story</h2>
          <p className="mt-3 text-[13.5px] leading-relaxed text-dim">
            Speedy launched in 2023 with a handful of riders in Westlands, delivering for a few
            local restaurants who couldn't afford their own fleet. Today we operate across Nairobi,
            matching thousands of orders a day with riders in real time — and we still measure
            success the way we did on day one: did the order arrive fast, and did the rider get
            paid fairly for it.
          </p>
        </div>
        <div className="rounded-[18px] border border-line bg-card p-6">
          <div className="font-display text-base font-bold">Headquartered in Nairobi</div>
          <div className="mt-1 text-[13px] text-dim">Sasson Mall, 3rd Floor, Kilimani</div>
          <div className="mt-4 flex items-center gap-2 text-[13px] text-dim"><Icon name="phone" className="size-4" />0800 123 456</div>
          <div className="mt-2 flex items-center gap-2 text-[13px] text-dim"><Icon name="chat" className="size-4" />help@speedy.co.ke</div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="mb-5 font-display text-xl font-bold">What we care about</h2>
        <div className="grid gap-4 min-[900px]:grid-cols-3">
          {VALUES.map(v => (
            <div key={v.title} className="rounded-[18px] border border-line bg-card p-5">
              <div className="mb-3 flex size-9 items-center justify-center rounded-[10px] bg-brand-soft text-brand">
                <Icon name={v.icon} className="size-[18px]" />
              </div>
              <div className="text-[14px] font-bold">{v.title}</div>
              <div className="mt-1.5 text-[13px] leading-relaxed text-dim">{v.text}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="glow mt-12 flex flex-col items-center gap-4 rounded-[24px] border border-line p-8 text-center">
        <div className="font-display text-xl font-bold">Want to build this with us?</div>
        <div className="max-w-sm text-[13.5px] text-dim">We're hiring across engineering, operations and rider support.</div>
        <Link to="/careers"><Btn>See open roles</Btn></Link>
      </div>
    </StaticLayout>
  )
}

export default AboutUs;