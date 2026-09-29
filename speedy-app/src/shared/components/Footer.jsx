import { Link } from 'react-router-dom'
import Icon from './Icon'

const COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'Order as a customer', to: '/signup?role=customer' },
      { label: 'Ride with Speedy', to: '/signup?role=rider' },
      { label: 'Log in', to: '/login' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', to: '/about' },
      { label: 'Careers', to: '/careers' },
      { label: 'Blog', to: '/blog' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help centre', to: '/help' },
      { label: 'Safety', to: '/safety' },
      { label: 'Contact us', to: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of service', to: '/terms' },
      { label: 'Privacy policy', to: '/privacy' },
      { label: 'Cookie policy', to: '/cookies' },
    ],
  },
]

// Generic monogram badges — deliberately not brand logos, just initials
const SOCIALS = ['X', 'IG', 'FB', 'IN']

function Footer() {
  return (
    <footer className="border-t border-line bg-panel">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-14 min-[900px]:px-10">
        <div className="grid gap-10 min-[640px]:grid-cols-2 min-[900px]:grid-cols-[1.3fr_repeat(4,1fr)]">
          {/* Brand column */}
          <div>
            <Link to="/" className="flex items-baseline gap-[7px] font-display text-xl font-bold tracking-tight">
              <span>speedy</span><span className="text-brand">.</span>
            </Link>
            <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-dim">
              Fast, reliable delivery connecting customers and riders across Nairobi.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              <a
                href="tel:0800123456"
                className="flex items-center gap-2 rounded-full border border-line bg-card px-3 py-2 text-[12px] font-medium text-dim hover:text-ink"
              >
                <Icon name="phone" className="size-3.5" />0800 123 456
              </a>
            </div>
            <div className="mt-4 flex gap-2.5">
              {SOCIALS.map(s => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="flex size-9 items-center justify-center rounded-full border border-line bg-card text-[11px] font-bold text-dim hover:border-brand/40 hover:text-brand"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map(col => (
            <div key={col.title}>
              <div className="mb-3.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-dim">{col.title}</div>
              <ul className="flex flex-col gap-2.5">
                {col.links.map(l => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-[13.5px] text-ink/80 hover:text-brand">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-3 border-t border-line pt-6 text-[12px] text-dim min-[640px]:flex-row min-[640px]:justify-between">
          <div>© 2026 Speedy. All rights reserved.</div>
          <div className="flex items-center gap-1.5">
            <Icon name="bolt" className="size-3 text-brand" />Built for Nairobi
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;