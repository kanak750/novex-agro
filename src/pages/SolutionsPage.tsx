import { Link, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PageHero, Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SolutionCard } from '@/components/ui/SolutionCard';
import { ButtonLink } from '@/components/ui/Button';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { solutions } from '@/data/solutions';
import { useReveal } from '@/hooks/useReveal';
import { NotFoundPage } from './NotFoundPage';

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useReveal();
  return <div ref={ref} className={`reveal ${visible ? 'visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export function SolutionsPage() {
  const featured = solutions.filter((s) => s.featured);
  const others = solutions.filter((s) => !s.featured);

  return (
    <>
      <SEO
        title="Solutions | Novex Agro"
        description="Explore Novex Agro's agricultural technology solutions for smart irrigation, remote motor control, farm monitoring, automation, precision agriculture and energy management."
      />
      <PageHero
        eyebrow="Our Solutions"
        title="Practical Technology for Modern Agriculture."
        description="Connected solutions designed to simplify farm operations, improve control and bring intelligence closer to the field."
        breadcrumbItems={[{ label: 'Home', path: '/' }, { label: 'Solutions' }]}
      />

      <div className="container-page py-16 lg:py-24">
        <Reveal>
          <SectionHeading
            title="Technology for Every Stage of Farm Operations."
            description="From irrigation and motor control to monitoring and automation, Novex solutions address the practical needs of modern farming."
            align="center"
            className="mb-14"
          />
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          {featured.map((s, i) => (
            <Reveal key={s.slug} delay={i * 100}>
              <SolutionCard solution={s} variant="featured" />
            </Reveal>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <SolutionCard solution={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}

export function SolutionDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const solution = solutions.find((s) => s.slug === slug);
  const { ref, visible } = useReveal();

  if (!solution) return <NotFoundPage />;

  const Icon = (Icons as Record<string, Icons.LucideIcon>)[solution.icon] ?? Icons.Circle;

  return (
    <>
      <SEO
        title={`${solution.name} | Novex Agro Solutions`}
        description={solution.shortDescription}
        ogImage={solution.image}
      />
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={solution.image} alt={solution.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/20" />
        </div>
        <div className="container-page relative z-10 py-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-brand-green/20 text-brand-lime">
              <Icon className="w-6 h-6" />
            </div>
            <p className="eyebrow-light">{solution.name}</p>
          </div>
          <h1 className="text-heading text-white text-balance max-w-3xl">{solution.name}</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl leading-relaxed">{solution.shortDescription}</p>
        </div>
      </section>

      <div className="container-page py-6">
        <Breadcrumbs
          items={[
            { label: 'Home', path: '/' },
            { label: 'Solutions', path: '/solutions' },
            { label: solution.name },
          ]}
        />
      </div>

      {/* Problem + Approach */}
      <section className="container-page py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
            <p className="eyebrow mb-3">The Challenge</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-ink mb-4">The Problem</h2>
            <p className="text-muted leading-relaxed text-lg">{solution.problem}</p>
          </div>
          <div className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '150ms' }}>
            <p className="eyebrow mb-3">Our Approach</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-ink mb-4">The Novex Approach</h2>
            <p className="text-muted leading-relaxed text-lg">{solution.approach}</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-cream py-16">
        <div className="container-page">
          <SectionHeading title="How It Works" className="mb-10" />
          <ol className="space-y-6 max-w-3xl">
            {solution.howItWorks.map((step, i) => (
              <li key={i} className="flex gap-5 bg-white p-6 rounded-xl border border-navy/8">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-green text-white font-bold flex-shrink-0">
                  {i + 1}
                </span>
                <p className="text-ink leading-relaxed pt-1.5">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Capabilities */}
      <section className="container-page py-16">
        <SectionHeading title="Key Capabilities" className="mb-10" />
        <div className="grid sm:grid-cols-2 gap-4">
          {solution.capabilities.map((cap, i) => (
            <div key={i} className="flex items-center gap-3 p-5 border border-navy/8 rounded-xl">
              <div className="w-2 h-2 rounded-full bg-brand-green flex-shrink-0" />
              <span className="text-ink font-medium">{cap}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-navy text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="container-page relative z-10">
          <SectionHeading eyebrow="Applications" eyebrowLight light title="Use Cases" className="mb-10" />
          <div className="grid sm:grid-cols-3 gap-4">
            {solution.useCases.map((uc, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <p className="text-white/90 font-medium">{uc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="container-page py-16">
        <SectionHeading title="Technology" className="mb-10" />
        <div className="grid sm:grid-cols-3 gap-4">
          {solution.technology.map((tech, i) => (
            <Link
              key={i}
              to="/products"
              className="flex items-center justify-between p-5 border border-navy/8 rounded-xl hover:border-brand-green hover:bg-brand-green/5 transition-all group"
            >
              <span className="text-ink font-medium">{tech}</span>
              <ArrowRight className="w-4 h-4 text-brand-green group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-16">
        <div className="container-page">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <SectionHeading title="FAQ" />
            </div>
            <div className="lg:col-span-3">
              <FAQAccordion items={solution.faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-green py-16">
        <div className="container-page text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Explore {solution.name} Products
          </h2>
          <p className="text-white/85 mb-8 max-w-xl mx-auto">
            Browse the Novex products that power this solution.
          </p>
          <ButtonLink to="/products" variant="white" size="lg">
            View Products <ArrowRight className="w-5 h-5" />
          </ButtonLink>
        </div>
      </section>

      <div className="container-page py-10">
        <Link to="/solutions" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green link-underline">
          ← Back to All Solutions
        </Link>
      </div>
    </>
  );
}
