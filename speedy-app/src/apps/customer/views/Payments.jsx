import { Btn, SectionTitle, AddTile, OrderRow } from '@/shared/components/ui'
import { user, paymentMethods, transactions, ksh } from '../data'

export default function Payments() {
  return (
    <div className="grid items-start gap-5 min-[900px]:grid-cols-2">
      <div className="glow col-span-full rounded-[18px] border border-line p-6">
        <div className="mb-2.5 text-[11.5px] uppercase tracking-[0.08em] text-dim">Wallet balance</div>
        <div className="font-display text-[38px] font-bold">{ksh(user.wallet)}</div>
        <div className="mt-[18px] flex items-center justify-between">
          <div className="text-xs text-dim">Top up instantly via M-Pesa</div>
          <Btn>Top up</Btn>
        </div>
      </div>

      <div>
        <SectionTitle>Payment methods</SectionTitle>
        {paymentMethods.map(m => (
          <div key={m.name} className="mb-2.5 flex items-center gap-3 rounded-[14px] border border-line bg-card p-3.5">
            <div className={`flex size-[42px] shrink-0 items-center justify-center rounded-[10px] bg-raised font-display text-[11px] font-bold ${m.tone}`}>{m.logo}</div>
            <div className="flex-1">
              <div className="text-[13.5px] font-semibold">{m.name}</div>
              <div className="mt-0.5 text-[11px] text-dim">{m.meta}</div>
            </div>
            {m.isDefault && <div className="text-[9.5px] font-bold uppercase tracking-[0.05em] text-ok">Default</div>}
          </div>
        ))}
        <AddTile className="p-4">Add payment method</AddTile>
      </div>

      <div>
        <SectionTitle>Recent transactions</SectionTitle>
        {transactions.map(t => (
          <OrderRow key={t.name} badge="done" name={t.name} meta={t.meta}
            total={`${t.amount < 0 ? '−' : '+'} ${ksh(Math.abs(t.amount))}`}
            totalClass={t.amount > 0 ? 'text-ok' : ''} />
        ))}
      </div>
    </div>
  )
}
