import Icon from '@/shared/components/Icon'
import { Avatar } from '@/shared/components/ui'
import { STATUS, initials } from '../utils'

const TONE = {
  ok: 'bg-ok/15 text-ok', brand: 'bg-brand-soft text-brand',
  bad: 'bg-bad/15 text-bad', dim: 'bg-raised text-dim',
}

export function StatusPill({ status }) {
  const [tone, label] = STATUS[status]
  return <span className={`inline-block whitespace-nowrap rounded-full px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.04em] ${TONE[tone]}`}>{label}</span>
}

export const Card = ({ className = '', children }) => (
  <div className={`rounded-[18px] border border-line bg-card p-5 ${className}`}>{children}</div>
)

export function Kpi({ label, value, note, accent }) {
  return (
    <Card>
      <div className="mb-2 text-[11px] uppercase tracking-[0.08em] text-dim">{label}</div>
      <div className={`font-display text-2xl font-bold ${accent ? 'text-brand' : ''}`}>{value}</div>
      {note && <div className="mt-1.5 text-[11.5px] text-dim">{note}</div>}
    </Card>
  )
}

export function Pills({ options, value, onChange }) {
  return (
    <div className="flex gap-2 overflow-x-auto">
      {options.map(([key, label, count]) => (
        <div key={key} onClick={() => onChange(key)}
          className={`cursor-pointer whitespace-nowrap rounded-full border px-4 py-2 text-[12.5px] ${
            value === key ? 'border-brand/40 bg-brand-soft font-semibold text-brand' : 'border-line bg-card text-dim'}`}>
          {label}{count !== undefined && <span className="ml-1.5 opacity-70">{count}</span>}
        </div>
      ))}
    </div>
  )
}

export function SearchInput({ value, onChange, placeholder }) {
  return (
    <div className="flex min-w-[220px] items-center gap-2 rounded-xl border border-line bg-card px-3.5 py-2.5 text-dim">
      <Icon name="search" className="size-4" />
      <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        className="w-full bg-transparent text-[13px] text-ink outline-none placeholder:text-dim" />
    </div>
  )
}

export const Toolbar = ({ children }) => (
  <div className="mb-4 flex flex-wrap items-center justify-between gap-3">{children}</div>
)

export const Select = props => (
  <select {...props} onClick={e => e.stopPropagation()}
    className="rounded-lg border border-line bg-raised px-2 py-1.5 text-xs text-ink outline-none" />
)

export const Field = ({ label, ...props }) => (
  <label className="block">
    <div className="mb-1.5 text-[11px] uppercase tracking-[0.06em] text-dim">{label}</div>
    <input {...props} className="w-full rounded-xl border border-line bg-raised px-3.5 py-2.5 text-[13px] text-ink outline-none focus:border-brand/60" />
  </label>
)

export const PersonCell = ({ name, sub }) => (
  <div className="flex items-center gap-2.5">
    <Avatar initials={initials(name)} className="size-8 rounded-[10px] text-[11px]" />
    <div>
      <div className="font-semibold">{name}</div>
      {sub && <div className="text-[11px] text-dim">{sub}</div>}
    </div>
  </div>
)

export const DetailRows = ({ rows }) => (
  <div className="rounded-[14px] border border-line bg-card px-4 py-1">
    {rows.map(([k, v]) => (
      <div key={k} className="flex items-center justify-between border-b border-line py-3 text-[13px] last:border-b-0">
        <span className="text-dim">{k}</span><span className="font-medium">{v}</span>
      </div>
    ))}
  </div>
)
