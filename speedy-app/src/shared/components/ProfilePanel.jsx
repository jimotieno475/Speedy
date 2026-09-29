import { useRef } from 'react'
import Icon from './Icon'
import { Avatar, SectionTitle } from './ui'

// rows: { Account: [{ icon, text }], Support: [...] }
export default function ProfilePanel({ avatar, onAvatarChange, initials, name, meta, chip, rows }) {
  const input = useRef(null)

  const pick = e => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = ev => onAvatarChange(ev.target.result)
    reader.readAsDataURL(file)
  }

  return (
    <div className="grid items-start gap-6 min-[900px]:grid-cols-[300px_1fr]">
      <div className="flex flex-col items-center rounded-[18px] border border-line bg-card px-5 py-8 text-center">
        <div className="relative mb-3.5 inline-block">
          <Avatar src={avatar} initials={initials} className="size-[84px] rounded-[22px] text-[28px]" />
          <div onClick={() => input.current.click()}
            className="absolute -bottom-0.5 -right-0.5 flex size-7 cursor-pointer items-center justify-center rounded-full border-[3px] border-card bg-brand text-[#1a0d02]">
            <Icon name="camera" className="size-[13px]" stroke={2.4} />
          </div>
          <input ref={input} type="file" accept="image/*" className="hidden" onChange={pick} />
        </div>
        <div className="font-display text-[19px] font-bold">{name}</div>
        <div className="mt-1 text-[12.5px] text-dim">{meta}</div>
        <div className="mt-3 inline-flex items-center gap-[5px] rounded-full bg-brand-soft px-3.5 py-1.5 text-[12.5px] font-bold text-brand">{chip}</div>
      </div>

      <div>
        {Object.entries(rows).map(([group, items]) => (
          <div key={group}>
            <SectionTitle>{group}</SectionTitle>
            {items.map(r => (
              <div key={r.text} className="mb-2 flex cursor-pointer items-center gap-3 rounded-[14px] border border-line bg-card p-[15px] text-dim hover:border-raised">
                <Icon name={r.icon} className="size-[18px] shrink-0" />
                <div className="flex-1 text-[13.5px] font-medium text-ink">{r.text}</div>
                <Icon name="chevron" className="size-3.5" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
