import { useState } from 'react'
import Icon from '@/shared/components/Icon'

export function TextField({ label, icon, type = 'text', ...rest }) {
  return (
    <label className="block">
      <div className="mb-1.5 text-[12px] font-medium text-dim">{label}</div>
      <div className="flex items-center gap-2.5 rounded-xl border border-line bg-raised px-3.5 py-3 focus-within:border-brand/60">
        {icon && <Icon name={icon} className="size-4 shrink-0 text-dim" />}
        <input type={type} {...rest} className="w-full bg-transparent text-[14px] text-ink outline-none placeholder:text-dim" />
      </div>
    </label>
  )
}

export function PasswordField({ label = 'Password', ...rest }) {
  const [show, setShow] = useState(false)
  return (
    <label className="block">
      <div className="mb-1.5 text-[12px] font-medium text-dim">{label}</div>
      <div className="flex items-center gap-2.5 rounded-xl border border-line bg-raised px-3.5 py-3 focus-within:border-brand/60">
        <Icon name="lock" className="size-4 shrink-0 text-dim" />
        <input type={show ? 'text' : 'password'} {...rest} className="w-full bg-transparent text-[14px] text-ink outline-none placeholder:text-dim" />
        <Icon name={show ? 'eyeOff' : 'eye'} onClick={() => setShow(s => !s)} className="size-4 shrink-0 cursor-pointer text-dim" />
      </div>
    </label>
  )
}
