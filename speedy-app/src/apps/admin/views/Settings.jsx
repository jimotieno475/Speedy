import { useState } from 'react'
import { Btn, SectionTitle } from '@/shared/components/ui'
import Toggle from '@/shared/components/Toggle'
import { Card, Field } from '../components/ui'
import { useAdmin } from '../AdminContext'

const Row = ({ title, desc, on, onClick }) => (
  <div className="flex items-center justify-between gap-4 border-b border-line py-3.5 last:border-b-0">
    <div>
      <div className="text-[13.5px] font-medium">{title}</div>
      <div className="text-[11.5px] text-dim">{desc}</div>
    </div>
    <Toggle on={on} onClick={onClick} />
  </div>
)

export default function Settings() {
  const { settings, saveSettings } = useAdmin()
  const [s, setS] = useState(settings)
  const text = k => e => setS({ ...s, [k]: e.target.value })
  const num = k => e => setS({ ...s, [k]: Number(e.target.value) })
  const flip = k => () => setS({ ...s, [k]: !s[k] })

  return (
    <div className="grid items-start gap-5 min-[900px]:grid-cols-2">
      <div>
        <SectionTitle>Pricing</SectionTitle>
        <Card className="grid gap-3.5">
          <Field label="Base delivery fee (KSh)" type="number" value={s.baseFee} onChange={num('baseFee')} />
          <Field label="Per-kilometre rate (KSh)" type="number" value={s.perKm} onChange={num('perKm')} />
          <Field label="Platform commission (%)" type="number" value={s.commission} onChange={num('commission')} />
        </Card>
      </div>

      <div>
        <SectionTitle>Operations</SectionTitle>
        <Card className="!py-2">
          <Row title="Auto-assign riders" desc="Match new orders to the nearest online rider" on={s.autoAssign} onClick={flip('autoAssign')} />
          <Row title="Peak-hour bonus" desc="Extra pay for riders during lunch and dinner rush" on={s.peakBonus} onClick={flip('peakBonus')} />
          <Row title="Maintenance mode" desc="Temporarily stop accepting new orders" on={s.maintenance} onClick={flip('maintenance')} />
        </Card>
      </div>

      <div className="min-[900px]:col-span-full">
        <SectionTitle>Support contacts</SectionTitle>
        <Card className="grid gap-3.5 min-[900px]:grid-cols-2">
          <Field label="Support phone" value={s.supportPhone} onChange={text('supportPhone')} />
          <Field label="Support email" value={s.supportEmail} onChange={text('supportEmail')} />
        </Card>
      </div>

      <div className="flex gap-2.5 min-[900px]:col-span-full">
        <Btn onClick={() => saveSettings(s)}>Save changes</Btn>
        <Btn variant="ghost" onClick={() => setS(settings)}>Reset</Btn>
      </div>
    </div>
  )
}
