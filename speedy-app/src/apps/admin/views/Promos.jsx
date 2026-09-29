import { useState } from 'react'
import { Btn, SectionTitle } from '@/shared/components/ui'
import Toggle from '@/shared/components/Toggle'
import { Card, Field } from '../components/ui'
import { useAdmin } from '../AdminContext'
import { ksh } from '../utils'

export default function Promos() {
  const { promos, addPromo, togglePromo, toast } = useAdmin()
  const [f, setF] = useState({ code: '', desc: '', min: '' })
  const set = k => e => setF({ ...f, [k]: e.target.value })

  const create = () => {
    const code = f.code.trim().toUpperCase()
    if (!code || !f.desc.trim()) return toast('Add a code and description')
    if (promos.some(p => p.code === code)) return toast('That code already exists')
    addPromo({ code, desc: f.desc.trim(), min: Number(f.min) || 0 })
    setF({ code: '', desc: '', min: '' })
  }

  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionTitle>New promo</SectionTitle>
        <Card>
          <div className="grid gap-3.5 min-[900px]:grid-cols-[1fr_2fr_1fr_auto] min-[900px]:items-end">
            <Field label="Code" value={f.code} onChange={set('code')} placeholder="SUPER50" />
            <Field label="Description" value={f.desc} onChange={set('desc')} placeholder="KSh 50 off any order" />
            <Field label="Min order (KSh)" type="number" value={f.min} onChange={set('min')} placeholder="500" />
            <Btn onClick={create}>Create</Btn>
          </div>
        </Card>
      </div>

      <div>
        <SectionTitle>Active & past promos</SectionTitle>
        <div className="grid gap-4 min-[900px]:grid-cols-2">
          {promos.map(p => (
            <div key={p.code} className={`glow rounded-[18px] border border-line p-5 ${p.active ? '' : 'opacity-60'}`}>
              <div className="flex items-start justify-between">
                <div className="rounded-lg bg-brand-soft px-3 py-1.5 font-mono text-xs font-bold text-brand">{p.code}</div>
                <Toggle on={p.active} onClick={() => togglePromo(p.code)} />
              </div>
              <div className="mt-3 font-display text-base font-bold">{p.desc}</div>
              <div className="mt-1 text-xs text-dim">Min order {ksh(p.min)} · Used {p.uses.toLocaleString()} times</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
