import { Btn, SectionTitle } from '@/shared/components/ui'
import { payout, weekly, breakdown, ksh } from '../data'

export default function Earnings() {
  return (
    <div className="grid items-start gap-5 min-[900px]:grid-cols-2">
      <div className="glow col-span-full rounded-[18px] border border-line p-6">
        <div className="mb-2.5 text-[11.5px] uppercase tracking-[0.08em] text-dim">Available for payout</div>
        <div className="font-display text-[38px] font-bold">{ksh(payout.available)}</div>
        <div className="mt-[18px] flex items-center justify-between">
          <div className="text-xs text-dim">{payout.note}</div>
          <Btn>Cash out</Btn>
        </div>
      </div>

      <div>
        <SectionTitle>Last 7 days</SectionTitle>
        <div className="flex h-[150px] items-end gap-3 rounded-[18px] border border-line bg-card p-5">
          {weekly.map(d => (
            <div key={d.day} className="flex h-full flex-1 flex-col items-center justify-end gap-1.5">
              <div style={{ height: `${d.pct}%` }}
                className={`w-full max-w-7 rounded-t-md rounded-b-[2px] ${d.today ? 'bg-brand' : 'bg-raised'}`} />
              <div className="text-[10px] text-dim">{d.day}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <SectionTitle>Breakdown</SectionTitle>
        <div className="rounded-[18px] border border-line bg-card px-5 py-2">
          {breakdown.map(b => (
            <div key={b.label} className="flex items-center justify-between border-b border-line py-[13px] last:border-b-0">
              <div className="text-[13.5px] text-dim">{b.label}</div>
              <div className={`font-mono text-sm font-semibold ${b.negative ? 'text-bad' : ''}`}>
                {b.negative ? '− ' : ''}{ksh(b.amount)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
