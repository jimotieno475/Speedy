import Toggle from '@/shared/components/Toggle'

export default function OnlineStatus({ online, onToggle, className = '' }) {
  return (
    <div className={`flex items-center justify-between rounded-[14px] border border-line bg-card p-3.5 ${className}`}>
      <div className="flex items-center gap-[7px] text-[12.5px] font-semibold">
        {online && <span className="size-2 animate-pulse-ring rounded-full bg-ok" />}
        {online ? 'Online' : 'Offline'}
      </div>
      <Toggle on={online} onClick={onToggle} />
    </div>
  )
}
