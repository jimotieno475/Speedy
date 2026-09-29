import Icon from '@/shared/components/Icon'
import { ROLES } from './roles'

export default function RoleTabs({ value, onChange, options = ROLES }) {
  return (
    <div className={`grid gap-2 ${options.length === 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
      {options.map(r => (
        <div key={r.key} onClick={() => onChange(r.key)}
          className={`cursor-pointer rounded-xl border px-2 py-3 text-center ${
            value === r.key ? 'border-brand/50 bg-brand-soft text-brand' : 'border-line bg-raised text-dim hover:text-ink'}`}>
          <Icon name={r.icon} className="mx-auto mb-1.5 size-[18px]" />
          <div className="text-[12px] font-semibold">{r.label}</div>
        </div>
      ))}
    </div>
  )
}
