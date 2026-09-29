import Icon from '@/shared/components/Icon'
import StaticLayout from './StaticLayout'

const CUSTOMER = [
  'Riders are verified with ID and background checks before their first delivery.',
  'Track your rider live on the map from pickup to your door.',
  'Every rider and every order is rated — low ratings are reviewed by our team.',
  'In-app call and chat mean you never need to share your personal number.',
]
const RIDER = [
  'Share your live location with support during every active delivery.',
  'One-tap emergency line connects you directly to the safety team.',
  'Customer addresses are verified to reduce fraudulent or unsafe drop-offs.',
  'Report an unsafe pickup or drop-off directly from the order screen.',
]

function List({ items }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map(i => (
        <li key={i} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-dim">
          <Icon name="check" className="mt-0.5 size-4 shrink-0 text-ok" />{i}
        </li>
      ))}
    </ul>
  )
}

export default function Safety() {
  return (
    <StaticLayout eyebrow="Safety" title="Safety on every side of the order" sub="Tools and checks that protect customers and riders on every single delivery.">
      <div className="grid gap-5 min-[900px]:grid-cols-2">
        <div className="rounded-[18px] border border-line bg-card p-6">
          <div className="mb-4 flex items-center gap-2.5">
            <div className="flex size-9 items-center justify-center rounded-[10px] bg-brand-soft text-brand"><Icon name="users" className="size-[18px]" /></div>
            <div className="font-display text-base font-bold">For customers</div>
          </div>
          <List items={CUSTOMER} />
        </div>
        <div className="rounded-[18px] border border-line bg-card p-6">
          <div className="mb-4 flex items-center gap-2.5">
            <div className="flex size-9 items-center justify-center rounded-[10px] bg-brand-soft text-brand"><Icon name="bike" className="size-[18px]" /></div>
            <div className="font-display text-base font-bold">For riders</div>
          </div>
          <List items={RIDER} />
        </div>
      </div>

      <div className="glow mt-8 flex flex-col items-center gap-2 rounded-[20px] border border-line p-6 text-center">
        <div className="flex items-center gap-2 font-display text-base font-bold text-bad"><Icon name="shield" className="size-5" />In an emergency</div>
        <div className="text-[13.5px] text-dim">Call our 24/7 safety line immediately: <span className="font-semibold text-ink">0800 999 000</span></div>
      </div>
    </StaticLayout>
  )
}