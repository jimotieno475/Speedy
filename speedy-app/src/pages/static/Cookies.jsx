import StaticLayout from './StaticLayout'
import Section from './Section'

export default function Cookies() {
  return (
    <StaticLayout eyebrow="Legal" title="Cookie policy" sub="Last updated September 1, 2026">
      <Section title="1. What cookies we use">
        <p>Speedy's website and app use essential cookies and local storage to keep you logged in, remember your light/dark theme preference, and keep your cart or order-in-progress state.</p>
      </Section>
      <Section title="2. Analytics">
        <p>We use limited, privacy-respecting analytics to understand which pages and features are used, so we can improve the product. This data is aggregated and not used to identify you individually.</p>
      </Section>
      <Section title="3. No third-party ad tracking">
        <p>We do not use third-party advertising cookies, and we do not sell browsing data to advertisers.</p>
      </Section>
      <Section title="4. Managing cookies">
        <p>Most browsers let you block or delete cookies in settings. Blocking essential cookies may prevent parts of Speedy — like staying logged in — from working correctly.</p>
      </Section>
      <Section title="5. Contact">
        <p>Questions about this policy can be sent to privacy@speedy.co.ke.</p>
      </Section>
    </StaticLayout>
  )
}