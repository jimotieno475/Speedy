import { Btn } from '@/shared/components/ui'
import Table from '../components/Table'
import { Kpi, StatusPill, PersonCell } from '../components/ui'
import { useAdmin } from '../AdminContext'
import { ksh } from '../utils'

export default function Payouts() {
  const { payouts, riders, decidePayout } = useAdmin()
  const pending = payouts.filter(p => p.status === 'pending')
  const rider = id => riders.find(r => r.id === id)

  const columns = [
    { key: 'id', label: 'Request', render: p => <span className="font-mono">{p.id}</span> },
    { key: 'rider', label: 'Rider', render: p => <PersonCell name={rider(p.riderId).name} sub={p.riderId} /> },
    { key: 'amount', label: 'Amount', render: p => <span className="font-mono font-bold">{ksh(p.amount)}</span> },
    { key: 'method', label: 'Method' },
    { key: 'requested', label: 'Requested' },
    { key: 'status', label: 'Status', render: p => <StatusPill status={p.status} /> },
    { key: 'action', label: '', render: p => p.status === 'pending' && (
      <div className="flex gap-2">
        <Btn className="!px-3 !py-1.5 !text-xs" onClick={() => decidePayout(p.id, 'approved')}>Approve</Btn>
        <Btn variant="danger" className="!px-3 !py-1.5 !text-xs" onClick={() => decidePayout(p.id, 'rejected')}>Reject</Btn>
      </div>) },
  ]

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-3.5 min-[900px]:grid-cols-3">
        <Kpi label="Pending requests" value={pending.length} />
        <Kpi label="Pending amount" value={ksh(pending.reduce((s, p) => s + p.amount, 0))} accent />
        <Kpi label="Approved this week" value={ksh(payouts.filter(p => p.status === 'approved').reduce((s, p) => s + p.amount, 0))} />
      </div>
      <Table columns={columns} rows={payouts} />
    </div>
  )
}
