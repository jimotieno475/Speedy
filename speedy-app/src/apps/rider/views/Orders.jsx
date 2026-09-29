import { useState } from 'react'
import { SectionTitle } from '@/shared/components/ui'
import QueueRow from '../components/QueueRow'
import { jobs } from '../data'

const COLUMNS = [
  ['queued', 'Queued'], ['done', 'Delivered today'], ['cancelled', 'Cancelled'],
]
const FILTERS = [['all', 'All'], ['queued', 'Queued'], ['done', 'Delivered'], ['cancelled', 'Cancelled']]

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
        {COLUMNS.filter(([key]) => filter === 'all' || filter === key).map(([key, title]) => (
          <div key={key}>
            <SectionTitle>{title}</SectionTitle>
            {jobs.filter(j => j.status === key).map(j => <QueueRow key={j.id} job={j} showStatus />)}
          </div>
        ))}
      </div>
    </>
  )
}
