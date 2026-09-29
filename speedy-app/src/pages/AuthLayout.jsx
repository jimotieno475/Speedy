import { Link, useNavigate } from 'react-router-dom'
import Icon from '@/shared/components/Icon'
import ThemeButton from '@/shared/components/ThemeButton'
import useTheme from '@/hooks/useTheme'

export function TopNav() {
  const navigate = useNavigate()
  const [theme, toggleTheme] = useTheme()
  return (
    <div className="flex items-center justify-between px-5 py-5 min-[900px]:px-10">
      <Link to="/" className="flex items-baseline gap-[7px] font-display text-xl font-bold tracking-tight">
        <span>speedy</span><span className="text-brand">.</span>
      </Link>
      <div className="flex items-center gap-3">
        <ThemeButton theme={theme} onToggle={toggleTheme} className="size-10" />
        <div onClick={() => navigate('/login')} className="hidden cursor-pointer px-3 py-2 text-[13.5px] font-semibold text-dim hover:text-ink min-[640px]:block">Log in</div>
        <div onClick={() => navigate('/signup')} className="cursor-pointer rounded-xl bg-brand px-4 py-2.5 font-display text-[13.5px] font-bold text-[#1a0d02]">Sign up</div>
      </div>
    </div>
  )
}

// Shared shell for the login & signup cards
export default function AuthLayout({ eyebrow, title, sub, children, footer }) {
  return (
    <div className="min-h-dvh overflow-y-auto bg-base text-ink">
      <TopNav />
      <div className="flex justify-center px-5 pb-16 pt-4 min-[900px]:pt-10">
        <div className="w-full max-w-[420px]">
          <div className="mb-7 text-center">
            <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.06em] text-brand">
              <Icon name="bolt" className="size-3" />{eyebrow}
            </div>
            <div className="font-display text-[26px] font-bold">{title}</div>
            <div className="mt-1.5 text-[13.5px] text-dim">{sub}</div>
          </div>

          <div className="rounded-[20px] border border-line bg-card p-6">{children}</div>

          {footer && <div className="mt-6 text-center text-[13px] text-dim">{footer}</div>}
        </div>
      </div>
    </div>
  )
}
