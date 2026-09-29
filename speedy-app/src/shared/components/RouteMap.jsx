const ROUTE = 'M70,150 C110,140 120,95 165,88 C205,82 200,55 210,40'
const TXT = 'font-mono'

const Pin = ({ at }) => (
  <g transform={`translate(${at})`}>
    <path d="M0,-16 C8,-16 13,-10 13,-4 C13,4 0,16 0,16 C0,16 -13,4 -13,-4 C-13,-10 -8,-16 0,-16 Z" fill="#FF6A1A" />
    <circle cy="-4" r="4.5" fill="#0F1F42" />
  </g>
)
const Dot = ({ at }) => (
  <g transform={`translate(${at})`}>
    <circle r="7" fill="#0F1F42" stroke="#F4F6FB" strokeWidth="2" />
    <circle r="2.5" fill="#F4F6FB" />
  </g>
)

// pinAt="start": pin at origin (customer view). pinAt="end": pin at destination (rider view).
export default function RouteMap({ pinAt = 'start' }) {
  return (
    <div className="relative mb-[18px] h-[220px] w-full overflow-hidden rounded-[14px] border border-line">
      <svg viewBox="0 0 380 190" preserveAspectRatio="xMidYMid slice" className="block size-full">
        <defs>
          <linearGradient id="landGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1E3572" /><stop offset="100%" stopColor="#16295A" />
          </linearGradient>
          <pattern id="grid" width="26" height="26" patternUnits="userSpaceOnUse">
            <path d="M26 0H0V26" fill="none" stroke="#2A417F" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="380" height="190" fill="#0F1F42" />
        <path d="M235,-10 L250,25 L242,55 L260,80 L255,108 L272,135 L268,160 L285,190 L380,190 L380,-10 Z" fill="url(#landGrad)" opacity="0.9" />
        <path d="M235,-10 L250,25 L242,55 L260,80 L255,108 L272,135 L268,160 L285,190" fill="none" stroke="#3A5AA8" strokeWidth="1.4" />
        <rect width="235" height="190" fill="url(#grid)" opacity="0.55" />
        <text x="330" y="30" textAnchor="middle" transform="rotate(70 330 30)" className={`${TXT} fill-[#4A6099] text-[8px] tracking-[0.12em]`}>INDIAN OCEAN</text>
        <text x="14" y="22" className={`${TXT} fill-[#F4F6FB] text-[12px] font-bold tracking-[0.06em]`}>KENYA</text>
        <text x="14" y="36" className="fill-[#8FA0C4] text-[9.5px] tracking-[0.04em]">NAIROBI · WESTLANDS</text>
        <g transform="translate(348,26)">
          <circle r="14" fill="#16295A" stroke="#2A417F" />
          <path d="M0,-9 L3,0 L0,9 L-3,0 Z" fill="#FF6A1A" />
          <text y="-17" textAnchor="middle" className={`${TXT} fill-[#8FA0C4] text-[8.5px] font-bold`}>N</text>
        </g>
        <path d={ROUTE} fill="none" stroke="#3A5AA8" strokeWidth="4" strokeLinecap="round" />
        <path d={ROUTE} fill="none" stroke="#FF6A1A" strokeWidth="3" strokeLinecap="round" strokeDasharray="10 8" className="animate-dash" />
        {pinAt === 'start'
          ? <><Pin at="70,150" /><Dot at="210,40" /></>
          : <><Dot at="70,150" /><Pin at="210,40" /></>}
        <circle r="5" fill="#38D67A" stroke="#0A1730" strokeWidth="2">
          <animateMotion dur="4s" repeatCount="indefinite" path={ROUTE} />
        </circle>
      </svg>
    </div>
  )
}
