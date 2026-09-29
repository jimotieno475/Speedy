import { Link } from 'react-router-dom'
import Icon from '@/shared/components/Icon'
import { Btn } from '@/shared/components/ui'
import { TopNav } from './AuthLayout'
import { ROLES } from './roles'
import heroImg from '../Assets/landing.png'
import Footer from './Footer'


const STEPS = [
  { icon: 'phone', title: 'Order or go online', text: 'Customers order from nearby restaurants. Riders open the app and go online in their zone.' },
  { icon: 'bike', title: 'We match instantly', text: 'The nearest available rider is assigned and picks up the order within minutes.' },
  { icon: 'check', title: 'Track to your door', text: 'Live GPS tracking the whole way, with in-app chat and calls if you need them.' },
]

const FEATURES = [
  { icon: 'bolt', title: 'Fast dispatch', text: 'Orders are matched to the closest online rider automatically.' },
  { icon: 'shield', title: 'Safe & verified', text: 'Every rider is vetted, tracked, and rated by real customers.' },
  { icon: 'dollar', title: 'Fair earnings', text: 'Riders keep more with transparent, per-kilometre payouts.' },
  { icon: 'star', title: 'Rated 4.8', text: 'Loved by thousands of customers across Nairobi.' },
]

function Portal({ role }) {
  return (
    <Link to={`/signup?role=${role.key}`} className="group flex-1 rounded-[18px] border border-line bg-card p-5 hover:border-raised">
      <div className="mb-3 flex size-10 items-center justify-center rounded-[12px] bg-brand-soft text-brand">
        <Icon name={role.icon} className="size-5" />
      </div>
      <div className="font-display text-[15px] font-bold">{role.label}</div>
      <div className="mt-1 text-[12.5px] text-dim">{role.desc}</div>
      <div className="mt-3 flex items-center gap-1.5 text-[12.5px] font-semibold text-brand opacity-0 transition-opacity group-hover:opacity-100">
        Get started <Icon name="arrow" className="size-3.5" />
      </div>
    </Link>
  )
}

export default function Landing() {
  return (
    <div className="min-h-dvh overflow-y-auto bg-base text-ink">
      <TopNav />

      {/* ===== Hero =====
          The photo is framed inside a bordered card next to the text, using the
          same border-line / bg-card tokens as the rest of the UI, rather than
          sitting behind everything with a hard-coded dark overlay. That way it
          reads correctly in both light and dark mode without any special-casing —
          it's just a photo in a card, like the rest of the app. */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-6 min-[900px]:grid-cols-[1.1fr_1fr] min-[900px]:px-10 min-[900px]:pb-24 min-[900px]:pt-10">
        <div>
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.06em] text-brand">
            <Icon name="bolt" className="size-3" />Now live in Nairobi
          </div>
          <h1 className="font-display text-[38px] font-bold leading-[1.08] min-[640px]:text-[48px]">
            Delivery that moves <span className="text-brand">as fast as you do.</span>
          </h1>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-dim">
            Speedy connects hungry customers with nearby riders in seconds — real-time tracking,
            fair pay, and a delivery network built for the city.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/signup"><Btn className="!px-6 !py-3.5">Get started</Btn></Link>
            <Link to="/login"><Btn variant="ghost" className="!px-6 !py-3.5">I have an account</Btn></Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[13px] text-dim">
            <div><span className="font-display text-lg font-bold text-ink">50k+</span> orders delivered</div>
            <div><span className="font-display text-lg font-bold text-ink">1,200+</span> active riders</div>
            <div><span className="font-display text-lg font-bold text-ink">4.8★</span> average rating</div>
          </div>
        </div>

        {/* Framed hero photo */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[22px] border border-line">
            <img
              src={heroImg}
              alt="Speedy rider delivering an order"
              className="h-[260px] w-full object-cover min-[640px]:h-[340px] min-[900px]:h-[420px]"
            />
            {/* Bottom-edge gradient sits only inside the frame, on top of the photo itself —
                it doesn't touch the page background, so it looks the same in both themes. */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>

          {/* Floating stat chips — hidden on the smallest screens so they don't overflow the frame */}
          <div className="absolute -right-4 -top-4 hidden items-center gap-2 rounded-2xl border border-line bg-card px-4 py-3 shadow-[0_16px_34px_rgba(0,0,0,0.35)] min-[640px]:flex">
            <Icon name="star" className="size-4 text-brand" />
            <div><div className="text-[13px] font-bold leading-none">4.92</div><div className="text-[10px] text-dim">rider rating</div></div>
          </div>
          <div className="absolute -bottom-4 -left-4 hidden items-center gap-2 rounded-2xl border border-line bg-card px-4 py-3 shadow-[0_16px_34px_rgba(0,0,0,0.35)] min-[640px]:flex">
            <Icon name="dollar" className="size-4 text-ok" />
            <div><div className="text-[13px] font-bold leading-none">KSh 3,420</div><div className="text-[10px] text-dim">earned today</div></div>
          </div>
        </div>
      </section>

      {/* ===== Portals ===== */}
      <section className="mx-auto max-w-6xl px-5 pb-16 min-[900px]:px-10">
        <div className="mb-5 text-center">
          <div className="font-display text-2xl font-bold">Continue as…</div>
          <div className="mt-1 text-[13.5px] text-dim">Pick the portal that fits what you're here to do</div>
        </div>
        <div className="flex flex-col gap-4 min-[640px]:flex-row">
          {ROLES.map(r => <Portal key={r.key} role={r} />)}
        </div>
      </section>

      {/* ===== How it works ===== */}
      <section className="mx-auto max-w-6xl px-5 pb-16 min-[900px]:px-10">
        <div className="mb-8 text-center">
          <div className="font-display text-2xl font-bold">How it works</div>
          <div className="mt-1 text-[13.5px] text-dim">From order to doorstep in three simple steps</div>
        </div>
        <div className="grid gap-5 min-[900px]:grid-cols-3">
          {STEPS.map((s, i) => (
            <div key={s.title} className="rounded-[18px] border border-line bg-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-full bg-brand-soft font-mono text-sm font-bold text-brand">{i + 1}</div>
                <Icon name={s.icon} className="size-5 text-dim" />
              </div>
              <div className="font-display text-[15px] font-bold">{s.title}</div>
              <div className="mt-1.5 text-[13px] leading-relaxed text-dim">{s.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Features ===== */}
      <section className="mx-auto max-w-6xl px-5 pb-20 min-[900px]:px-10">
        <div className="grid gap-4 min-[640px]:grid-cols-2 min-[900px]:grid-cols-4">
          {FEATURES.map(f => (
            <div key={f.title} className="rounded-[18px] border border-line bg-card p-5">
              <div className="mb-3 flex size-9 items-center justify-center rounded-[10px] bg-brand-soft text-brand">
                <Icon name={f.icon} className="size-[18px]" />
              </div>
              <div className="text-[13.5px] font-bold">{f.title}</div>
              <div className="mt-1 text-[12px] leading-relaxed text-dim">{f.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="mx-auto max-w-6xl px-5 pb-20 min-[900px]:px-10">
        <div className="glow flex flex-col items-center gap-5 rounded-[24px] border border-line p-10 text-center min-[640px]:flex-row min-[640px]:justify-between min-[640px]:text-left">
          <div>
            <div className="font-display text-2xl font-bold">Ready to move with Speedy?</div>
            <div className="mt-1.5 text-[13.5px] text-dim">Create your account in under a minute.</div>
          </div>
          <Link to="/signup"><Btn className="!px-7 !py-3.5">Get started free</Btn></Link>
        </div>
      </section>
      <Footer />
    </div>
  )
}