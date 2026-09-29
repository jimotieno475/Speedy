export default function RouteTimeline({ pickup, dropoff }) {
  const stops = [['Pickup', pickup], ['Drop-off', dropoff]]
  return (
    <div className="flex gap-3.5">
      <div className="flex flex-col items-center pt-1">
        <div className="size-[9px] rounded-full bg-ink" />
        <div className="relative my-1 w-0.5 flex-1 overflow-hidden bg-line after:absolute after:left-0 after:h-2/5 after:w-full after:animate-travel after:bg-brand after:content-['']" />
        <div className="size-[9px] rounded-full bg-brand" />
      </div>
      <div className="flex flex-1 flex-col gap-[22px]">
        {stops.map(([label, addr]) => (
          <div key={label}>
            <div className="mb-0.5 text-[10.5px] uppercase tracking-[0.06em] text-dim">{label}</div>
            <div className="text-[13.5px] font-medium">{addr}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
