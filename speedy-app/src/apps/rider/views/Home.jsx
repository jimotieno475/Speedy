import { useNavigate } from 'react-router-dom'
import RouteMap from '@/shared/components/RouteMap'
import { Btn, SectionTitle } from '@/shared/components/ui'
import RouteTimeline from '../components/RouteTimeline'
import QueueRow from '../components/QueueRow'
import OnlineStatus from '../components/OnlineStatus'
import { activeDelivery as d, stats, today, jobs, ksh } from '../data'

export default function Home({ online, onToggleOnline }) {
  const navigate = useNavigate()

  return (
    <div className="grid items-start gap-5 min-[900px]:grid-cols-[1.5fr_1fr]">
      <div className="flex flex-col gap-5">
        {/* The sidebar toggle is hidden on mobile, so surface it here */}
        <OnlineStatus online={online} onToggle={onToggleOnline} className="min-[900px]:hidden" />

        <div>
          <SectionTitle>Active delivery</SectionTitle>
          <div className="rounded-[18px] border border-line bg-card p-5">
            <div className="mb-4 flex items-start justify-between">
              <div className="text-[12.5px] text-dim">Order <span className="font-mono text-ink">{d.id}</span></div>
              <div className="rounded-full bg-brand-soft px-2.5 py-[5px] font-mono text-xs font-bold text-brand">ETA {d.eta}</div>
            </div>

            <RouteMap pinAt="end" />
            <RouteTimeline pickup={d.pickup} dropoff={d.dropoff} />

            <div className="mt-[18px] flex gap-2.5">
              <Btn variant="ghost" className="flex-1">Call customer</Btn>
              <Btn className="flex-1">Navigate</Btn>
            </div>
          </div>
        </div>

        <div>
          <SectionTitle>Performance</SectionTitle>
          <div className="grid grid-cols-2 gap-2.5 min-[640px]:grid-cols-4">
            {stats.map(s => (
              <div key={s.label} className="rounded-[14px] border border-line bg-card px-2 py-3.5 text-center">
                <div className="font-mono text-base font-bold">{s.val}</div>
                <div className="mt-1 text-[9.5px] uppercase tracking-[0.05em] text-dim">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div>
          <SectionTitle>Today</SectionTitle>
          <div className="flex flex-col gap-3.5">
            <div className="rounded-[18px] border border-line bg-card p-[18px]">
              <div className="mb-2 text-[11px] uppercase tracking-[0.08em] text-dim">Earnings</div>
              <div className="font-display text-2xl font-bold text-brand">{ksh(today.earnings)}</div>
              <div className="mt-1.5 text-[11.5px] text-ok">{today.delta}</div>
            </div>
            <div className="rounded-[18px] border border-line bg-card p-[18px]">
              <div className="mb-2 text-[11px] uppercase tracking-[0.08em] text-dim">Deliveries</div>
              <div className="font-display text-2xl font-bold">{today.deliveries}</div>
              <div className="mt-1.5 text-[11.5px] text-ok">{today.inQueue} in queue</div>
            </div>
          </div>
        </div>

        <div>
          <SectionTitle link="See all" onLink={() => navigate('/rider/orders')}>Up next</SectionTitle>
          {jobs.filter(j => j.status === 'queued').map(j => <QueueRow key={j.id} job={j} />)}
        </div>
      </div>
    </div>
  )
}
