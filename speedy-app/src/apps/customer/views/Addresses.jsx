import Icon from '@/shared/components/Icon'
import { Btn, AddTile } from '@/shared/components/ui'
import { addresses } from '../data'

export default function Addresses() {
  return (
    <div className="grid gap-4 min-[900px]:grid-cols-2">
      {addresses.map(a => (
        <div key={a.label} className="rounded-[18px] border border-line bg-card p-[18px]">
          <div className="mb-2.5 flex items-center gap-2.5">
            <div className="flex size-[34px] shrink-0 items-center justify-center rounded-[10px] bg-brand-soft text-brand">
              <Icon name={a.icon} className="size-4" />
            </div>
            <div>
              <div className="font-display text-sm font-bold">{a.label}</div>
              {a.isDefault && <div className="text-[9.5px] font-bold uppercase tracking-[0.05em] text-ok">Default</div>}
            </div>
          </div>
          <div className="mb-3.5 text-[13px] leading-normal text-dim">
            {a.lines.map(l => <div key={l}>{l}</div>)}
          </div>
          <div className="flex gap-2">
            <Btn variant="ghost" className="flex-1 !p-2 !text-xs">Edit</Btn>
            <Btn variant="ghost" className="flex-1 !p-2 !text-xs">Remove</Btn>
          </div>
        </div>
      ))}
      <AddTile>Add new address</AddTile>
    </div>
  )
}
