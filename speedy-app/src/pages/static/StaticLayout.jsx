import { TopNav } from '../AuthLayout'
import Footer from '@/shared/components/Footer'

// Shared shell for every "static" page linked from the footer —
// About, Careers, Blog, Help, Safety, Contact, Terms, Privacy, Cookies.
function StaticLayout({ eyebrow, title, sub, children, wide = false }) {
  return (
    <div className="min-h-dvh overflow-y-auto bg-base text-ink">
      <TopNav />

      <header className={`mx-auto px-5 pb-10 pt-10 text-center min-[900px]:px-10 min-[900px]:pt-16 ${wide ? 'max-w-6xl' : 'max-w-3xl'}`}>
        {eyebrow && (
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.06em] text-brand">
            {eyebrow}
          </div>
        )}
        <h1 className="font-display text-[32px] font-bold leading-tight min-[640px]:text-[40px]">{title}</h1>
        {sub && <p className="mx-auto mt-3 max-w-xl text-[14.5px] leading-relaxed text-dim">{sub}</p>}
      </header>

      <main className={`mx-auto px-5 pb-20 min-[900px]:px-10 ${wide ? 'max-w-6xl' : 'max-w-3xl'}`}>
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default StaticLayout;