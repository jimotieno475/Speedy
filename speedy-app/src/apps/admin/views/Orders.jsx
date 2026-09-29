import { useState } from 'react'
import { Btn } from '@/shared/components/ui'
import Table from '../components/Table'
import { Pills, SearchInput, Toolbar, StatusPill, Select } from '../components/ui'
import { useAdmin } from '../AdminContext'
import { ksh } from '../utils'

const FILTERS = [['all', 'All'], ['placed', 'Placed'], ['preparing', 'Preparing'], ['on_way', 'On the way'], ['delivered', 'Delivered'], ['cancelled', 'Cancelled']]

export default function Orders() {
  const { orders, customers, riders, assignRider, cancelOrder } = useAdmin()
  const [filter, setFilter] = useState('all')
  const [q, setQ] = useState('')

  const name = id => customers.find(c => c.id === id)?.name ?? '—'
  const available = riders.filter(r => r.status === 'active' && r.online)

  const rows = orders.filter(o =>
    (filter === 'all' || o.status === filter) &&
    `${o.id} ${name(o.customerId)} ${o.restaurant}`.toLowerCase().includes(q.toLowerCase()))

  const columns = [
    { key: 'id', label: 'Order', render: o => <span className="font-mono font-semibold">{o.id}</span> },
    { key: 'customer', label: 'Customer', render: o => <><div className="font-medium">{name(o.customerId)}</div><div className="text-[11px] text-dim">{o.time}</div></> },
    { key: 'restaurant', label: 'Restaurant' },
    { key: 'rider', label: 'Rider', render: o => {
      if (o.riderId) return riders.find(r => r.id === o.riderId)?.name
      if (['placed', 'preparing'].includes(o.status))
        return (
          <Select value="" onChange={e => assignRider(o.id, e.target.value)}>
            <option value="" disabled>Assign rider…</option>
            {available.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
          </Select>
        )
      return <span className="text-dim">—</span>
    } },
    { key: 'total', label: 'Total', render: o => <span className="font-mono font-bold">{ksh(o.total)}</span> },
    { key: 'status', label: 'Status', render: o => <StatusPill status={o.status} /> },
    { key: 'action', label: '', render: o => ['placed', 'preparing', 'on_way'].includes(o.status) &&
      <Btn variant="danger" onClick={() => cancelOrder(o.id)} className="!px-3 !py-1.5 !text-xs">Cancel</Btn> },
  ]

  return (
    <>
      <Toolbar>
        <Pills options={FILTERS} value={filter} onChange={setFilter} />
        <SearchInput value={q} onChange={setQ} placeholder="Search order, customer…" />
      </Toolbar>
      <Table columns={columns} rows={rows} empty="No orders match" />
    </>
  )
}
