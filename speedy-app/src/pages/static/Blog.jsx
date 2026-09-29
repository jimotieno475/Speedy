import Icon from '@/shared/components/Icon'
import StaticLayout from './StaticLayout'

const POSTS = [
  { tag: 'Product', title: 'How we cut average delivery time by 22%', excerpt: 'A look inside the dispatch changes that shaved minutes off every order this quarter.', date: 'Sep 12, 2026' },
  { tag: 'Riders', title: 'Meet James: 1,200 deliveries and counting', excerpt: 'One of our top-rated riders on the routes, the regulars, and what keeps him online.', date: 'Aug 28, 2026' },
  { tag: 'Company', title: 'Speedy is now live in five new neighbourhoods', excerpt: "We've expanded coverage to Karen, Runda, South B, South C and Ngong Road.", date: 'Aug 14, 2026' },
  { tag: 'Safety', title: 'New in-app safety features for riders', excerpt: 'Live location sharing and a one-tap emergency line, rolling out this month.', date: 'Jul 30, 2026' },
  { tag: 'Product', title: 'Why we built wallet top-ups via M-Pesa', excerpt: 'The story behind the most-requested feature from our customer feedback board.', date: 'Jul 09, 2026' },
]

const TAG_TONE = { Product: 'text-brand bg-brand-soft', Riders: 'text-ok bg-ok/15', Company: 'text-dim bg-raised', Safety: 'text-bad bg-bad/15' }

function Blog() {
  return (
    <StaticLayout eyebrow="Speedy Blog" title="News, product notes & stories" sub="Updates from the team building Speedy — product changes, rider stories, and what's next." wide>
      <div className="grid gap-5 min-[900px]:grid-cols-2">
        {POSTS.map(p => (
          <article key={p.title} className="flex flex-col rounded-[18px] border border-line bg-card p-5">
            <div className={`mb-3 inline-flex w-fit items-center rounded-full px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.04em] ${TAG_TONE[p.tag]}`}>
              {p.tag}
            </div>
            <h2 className="font-display text-[16px] font-bold leading-snug">{p.title}</h2>
            <p className="mt-2 flex-1 text-[13px] leading-relaxed text-dim">{p.excerpt}</p>
            <div className="mt-4 flex items-center justify-between text-[11.5px] text-dim">
              <span>{p.date}</span>
              <span className="flex items-center gap-1 font-semibold text-brand">Read more <Icon name="arrow" className="size-3.5" /></span>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8 text-center text-[13px] text-dim">More posts coming soon.</div>
    </StaticLayout>
  )
}

export default Blog;