import { useNavigate } from 'react-router-dom'
import Icon from '@/shared/components/Icon'
import RouteMap from '@/shared/components/RouteMap'
import { Btn, SectionTitle, OrderRow } from '@/shared/components/ui'
import { favourites, trackingSteps, orders, ksh } from '../data'

const stepDot = {
  done: 'bg-ok border-ok text-[#0A1730]',
  current: 'bg-brand border-brand text-[#1a0d02]',
  todo: 'bg-raised border-line text-dim',
}

export default function Home() {
  const navigate = useNavigate()
  const recent = orders.filter(o => o.status === 'past').slice(0, 2)

  return (
    <div className="grid items-start gap-5 min-[900px]:grid-cols-[1.5fr_1fr]">
      <div className="flex flex-col gap-5">
        <div>
          <SectionTitle>Order in progress</SectionTitle>
          <div className="rounded-[18px] border border-line bg-card p-5">
            <div className="mb-4 flex items-start justify-between">
              <div className="text-[12.5px] text-dim">Order <span className="font-mono text-ink">#SP-2291</span> · Northgate Kitchen</div>
              <div className="rounded-full bg-brand-soft px-2.5 py-[5px] font-mono text-xs font-bold text-brand">ETA 8 min</div>
            </div>

            <RouteMap />

            <div className="relative mb-1.5 flex justify-between before:absolute before:left-[5%] before:right-[5%] before:top-[13px] before:h-0.5 before:bg-line before:content-['']">
              {trackingSteps.map(s => (
                <div key={s.label} className="relative z-[1] flex flex-1 flex-col items-center gap-2">
                  <div className={`flex size-[26px] items-center justify-center rounded-full border-2 ${stepDot[s.state]}`}>
                    <Icon name={s.state === 'done' ? 'check' : s.label === 'On the way' ? 'bike' : 'box'} className="size-[13px]" />
                  </div>
                  <div className={`text-center text-[10px] ${s.state === 'todo' ? 'text-dim' : 'font-semibold text-ink'}`}>{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-[18px] flex gap-2.5">
              <Btn variant="ghost" className="flex-1">Message rider</Btn>
              <Btn className="flex-1">Call rider</Btn>
            </div>
          </div>
        </div>

        <div>
          <SectionTitle>Order again</SectionTitle>
          <div className="flex gap-3 overflow-x-auto pb-1">
            {favourites.map(f => (
              <div key={f.code} className="w-[130px] shrink-0 cursor-pointer rounded-[14px] border border-line bg-card p-3 hover:border-raised">
                <div className="mb-2 flex h-14 w-full items-center justify-center rounded-[10px] bg-raised font-display text-base font-bold text-brand">{f.code}</div>
                <div className="text-[12.5px] font-semibold">{f.name}</div>
                <div className="mt-0.5 text-[10.5px] text-dim">{f.meta}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div>
          <SectionTitle>Promo</SectionTitle>
          <div className="glow rounded-[18px] border border-line p-5">
            <div className="font-display text-[17px] font-bold">Free delivery this week</div>
            <div className="mt-1 text-[12.5px] text-dim">On orders over KSh 800 within Nairobi</div>
            <div className="mt-3 inline-block rounded-lg bg-brand-soft px-3 py-1.5 font-mono text-xs font-bold text-brand">FREEDROP</div>
          </div>
        </div>

        <div>
          <SectionTitle link="See all" onLink={() => navigate('/customer/orders')}>Recent orders</SectionTitle>
          {recent.map(o => (
            <OrderRow key={o.id} badge="done" name={o.name} meta={o.meta} total={ksh(o.total)} status={o.label} />
          ))}
        </div>
      </div>
    </div>
  )
}
