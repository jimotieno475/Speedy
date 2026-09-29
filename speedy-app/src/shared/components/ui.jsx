import Icon from './Icon'

export function Btn({ variant = 'primary', className = '', children, ...rest }) {
  const v = {
    primary: 'bg-brand text-[#1a0d02]',
    ghost: 'border-line bg-transparent text-ink',
    danger: 'border-bad/40 bg-transparent text-bad',
  }[variant]
  return (
    <div {...rest} className={`cursor-pointer rounded-xl border border-transparent px-[18px] py-[11px] text-center font-display text-[13.5px] font-bold ${v} ${className}`}>
      {children}
    </div>
  )
}

export function SectionTitle({ children, link, onLink }) {
  return (
    <div className="mb-3 ml-0.5 mt-1 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.08em] text-dim">
      {children}
      {link && <span onClick={onLink} className="cursor-pointer font-semibold normal-case tracking-normal text-brand">{link}</span>}
    </div>
  )
}

export function Avatar({ src, initials, className = 'size-9 rounded-[11px] text-[13px]', onClick }) {
  return (
    <div onClick={onClick}
      style={src ? { backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
      className={`flex shrink-0 items-center justify-center bg-linear-to-br from-brand to-[#ffab6e] font-display font-bold text-[#1a0d02] ${onClick ? 'cursor-pointer' : ''} ${className}`}>
      {!src && initials}
    </div>
  )
}

const BADGE = {
  active: 'bg-raised text-brand',
  done: 'bg-ok/15 text-ok',
  cancelled: 'bg-bad/15 text-bad',
}
const BADGE_ICON = { active: 'bike', done: 'check', cancelled: 'x' }

// Shared row used for orders and transactions
export function OrderRow({ badge = 'done', name, meta, total, totalClass = '', status }) {
  return (
    <div className="mb-2 flex items-center gap-3 rounded-[14px] border border-line bg-card px-3.5 py-[13px]">
      <div className={`flex size-9 shrink-0 items-center justify-center rounded-[10px] ${BADGE[badge]}`}>
        <Icon name={BADGE_ICON[badge]} className="size-4" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-[13px] font-semibold">{name}</div>
        <div className="mt-0.5 text-[11px] text-dim">{meta}</div>
      </div>
      <div className="shrink-0 text-right">
        <div className={`font-mono text-[13.5px] font-bold ${totalClass}`}>{total}</div>
        {status && <div className="mt-0.5 text-[9.5px] uppercase tracking-[0.05em] text-dim">{status}</div>}
      </div>
    </div>
  )
}

export function AddTile({ children, className = 'p-6' }) {
  return (
    <div className={`flex cursor-pointer items-center justify-center gap-2 rounded-[18px] border-[1.5px] border-dashed border-line text-[13px] font-semibold text-dim hover:border-brand hover:text-brand ${className}`}>
      <Icon name="plus" className="size-4" />
      {children}
    </div>
  )
}
