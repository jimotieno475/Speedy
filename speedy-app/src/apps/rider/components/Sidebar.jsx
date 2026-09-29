import { NavLink } from 'react-router-dom'
import Icon from '@/shared/components/Icon'
import ThemeButton from '@/shared/components/ThemeButton'
import { Avatar } from '@/shared/components/ui'
import OnlineStatus from './OnlineStatus'
import { rider, nav } from '../data'

export default function Sidebar({ avatar, online, onToggleOnline, theme, onToggleTheme }) {
  return (
    <aside className="hidden w-[250px] shrink-0 flex-col border-r border-line bg-panel px-4 py-[22px] min-[900px]:flex">
      <div className="flex items-baseline gap-[7px] px-2 pb-[30px] font-display text-[21px] font-bold tracking-tight">
        <span>speedy</span><span className="text-brand">riders</span>
      </div>

      <OnlineStatus online={online} onToggle={onToggleOnline} className="mb-2.5" />

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

      <NavLink to="/rider/profile" className="flex items-center gap-2.5 rounded-xl px-2 py-2.5 hover:bg-card">
        <Avatar src={avatar} initials={rider.initials} />
        <div>
          <div className="text-[13px] font-semibold">{rider.name}</div>
          <div className="text-[11px] text-dim">Rider · {rider.id}</div>
        </div>
      </NavLink>

      <ThemeButton theme={theme} onToggle={onToggleTheme} className="mt-2.5" />
    </aside>
  )
}
