import { useNavigate } from 'react-router-dom'
import Icon from '@/shared/components/Icon'
import { SectionTitle } from '@/shared/components/ui'
import { Card, Kpi, StatusPill } from '../components/ui'
import { useAdmin } from '../AdminContext'
import { weeklyOrders } from '../data'
import { ksh } from '../utils'

export default function Dashboard() {
  const { orders, riders, complaints, payouts, customers } = useAdmin()
  const navigate = useNavigate()

  const revenue = orders.filter(o => o.status === 'delivered').reduce((s, o) => s + o.total, 0)
  const activeRiders = riders.filter(r => r.status === 'active')
  const online = activeRiders.filter(r => r.online).length
  const openComplaints = complaints.filter(c => c.status === 'open')
  const max = Math.max(...weeklyOrders.map(d => d.v))

  const attention = [
    { label: 'Rider applications to review', n: riders.filter(r => r.status === 'pending').length, to: '/admin/riders' },
    { label: 'Open complaints', n: openComplaints.length, to: '/admin/complaints' },
    { label: 'Payout requests pending', n: payouts.filter(p => p.status === 'pending').length, to: '/admin/payouts' },
    { label: 'Orders without a rider', n: orders.filter(o => !o.riderId && ['placed', 'preparing'].includes(o.status)).length, to: '/admin/orders' },
  ]
  const topRiders = [...riders].sort((a, b) => b.deliveries - a.deliveries).slice(0, 4)

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-3.5 min-[900px]:grid-cols-4">
        <Kpi label="Orders today" value={orders.length} note="↑ 12% vs yesterday" />
        <Kpi label="Revenue (delivered)" value={ksh(revenue)} accent />
        <Kpi label="Riders online" value={`${online}/${activeRiders.length}`} note="active fleet" />
        <Kpi label="Open complaints" value={openComplaints.length} note={`${customers.length} customers`} />
      </div>

      <div className="grid items-start gap-5 min-[900px]:grid-cols-[1.5fr_1fr]">
        <div className="flex flex-col gap-5">
          <div>
            <SectionTitle>Orders — last 7 days</SectionTitle>
            <div className="flex h-[190px] items-end gap-3 rounded-[18px] border border-line bg-card p-5">
              {weeklyOrders.map(d => (
                <div key={d.day} className="flex h-full flex-1 flex-col items-center justify-end gap-1.5">
                  <div className="font-mono text-[10px] text-dim">{d.v}</div>
                  <div style={{ height: `${(d.v / max) * 78}%` }}
                    className={`w-full max-w-9 rounded-t-md rounded-b-[2px] ${d.today ? 'bg-brand' : 'bg-raised'}`} />
                  <div className="text-[10px] text-dim">{d.day}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionTitle link="See all" onLink={() => navigate('/admin/orders')}>Recent orders</SectionTitle>
            {orders.slice(0, 5).map(o => (
              <div key={o.id} className="mb-2 flex items-center gap-3 rounded-[14px] border border-line bg-card px-3.5 py-3">
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[13px] font-semibold">{o.restaurant}</div>
                  <div className="mt-0.5 text-[11px] text-dim"><span className="font-mono">{o.id}</span> · {o.time}</div>
                </div>
                <div className="font-mono text-[13px] font-bold">{ksh(o.total)}</div>
                <StatusPill status={o.status} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <SectionTitle>Needs attention</SectionTitle>
            {attention.map(a => (
              <div key={a.label} onClick={() => navigate(a.to)}
                className="mb-2 flex cursor-pointer items-center gap-3 rounded-[14px] border border-line bg-card p-3.5 hover:border-raised">
                <div className={`flex size-8 items-center justify-center rounded-[10px] font-mono text-[13px] font-bold ${a.n ? 'bg-brand-soft text-brand' : 'bg-raised text-dim'}`}>{a.n}</div>
                <div className="flex-1 text-[13px] font-medium">{a.label}</div>
                <Icon name="chevron" className="size-3.5 text-dim" />
              </div>
            ))}
          </div>

          <div>
            <SectionTitle link="Manage" onLink={() => navigate('/admin/riders')}>Top riders</SectionTitle>
            <Card className="!py-2">
              {topRiders.map((r, i) => (
                <div key={r.id} className="flex items-center gap-3 border-b border-line py-3 last:border-b-0">
                  <div className="w-4 font-mono text-xs text-dim">{i + 1}</div>
                  <div className="flex-1">
                    <div className="text-[13px] font-semibold">{r.name}</div>
                    <div className="text-[11px] text-dim">{r.zone} · ★ {r.rating}</div>
                  </div>
                  <div className="font-mono text-[13px] font-bold">{r.deliveries.toLocaleString()}</div>
                </div>
              ))}
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
