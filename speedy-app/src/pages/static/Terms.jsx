import StaticLayout from './StaticLayout'
import Section from './Section'

export default function Terms() {
  return (
    <StaticLayout eyebrow="Legal" title="Terms of service" sub="Last updated September 1, 2026">
      <Section title="1. Using Speedy">
        <p>By creating an account or placing an order, you agree to these terms. Speedy provides a platform connecting customers, restaurants, and independent delivery riders — we don't prepare food or employ riders directly.</p>
      </Section>
      <Section title="2. Accounts">
        <p>You're responsible for keeping your login details secure and for all activity under your account. Provide accurate information when signing up, including a valid phone number we can reach you on.</p>
      </Section>
      <Section title="3. Orders and payment">
        <p>Prices, delivery fees, and estimated times are shown before checkout and may vary by demand, distance, and time of day. Payment is due at checkout via wallet, M-Pesa, or card.</p>
      </Section>
      <Section title="4. Cancellations and refunds">
        <p>Orders may be cancelled before a rider is assigned at no charge. Once a rider has been assigned or picked up the order, cancellation fees may apply. Refunds for delivery issues are handled case by case through our complaints process.</p>
      </Section>
      <Section title="5. Rider conduct">
        <p>Riders using the platform must comply with local traffic laws and Speedy's code of conduct. Speedy may suspend or remove riders for safety violations, fraud, or repeated customer complaints.</p>
      </Section>
      <Section title="6. Limitation of liability">
        <p>Speedy is not liable for indirect or incidental damages arising from use of the platform, to the extent permitted by Kenyan law. Nothing in these terms limits liability that cannot be excluded by law.</p>
      </Section>
      <Section title="7. Changes to these terms">
        <p>We may update these terms from time to time. Continued use of Speedy after changes take effect means you accept the updated terms.</p>
      </Section>
      <Section title="8. Contact">
        <p>Questions about these terms can be sent to legal@speedy.co.ke.</p>
      </Section>
    </StaticLayout>
  )
}