import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/ui/Breadcrumbs';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

interface LegalPageProps {
  title: string;
  description: string;
  breadcrumb: string;
  lastUpdated: string;
  sections: { heading: string; body: string[] }[];
}

export function LegalPage({ title, description, breadcrumb, lastUpdated, sections }: LegalPageProps) {
  return (
    <>
      <SEO title={`${title} | Novex Agro`} description={description} />
      <PageHero
        title={title}
        description={description}
        breadcrumbItems={[{ label: 'Home', path: '/' }, { label: breadcrumb }]}
      />
      <div className="container-page py-12 lg:py-16">
        <div className="max-w-3xl">
          <p className="text-sm text-muted mb-8">Last updated: {lastUpdated}</p>
          <div className="space-y-10">
            {sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-xl font-bold text-ink mb-3">{section.heading}</h2>
                {section.body.map((para, j) => (
                  <p key={j} className="text-muted leading-relaxed mb-3">{para}</p>
                ))}
              </div>
            ))}
          </div>
          <div className="mt-12 p-5 bg-cream rounded-xl">
            <p className="text-sm text-muted">
              This is editable placeholder legal content. It does not constitute legal advice. Please consult a qualified legal professional to prepare terms appropriate for your business before launch.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How Novex Agro collects, uses and protects your information."
      breadcrumb="Privacy Policy"
      lastUpdated="September 2025"
      sections={[
        {
          heading: 'Introduction',
          body: ['This Privacy Policy describes how Novex Agro collects, uses and protects information you provide when using our website and services.', 'This is placeholder content. Replace with your actual privacy policy before launch.'],
        },
        {
          heading: 'Information We Collect',
          body: ['We may collect information you provide directly, such as your name, email address, phone number and any details you submit through forms on this website.', 'We may also collect technical information such as browser type and device information automatically.'],
        },
        {
          heading: 'How We Use Information',
          body: ['Information collected may be used to respond to inquiries, process orders, provide support and improve our services.', 'We do not sell your personal information to third parties.'],
        },
        {
          heading: 'Data Security',
          body: ['We take reasonable measures to protect your information. However, no method of transmission over the internet is completely secure.'],
        },
        {
          heading: 'Your Rights',
          body: ['You may request access to, correction of, or deletion of your personal information by contacting us.'],
        },
        {
          heading: 'Contact',
          body: ['For privacy-related questions, please contact us through the Contact page on this website.'],
        },
      ]}
    />
  );
}

export function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      description="Terms and conditions for using the Novex Agro website and services."
      breadcrumb="Terms"
      lastUpdated="September 2025"
      sections={[
        {
          heading: 'Acceptance of Terms',
          body: ['By accessing and using this website, you accept and agree to be bound by these Terms & Conditions.', 'This is placeholder content. Replace with your actual terms before launch.'],
        },
        {
          heading: 'Use of Website',
          body: ['You agree to use this website for lawful purposes only. You must not use the website in any way that could damage or impair its availability.'],
        },
        {
          heading: 'Products & Pricing',
          body: ['Product information, pricing and availability are subject to change. Where pricing is shown as "Price on request," final pricing will be confirmed through direct contact.'],
        },
        {
          heading: 'Orders',
          body: ['Orders placed through this website are subject to acceptance and availability. We reserve the right to refuse or cancel any order.'],
        },
        {
          heading: 'Intellectual Property',
          body: ['All content on this website, including text, images and design, is the property of Novex Agro and may not be reproduced without permission.'],
        },
        {
          heading: 'Limitation of Liability',
          body: ['Novex Agro shall not be liable for any indirect or consequential damages arising from the use of this website or its products.'],
        },
      ]}
    />
  );
}

export function ShippingPolicyPage() {
  return (
    <LegalPage
      title="Shipping Policy"
      description="Shipping and delivery information for Novex Agro products."
      breadcrumb="Shipping"
      lastUpdated="September 2025"
      sections={[
        {
          heading: 'Order Processing',
          body: ['Orders are processed during business hours. Processing times may vary based on product availability.', 'This is placeholder content. Replace with your actual shipping policy before launch.'],
        },
        {
          heading: 'Delivery Areas',
          body: ['We currently ship within India. Delivery to specific locations may be confirmed at the time of order.'],
        },
        {
          heading: 'Shipping Charges',
          body: ['Shipping charges, if applicable, will be communicated at the time of order confirmation.'],
        },
        {
          heading: 'Delivery Timeline',
          body: ['Estimated delivery times depend on the product and location. Actual delivery times may vary.'],
        },
        {
          heading: 'Order Tracking',
          body: ['Where applicable, order tracking information will be shared after dispatch.'],
        },
      ]}
    />
  );
}

export function ReturnPolicyPage() {
  return (
    <LegalPage
      title="Return Policy"
      description="Return and refund policy for Novex Agro products."
      breadcrumb="Returns"
      lastUpdated="September 2025"
      sections={[
        {
          heading: 'Returns',
          body: ['We accept returns for products that meet the conditions outlined in this policy.', 'This is placeholder content. Replace with your actual return policy before launch.'],
        },
        {
          heading: 'Return Conditions',
          body: ['Products must be in their original condition and packaging. Returns must be initiated within the applicable return period.'],
        },
        {
          heading: 'How to Initiate a Return',
          body: ['To initiate a return, please contact us through the Contact page with your order details and reason for return.'],
        },
        {
          heading: 'Refunds',
          body: ['Approved refunds will be processed through the original payment method. Processing times may vary.'],
        },
        {
          heading: 'Non-Returnable Items',
          body: ['Certain items may not be eligible for return. Please confirm at the time of purchase.'],
        },
      ]}
    />
  );
}
