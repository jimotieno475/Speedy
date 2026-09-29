import { NavLink } from 'react-router-dom'
import Icon from './Icon'

export default function BottomNav({ items }) {
  return (
    <div className="fixed bottom-3.5 left-1/2 z-10 flex w-[calc(100%-32px)] max-w-[420px] -translate-x-1/2 justify-around rounded-[20px] border border-line bg-panel px-1.5 py-2.5 shadow-[0_12px_30px_rgba(0,0,0,0.4)] backdrop-blur-sm min-[900px]:hidden">
      {items.map(n => (
        <NavLink key={n.to} to={n.to} end={n.end}
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 rounded-[10px] px-2.5 py-1 text-[9.5px] ${
              isActive ? 'bg-brand-soft text-brand' : 'text-dim'}`}>
          <Icon name={n.icon} className="size-[18px]" />
          {n.short || n.label}
        </NavLink>
      ))}
    </div>
  )
}
