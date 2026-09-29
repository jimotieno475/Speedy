import { useState } from 'react'
import { Btn } from '@/shared/components/ui'
import Table from '../components/Table'
import Drawer from '../components/Drawer'
import { Pills, SearchInput, Toolbar, StatusPill, PersonCell, DetailRows } from '../components/ui'
import { useAdmin } from '../AdminContext'
import { ksh } from '../utils'

export default function Customers() {
  const { customers, complaints, setCustomerStatus, creditCustomer } = useAdmin()
  const [filter, setFilter] = useState('all')
  const [q, setQ] = useState('')
  const [selId, setSelId] = useState(null)

  const filters = [['all', 'All', customers.length], ['active', 'Active', customers.filter(c => c.status === 'active').length], ['blocked', 'Blocked', customers.filter(c => c.status === 'blocked').length]]
  const rows = customers.filter(c =>
    (filter === 'all' || c.status === filter) && `${c.name} ${c.id} ${c.phone} ${c.email}`.toLowerCase().includes(q.toLowerCase()))
  const sel = customers.find(c => c.id === selId)

  const columns = [
    { key: 'name', label: 'Customer', render: c => <PersonCell name={c.name} sub={c.id} /> },
    { key: 'phone', label: 'Contact', render: c => <><div>{c.phone}</div><div className="text-[11px] text-dim">{c.email}</div></> },
    { key: 'orders', label: 'Orders', render: c => <span className="font-mono">{c.orders}</span> },
    { key: 'spent', label: 'Total spent', render: c => <span className="font-mono">{ksh(c.spent)}</span> },
    { key: 'wallet', label: 'Wallet', render: c => <span className="font-mono">{ksh(c.wallet)}</span> },
    { key: 'status', label: 'Status', render: c => <StatusPill status={c.status} /> },
  ]

  return (
    <>
      <Toolbar>
        <Pills options={filters} value={filter} onChange={setFilter} />
        <SearchInput value={q} onChange={setQ} placeholder="Search name, phone, email…" />
      </Toolbar>
      <Table columns={columns} rows={rows} onRowClick={c => setSelId(c.id)} empty="No customers match" />

      <Drawer open={!!sel} title="Customer details" onClose={() => setSelId(null)}>
        {sel && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <PersonCell name={sel.name} sub={sel.id} />
              <StatusPill status={sel.status} />
            </div>
            <DetailRows rows={[
              ['Phone', sel.phone], ['Email', sel.email], ['Joined', sel.joined],
              ['Orders', sel.orders], ['Total spent', ksh(sel.spent)], ['Wallet balance', ksh(sel.wallet)],
              ['Complaints filed', complaints.filter(c => c.customerId === sel.id).length],
            ]} />
            <div className="flex gap-2.5">
              <Btn variant="ghost" className="flex-1" onClick={() => creditCustomer(sel.id, 200)}>Credit KSh 200</Btn>
              {sel.status === 'active'
                ? <Btn variant="danger" className="flex-1" onClick={() => setCustomerStatus(sel.id, 'blocked')}>Block account</Btn>
                : <Btn className="flex-1" onClick={() => setCustomerStatus(sel.id, 'active')}>Unblock</Btn>}
            </div>
          </div>
        )}
      </Drawer>
    </>
  )
}
