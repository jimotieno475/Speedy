import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from './Icon'
import { Avatar } from './ui'

function IconBtn({ icon, onClick, alert = true }) {
  return (
    <div onClick={onClick} className="relative flex size-[38px] cursor-pointer items-center justify-center rounded-xl border border-line bg-card text-dim">
      {alert && <span className="absolute right-[7px] top-[7px] size-1.5 rounded-full bg-brand ring-2 ring-card" />}
      <Icon name={icon} className="size-[17px]" />
    </div>
  )
}

export default function TopBar({ title, sub, avatar, initials, messages, profilePath, panelTitle = 'Messages' }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const close = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [])

  return (
    <div className="flex shrink-0 items-center justify-between border-b border-line px-4 py-[18px] min-[900px]:px-8 min-[900px]:py-[22px]">
      <div>
        <div className="font-display text-[23px] font-bold">{title}</div>
        <div className="mt-0.5 text-[13px] text-dim">{sub}</div>
      </div>

      <div className="relative flex items-center gap-3" ref={ref}>
        <IconBtn icon="chat" onClick={() => setOpen(o => !o)} />
        {open && (
          <div className="absolute right-0 top-[50px] z-40 w-[290px] rounded-2xl border border-line bg-card p-3.5 shadow-[0_16px_34px_rgba(0,0,0,0.4)]">
            <div className="mb-2.5 font-display text-sm font-bold">{panelTitle}</div>
            {messages.map(m => (
              <div key={m.from} className="flex cursor-pointer gap-2.5 rounded-[10px] px-1.5 py-[9px] hover:bg-raised">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-[9px] bg-raised font-display text-[11px] font-bold">{m.initials}</div>
                <div className="min-w-0 flex-1">
                  <div className="text-[12.5px] font-semibold">{m.from}</div>
                  <div className="truncate text-[11.5px] text-dim">{m.text}</div>
                </div>
                <div className="shrink-0 text-[10px] text-dim">{m.time}</div>
              </div>
            ))}
          </div>
        )}
        <IconBtn icon="bell" />
        <Avatar src={avatar} initials={initials} onClick={() => navigate(profilePath)} />
      </div>
    </div>
  )
}
