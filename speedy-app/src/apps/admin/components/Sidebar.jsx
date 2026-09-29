import { NavLink } from 'react-router-dom'
import Icon from '@/shared/components/Icon'
import ThemeButton from '@/shared/components/ThemeButton'
import { Avatar } from '@/shared/components/ui'
import { useAdmin } from '../AdminContext'
import { admin, nav } from '../data'

export function useBadges() {
  const { complaints } = useAdmin()
  return { complaints: complaints.filter(c => c.status === 'open').length }
}

export default function Sidebar({ theme, onToggleTheme }) {
  const badges = useBadges()
  return (
    <aside className="hidden w-[250px] shrink-0 flex-col border-r border-line bg-panel px-4 py-[22px] min-[900px]:flex">
      <div className="flex items-baseline gap-[7px] px-2 pb-6 font-display text-[21px] font-bold tracking-tight">
        <span>speedy</span><span className="text-brand">admin</span>
      </div>

      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto">
        {nav.map(n => (
          <NavLink key={n.to} to={n.to} end={n.end}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-3 py-[11px] text-sm font-medium ${
                isActive ? 'bg-brand-soft text-brand' : 'text-dim hover:bg-card hover:text-ink'}`}>
            <Icon name={n.icon} className="size-[19px] shrink-0" />
            <span className="flex-1">{n.label}</span>
            {n.badge && badges[n.badge] > 0 && (
              <span className="rounded-full bg-brand px-1.5 py-0.5 font-mono text-[10px] font-bold text-[#1a0d02]">{badges[n.badge]}</span>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="mt-2 flex items-center gap-2.5 rounded-xl px-2 py-2.5">
        <Avatar initials={admin.initials} />
        <div>
          <div className="text-[13px] font-semibold">{admin.name}</div>
          <div className="text-[11px] text-dim">{admin.role}</div>
        </div>
      </div>
      <ThemeButton theme={theme} onToggle={onToggleTheme} className="mt-2.5" />
    </aside>
  )
}
