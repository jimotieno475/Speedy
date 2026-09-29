export default function Toggle({ on, onClick }) {
  return (
    <div onClick={onClick}
      className={`relative h-[23px] w-10 shrink-0 cursor-pointer rounded-full border ${on ? 'border-ok/40 bg-ok/20' : 'border-line bg-raised'}`}>
      <div className={`absolute top-0.5 size-[17px] rounded-full transition-all duration-200 ${on ? 'left-[19px] bg-ok' : 'left-0.5 bg-dim'}`} />
    </div>
  )
}
