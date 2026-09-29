import { useState } from 'react'
import Icon from '@/shared/components/Icon'
import { Btn } from '@/shared/components/ui'
import { Pills, StatusPill } from '../components/ui'
import { useAdmin } from '../AdminContext'
import { CATEGORY, ksh } from '../utils'

const H = 'min-[900px]:h-[calc(100dvh-230px)]'

export default function Complaints() {
  const { complaints, customers, orders, riders, replyComplaint, setComplaintStatus, refundComplaint } = useAdmin()
  const [filter, setFilter] = useState('all')
  const [selId, setSelId] = useState(null)
  const [text, setText] = useState('')

  const count = s => complaints.filter(c => c.status === s).length
  const filters = [['all', 'All', complaints.length], ['open', 'Open', count('open')], ['in_progress', 'In progress', count('in_progress')], ['resolved', 'Resolved', count('resolved')]]
  const list = complaints.filter(c => filter === 'all' || c.status === filter)
  const sel = complaints.find(c => c.id === selId)
  const cust = sel && customers.find(c => c.id === sel.customerId)
  const order = sel && orders.find(o => o.id === sel.orderId)
  const rider = sel && riders.find(r => r.id === sel.riderId)
  const nameOf = id => customers.find(c => c.id === id)?.name

  const send = () => {
    if (!text.trim()) return
    replyComplaint(sel.id, text.trim())
    setText('')
  }

  return (
    <>
      <div className="mb-4"><Pills options={filters} value={filter} onChange={setFilter} /></div>

      <div className="grid gap-4 min-[900px]:grid-cols-[340px_1fr]">
        {/* List */}
        <div className={`overflow-y-auto ${H} ${sel ? 'hidden min-[900px]:block' : ''}`}>
          {list.map(c => (
            <div key={c.id} onClick={() => setSelId(c.id)}
              className={`mb-2 cursor-pointer rounded-[14px] border p-3.5 ${selId === c.id ? 'border-brand/50 bg-brand-soft' : 'border-line bg-card hover:border-raised'}`}>
              <div className="mb-1.5 flex items-center justify-between gap-2">
                <span className="font-mono text-[11px] text-dim">{c.id}</span>
                <StatusPill status={c.status} />
              </div>
              <div className="text-[13px] font-semibold leading-snug">{c.subject}</div>
              <div className="mt-2 flex items-center justify-between text-[11px] text-dim">
                <span>{nameOf(c.customerId)} · {c.created}</span>
                <StatusPill status={c.priority} />
              </div>
            </div>
          ))}
          {!list.length && <div className="py-10 text-center text-sm text-dim">No complaints here</div>}
        </div>

        {/* Thread */}
        <div className={`flex flex-col overflow-hidden rounded-[18px] border border-line bg-card ${H} ${sel ? 'h-[calc(100dvh-260px)]' : 'hidden min-[900px]:flex'}`}>
          {!sel ? (
            <div className="grid flex-1 place-items-center text-sm text-dim">Select a complaint to view the conversation</div>
          ) : (
            <>
              <div className="border-b border-line p-4">
                <div className="flex items-start gap-3">
                  <div onClick={() => setSelId(null)} className="mt-0.5 cursor-pointer text-dim min-[900px]:hidden"><Icon name="back" /></div>
                  <div className="flex-1">
                    <div className="font-display text-[15px] font-bold leading-snug">{sel.subject}</div>
                    <div className="mt-1 text-[11.5px] text-dim">
                      {cust?.name} · Order <span className="font-mono">{sel.orderId}</span>
                      {rider && <> · Rider {rider.name}</>} · {CATEGORY[sel.category]}
                    </div>
                  </div>
                  <StatusPill status={sel.priority} />
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-4">
                {sel.thread.map((m, i) => (
                  <div key={i} className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                    m.from === 'admin' ? 'self-end bg-brand-soft text-ink' : 'self-start bg-raised'}`}>
                    <div>{m.text}</div>
                    <div className="mt-1 text-[10px] text-dim">{m.from === 'admin' ? 'You' : cust?.name} · {m.time}</div>
                  </div>
                ))}
              </div>

              <div className="border-t border-line p-3.5">
                {sel.status !== 'resolved' && (
                  <div className="mb-3 flex flex-wrap gap-2">
                    {sel.status === 'open' && <Btn variant="ghost" className="!px-3 !py-1.5 !text-xs" onClick={() => setComplaintStatus(sel.id, 'in_progress')}>Mark in progress</Btn>}
                    {!sel.refunded && order && <Btn variant="ghost" className="!px-3 !py-1.5 !text-xs" onClick={() => refundComplaint(sel.id, order.total)}>Refund {ksh(order.total)}</Btn>}
                    <Btn className="!px-3 !py-1.5 !text-xs" onClick={() => setComplaintStatus(sel.id, 'resolved')}>Resolve</Btn>
                  </div>
                )}
                <div className="flex items-center gap-2.5">
                  <input value={text} onChange={e => setText(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()}
                    placeholder="Reply to customer…"
                    className="flex-1 rounded-xl border border-line bg-raised px-3.5 py-2.5 text-[13px] text-ink outline-none placeholder:text-dim focus:border-brand/60" />
                  <div onClick={send} className="flex size-10 cursor-pointer items-center justify-center rounded-xl bg-brand text-[#1a0d02]">
                    <Icon name="send" className="size-4" />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
