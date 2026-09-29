export default function Section({ title, children }) {
  return (
    <section className="mb-8">
      <h2 className="mb-2.5 font-display text-lg font-bold">{title}</h2>
      <div className="space-y-3 text-[13.5px] leading-relaxed text-dim">{children}</div>
    </section>
  )
}