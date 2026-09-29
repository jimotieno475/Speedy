import { NavLink } from 'react-router-dom'
import Icon from '@/shared/components/Icon'
import ThemeButton from '@/shared/components/ThemeButton'
import { Avatar } from '@/shared/components/ui'
import { user, nav, ksh } from '../data'

export default function Sidebar({ avatar, theme, onToggleTheme }) {
  return (
    <aside className="hidden w-[250px] shrink-0 flex-col border-r border-line bg-panel px-4 py-[22px] min-[900px]:flex">
      <div className="flex items-baseline gap-[7px] px-2 pb-[30px] font-display text-[21px] font-bold tracking-tight">
        <span>speedy</span><span className="text-brand">customer</span>
      </div>

      <div className="glow mb-2.5 rounded-[14px] border border-line p-3.5">
        <div className="text-[10.5px] uppercase tracking-[0.07em] text-dim">Wallet balance</div>
        <div className="mt-1.5 font-display text-[19px] font-bold">{ksh(user.wallet)}</div>
      </div>

      <nav className="flex flex-1 flex-col gap-1">
        {nav.map(n => (
          <NavLink key={n.to} to={n.to} end={n.end}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-3 py-[11px] text-sm font-medium ${
                isActive ? 'bg-brand-soft text-brand' : 'text-dim hover:bg-card hover:text-ink'}`}>
            <Icon name={n.icon} className="size-[19px] shrink-0" />
            {n.label}
          </NavLink>
        ))}
      </nav>

      <NavLink to="/customer/profile" className="flex items-center gap-2.5 rounded-xl px-2 py-2.5 hover:bg-card">
        <Avatar src={avatar} initials={user.initials} />
        <div>
          <div className="-mt-0.5 text-[13px] font-semibold">{user.name}</div>
          <div className="text-[11px] text-dim">Customer · {user.city}</div>
        </div>
      </NavLink>

      <ThemeButton theme={theme} onToggle={onToggleTheme} className="mt-2.5" />
    </aside>
  )
}
