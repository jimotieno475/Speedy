import Icon from '@/shared/components/Icon'
import { ksh } from '../data'

const BADGE = {
  queued: 'bg-raised text-brand',
  done: 'bg-ok/15 text-ok',
  cancelled: 'bg-bad/15 text-bad',
}

export default function QueueRow({ job, showStatus = false }) {
  const cancelled = job.status === 'cancelled'
  return (
    <div className="mb-2 flex items-center gap-3 rounded-[14px] border border-line bg-card px-3.5 py-[13px]">
      <div className={`flex size-[34px] shrink-0 items-center justify-center rounded-[10px] ${BADGE[job.status]}`}>
        <Icon name={cancelled ? 'x' : 'check'} className="size-4" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-[13px] font-medium">{job.addr}</div>
        <div className="mt-0.5 text-[11px] text-dim">{job.meta}</div>
      </div>
      <div className="shrink-0 text-right">
        <div className={`font-mono text-[13.5px] font-bold ${cancelled ? 'text-bad line-through opacity-70' : 'text-ok'}`}>
          {cancelled ? ksh(0) : `+${ksh(job.pay)}`}
        </div>
        {showStatus && <div className="mt-0.5 text-[9.5px] uppercase tracking-[0.05em] text-dim">{job.label}</div>}
      </div>
    </div>
  )
}
