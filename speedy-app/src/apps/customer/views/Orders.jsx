import { useState } from 'react'
import { SectionTitle, OrderRow } from '@/shared/components/ui'
import { orders, ksh } from '../data'

const FILTERS = [
  ['all', 'All'], ['active', 'Active'], ['past', 'Past'], ['cancelled', 'Cancelled'],
]
const BADGE = { active: 'active', past: 'done', cancelled: 'cancelled' }

export default function Orders() {
  const [filter, setFilter] = useState('all')

  return (
    <>
      <div className="mb-[18px] flex gap-2 overflow-x-auto">
        {FILTERS.map(([key, label]) => (
          <div key={key} onClick={() => setFilter(key)}
            className={`cursor-pointer whitespace-nowrap rounded-full border px-4 py-2 text-[12.5px] ${
              filter === key ? 'border-brand/40 bg-brand-soft font-semibold text-brand' : 'border-line bg-card text-dim'}`}>
            {label}
          </div>
        ))}
      </div>

      <div className="grid items-start gap-5 min-[900px]:grid-cols-3">
        {FILTERS.slice(1).filter(([key]) => filter === 'all' || filter === key).map(([key, label]) => (
          <div key={key}>
            <SectionTitle>{label}</SectionTitle>
            {orders.filter(o => o.status === key).map(o => (
              <OrderRow key={o.id} badge={BADGE[key]} name={o.name} meta={o.meta}
                total={ksh(o.total)} status={o.label}
                totalClass={key === 'cancelled' ? 'text-bad line-through opacity-70' : ''} />
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
