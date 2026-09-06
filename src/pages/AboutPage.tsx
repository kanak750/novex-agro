import { Sprout, Cpu, ShieldCheck, Users, Target, Eye, Wrench, Radio, Activity, Database, Wifi, Gauge } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/ui/Breadcrumbs';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ButtonLink } from '@/components/ui/Button';
import { useReveal } from '@/hooks/useReveal';

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useReveal();
  return <div ref={ref} className={`reveal ${visible ? 'visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

const aboutImage = 'https://images.pexels.com/photos/36678421/pexels-photo-36678421.jpeg?auto=compress&cs=tinysrgb&w=1200';
const approachImage = 'https://images.pexels.com/photos/3912373/pexels-photo-3912373.jpeg?auto=compress&cs=tinysrgb&w=1200';

const techAreas = [
  { icon: Radio, label: 'Remote Control', desc: 'Operating equipment from a distance through connected interfaces.' },
  { icon: Cpu, label: 'Automation', desc: 'Reducing manual tasks through scheduling and intelligent device control.' },
  { icon: Activity, label: 'Monitoring', desc: 'Bringing visibility to equipment status and field conditions.' },
  { icon: Database, label: 'Data Collection', desc: 'Logging operational information to support informed decisions.' },
  { icon: Wifi, label: 'Connectivity', desc: 'Connecting devices and systems for unified farm management.' },
  { icon: Gauge, label: 'Resource Management', desc: 'Tracking usage and operational patterns for efficiency.' },
];

export function AboutPage() {
  return (
    <>
      <SEO
        title="About | Novex Agro"
        description="Novex Agro develops practical agricultural technology designed to simplify farm operations, improve control and bring connected intelligence closer to the field."
      />
      <PageHero
        eyebrow="About Novex Agro"
        title="Technology That Works Where Farming Needs It."
        description="We build practical agricultural technology for smarter operations, reliable control and connected farm management."
        breadcrumbItems={[{ label: 'Home', path: '/' }, { label: 'About' }]}
      />

      {/* Who We Are */}
      <section className="container-page py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <p className="eyebrow mb-4">Who We Are</p>
            <h2 className="text-heading text-ink text-balance">A Technology Company Built for Agriculture.</h2>
            <p className="mt-6 text-muted leading-relaxed text-lg">
              Novex Agro is an agricultural technology company focused on developing practical, connected solutions for modern farming. We design and build products that address the real operational needs of farmers — from motor control and automation to monitoring and data collection.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Our approach is grounded in simplicity and reliability. We believe technology should reduce complexity, not add to it, and that every product should solve a genuine operational problem.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md">
              <img src={aboutImage} alt="Agricultural field" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* What We Build */}
      <section className="bg-cream py-20">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="What We Build"
              title="Practical Products for Real Farm Operations."
              align="center"
              className="mb-14"
            />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Motor Controllers', desc: 'Smart control systems for agricultural pump motors.' },
              { title: 'Smart Switches', desc: 'Mobile-operated switching for farm equipment.' },
              { title: 'Monitoring Systems', desc: 'Centralized visibility across farm operations.' },
              { title: 'Sensors', desc: 'Field-deployable modules for data collection.' },
              { title: 'Data Loggers', desc: 'Recording operational information over time.' },
              { title: 'Accessories', desc: 'Connectivity and installation components.' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="bg-white p-6 rounded-xl border border-navy/8 h-full">
                  <h3 className="font-bold text-ink text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container-page py-20">
        <div className="grid md:grid-cols-2 gap-8">
          <Reveal>
            <div className="bg-navy text-white p-8 lg:p-10 rounded-2xl h-full">
              <div className="flex items-center gap-3 mb-5">
                <Target className="w-6 h-6 text-brand-lime" />
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-white/70 leading-relaxed text-lg">
                To develop practical agricultural technology that simplifies farm operations, improves control and brings connected intelligence closer to the field — making farming more efficient and less labor-intensive.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="bg-brand-green text-white p-8 lg:p-10 rounded-2xl h-full">
              <div className="flex items-center gap-3 mb-5">
                <Eye className="w-6 h-6 text-white" />
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-white/85 leading-relaxed text-lg">
                A future where every farmer has access to reliable, connected technology that reduces manual workload and supports better decision-making through practical automation and monitoring.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="bg-cream py-20">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Why We Exist"
              title="To Bridge the Gap Between Technology and Farming."
              description="Many agricultural operations still rely on manual processes that are time-consuming and inefficient. Novex Agro exists to make practical technology accessible and useful for everyday farm operations."
              className="max-w-3xl"
            />
          </Reveal>
        </div>
      </section>

      {/* Our Approach */}
      <section className="container-page py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md">
              <img src={approachImage} alt="Electronic components" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="eyebrow mb-4">Our Approach</p>
            <h2 className="text-heading text-ink text-balance">Simple. Reliable. Connected.</h2>
            <div className="mt-6 space-y-5">
              {[
                { icon: ShieldCheck, title: 'Reliability First', desc: 'Products designed for the demands of real agricultural environments.' },
                { icon: Wrench, title: 'Practical Design', desc: 'Technology that solves real problems without unnecessary complexity.' },
                { icon: Users, title: 'Farmer-Centric', desc: 'Every product is built with the farmer\'s operational reality in mind.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-brand-green/8 text-brand-green flex-shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ink">{item.title}</h3>
                    <p className="text-sm text-muted mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core Technology Areas */}
      <section className="bg-navy text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="container-page relative z-10">
          <Reveal>
            <SectionHeading
              eyebrow="Core Technology"
              eyebrowLight
              light
              title="Technology Areas We Focus On."
              align="center"
              className="mb-14"
            />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {techAreas.map((area, i) => (
              <Reveal key={area.label} delay={i * 80}>
                <div className="bg-navy p-7 h-full hover:bg-navy-600/40 transition-colors">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-brand-blue/15 text-brand-blue mb-4">
                    <area.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-white text-lg">{area.label}</h3>
                  <p className="mt-2 text-sm text-white/55 leading-relaxed">{area.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-green py-16">
        <div className="container-page text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Want to Learn More?
          </h2>
          <p className="text-white/85 mb-8 max-w-xl mx-auto">
            Explore our products or get in touch with the Novex Agro team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonLink to="/products" variant="white" size="lg">Explore Products</ButtonLink>
            <ButtonLink to="/contact" variant="navy" size="lg">Contact Us</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
