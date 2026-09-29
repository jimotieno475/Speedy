import { useState } from 'react'
import { Btn } from '@/shared/components/ui'
import Table from '../components/Table'
import Drawer from '../components/Drawer'
import { Pills, SearchInput, Toolbar, StatusPill, PersonCell, DetailRows } from '../components/ui'
import { useAdmin } from '../AdminContext'
import { ksh } from '../utils'

export default function Riders() {
  const { riders, setRiderStatus } = useAdmin()
  const [filter, setFilter] = useState('all')
  const [q, setQ] = useState('')
  const [selId, setSelId] = useState(null)

  const count = s => riders.filter(r => r.status === s).length
  const filters = [['all', 'All', riders.length], ['active', 'Active', count('active')], ['pending', 'Pending', count('pending')], ['suspended', 'Suspended', count('suspended')]]
  const rows = riders.filter(r =>
    (filter === 'all' || r.status === filter) && `${r.name} ${r.id} ${r.zone}`.toLowerCase().includes(q.toLowerCase()))
  const sel = riders.find(r => r.id === selId)

  const columns = [
    { key: 'name', label: 'Rider', render: r => <PersonCell name={r.name} sub={r.id} /> },
    { key: 'vehicle', label: 'Vehicle', render: r => <><div>{r.vehicle}</div><div className="text-[11px] text-dim">{r.plate}</div></> },
    { key: 'zone', label: 'Zone' },
    { key: 'rating', label: 'Rating', render: r => r.rating ? `★ ${r.rating}` : '—' },
    { key: 'deliveries', label: 'Deliveries', render: r => <span className="font-mono">{r.deliveries.toLocaleString()}</span> },
    { key: 'online', label: 'Presence', render: r => (
      <span className="flex items-center gap-1.5 text-xs text-dim">
        <span className={`size-2 rounded-full ${r.online ? 'bg-ok' : 'bg-raised'}`} />{r.online ? 'Online' : 'Offline'}
      </span>) },
    { key: 'status', label: 'Status', render: r => <StatusPill status={r.status} /> },
  ]

  return (
    <>
      <Toolbar>
        <Pills options={filters} value={filter} onChange={setFilter} />
        <SearchInput value={q} onChange={setQ} placeholder="Search name, ID, zone…" />
      </Toolbar>
      <Table columns={columns} rows={rows} onRowClick={r => setSelId(r.id)} empty="No riders match" />

      <Drawer open={!!sel} title="Rider details" onClose={() => setSelId(null)}>
        {sel && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <PersonCell name={sel.name} sub={sel.id} />
              <StatusPill status={sel.status} />
            </div>
            <DetailRows rows={[
              ['Phone', sel.phone], ['Vehicle', `${sel.vehicle} · ${sel.plate}`], ['Zone', sel.zone],
              ['Joined', sel.joined], ['Rating', sel.rating ? `★ ${sel.rating}` : '—'],
              ['Deliveries', sel.deliveries.toLocaleString()], ['Available balance', ksh(sel.earnings)],
            ]} />
            <div className="flex gap-2.5">
              {sel.status === 'pending' && <>
                <Btn className="flex-1" onClick={() => setRiderStatus(sel.id, 'active')}>Approve</Btn>
                <Btn variant="danger" className="flex-1" onClick={() => setRiderStatus(sel.id, 'suspended')}>Reject</Btn>
              </>}
              {sel.status === 'active' && <Btn variant="danger" className="flex-1" onClick={() => setRiderStatus(sel.id, 'suspended')}>Suspend rider</Btn>}
              {sel.status === 'suspended' && <Btn className="flex-1" onClick={() => setRiderStatus(sel.id, 'active')}>Reactivate</Btn>}
            </div>
          </div>
        )}
      </Drawer>
    </>
  )
}
