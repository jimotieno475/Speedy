import StaticLayout from './StaticLayout'
import Section from './Section'

export default function Privacy() {
  return (
    <StaticLayout eyebrow="Legal" title="Privacy policy" sub="Last updated September 1, 2026">
      <Section title="1. Information we collect">
        <p>Account details you provide (name, phone, email, delivery addresses), order history, payment method identifiers (not full card numbers), and location data while an order is active.</p>
      </Section>
      <Section title="2. How we use it">
        <p>To process orders, match riders, process payments, provide customer support, and improve the reliability of the service. We also use aggregated, anonymised data to plan coverage and pricing.</p>
      </Section>
      <Section title="3. Location data">
        <p>Customer location is used to route riders and estimate delivery times. Rider location is shared with the customer and Speedy only while a delivery is active, and with support staff for safety purposes.</p>
      </Section>
      <Section title="4. Sharing">
        <p>We share order details with the relevant restaurant and rider to fulfil your order, and with payment providers (such as M-Pesa) to process transactions. We do not sell personal data to third parties.</p>
      </Section>
      <Section title="5. Data retention">
        <p>We retain account and order data for as long as your account is active, and for a limited period after closure to meet legal, tax, and dispute-resolution obligations.</p>
      </Section>
      <Section title="6. Your choices">
        <p>You can update your details in-app at any time, request a copy of your data, or request account deletion by contacting privacy@speedy.co.ke.</p>
      </Section>
      <Section title="7. Contact">
        <p>Questions about this policy can be sent to privacy@speedy.co.ke.</p>
      </Section>
    </StaticLayout>
  )
}