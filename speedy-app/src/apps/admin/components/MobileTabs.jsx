import { NavLink } from 'react-router-dom'
import Icon from '@/shared/components/Icon'
import { nav } from '../data'
import { useBadges } from './Sidebar'

export default function MobileTabs() {
  const badges = useBadges()
  return (
    <div className="mb-4 flex gap-2 overflow-x-auto pb-1 min-[900px]:hidden">
      {nav.map(n => (
        <NavLink key={n.to} to={n.to} end={n.end}
          className={({ isActive }) =>
            `flex items-center gap-1.5 whitespace-nowrap rounded-full border px-3.5 py-2 text-[12.5px] ${
              isActive ? 'border-brand/40 bg-brand-soft font-semibold text-brand' : 'border-line bg-card text-dim'}`}>
          <Icon name={n.icon} className="size-[15px]" />
          {n.label}
          {n.badge && badges[n.badge] > 0 && <span className="font-mono text-[10px] font-bold">{badges[n.badge]}</span>}
        </NavLink>
      ))}
    </div>
  )
}
