import { Link } from 'react-router-dom';
import {
  ArrowRight, Cpu, Radio, Activity, ShieldCheck, Droplets, Gauge, Target,
  Wifi, Calendar, Monitor, Database, Smartphone, Bell, Zap, Settings, Eye,
  Sprout, TrendingDown, TrendingUp, MapPin, Clock, Wrench, Plug, ToggleLeft
} from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProductCard } from '@/components/ui/ProductCard';
import { SolutionCard } from '@/components/ui/SolutionCard';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { products } from '@/data/products';
import { solutions } from '@/data/solutions';
import { faqs, testimonials, blogPosts } from '@/data/content';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/motion';
import { motion } from 'motion/react';
const heroImage = 'https://images.pexels.com/photos/11276073/pexels-photo-11276073.jpeg?auto=compress&cs=tinysrgb&w=1920';
const introImage = 'https://images.pexels.com/photos/20445181/pexels-photo-20445181.jpeg?auto=compress&cs=tinysrgb&w=1200';
const problemImage = 'https://images.pexels.com/photos/18135422/pexels-photo-18135422.jpeg?auto=compress&cs=tinysrgb&w=1200';
const visualImage = 'https://images.pexels.com/photos/17765487/pexels-photo-17765487.jpeg?auto=compress&cs=tinysrgb&w=1920';
const ctaImage = 'https://images.pexels.com/photos/2382904/pexels-photo-2382904.jpeg?auto=compress&cs=tinysrgb&w=1920';

const valuePoints = [
  { icon: Cpu, label: 'Smart Automation' },
  { icon: Radio, label: 'Remote Monitoring' },
  { icon: ShieldCheck, label: 'Reliable Hardware' },
  { icon: Sprout, label: 'Farmer-Focused Technology' },
];

const problems = [
  'Manual pump operation requiring field visits',
  'Unnecessary travel to check equipment status',
  'Limited visibility into farm operations',
  'Inefficient irrigation control and scheduling',
  'Difficulty managing equipment across locations',
];

const novexSolutions = [
  { icon: Radio, label: 'Remote Control' },
  { icon: Cpu, label: 'Automation' },
  { icon: Activity, label: 'Monitoring' },
  { icon: Wifi, label: 'Connected Devices' },
  { icon: Database, label: 'Data-Driven Decisions' },
];

const steps = [
  { num: '01', icon: Plug, title: 'Connect', desc: 'Connect your agricultural equipment to the Novex system.' },
  { num: '02', icon: Settings, title: 'Configure', desc: "Set up the device according to the farm's requirements." },
  { num: '03', icon: ToggleLeft, title: 'Control', desc: 'Manage connected equipment through the control interface.' },
  { num: '04', icon: Eye, title: 'Monitor', desc: 'Observe equipment and farm information from one place.' },
];

const techCapabilities = [
  { icon: Wifi, label: 'IoT Connectivity', desc: 'Devices communicate operational data.' },
  { icon: Radio, label: 'Remote Control', desc: 'Operate equipment from a distance.' },
  { icon: Calendar, label: 'Smart Scheduling', desc: 'Automate tasks with timed schedules.' },
  { icon: Monitor, label: 'Equipment Monitoring', desc: 'Track status from a dashboard.' },
  { icon: Database, label: 'Data Collection', desc: 'Log operational information over time.' },
  { icon: Smartphone, label: 'Mobile Integration', desc: 'Access control from mobile devices.' },
];

const principles = [
  { title: 'Simple to Operate', desc: 'Technology should reduce complexity, not create it.' },
  { title: 'Reliable Hardware', desc: 'Products designed for practical agricultural environments.' },
  { title: 'Connected Solutions', desc: 'Bring equipment, control and information closer together.' },
  { title: 'Farmer-Focused Design', desc: 'Technology should solve real operational problems.' },
];

export function HomePage() {
  const featuredProducts = products.slice(0, 4);
  const featuredSolutions = solutions.filter((s) => s.featured);
  const otherSolutions = solutions.filter((s) => !s.featured);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-navy">
          <motion.img 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={heroImage} 
            alt="Agricultural field in rural India" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/55 to-navy/20" />
        </div>
        <div className="container-wide relative z-10 py-20">
          <StaggerContainer delayChildren={0.2} staggerDelay={0.15} className="max-w-2xl">
            <StaggerItem>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-brand-lime mb-5">
                Novex Agro &bull; Smart Agriculture
              </p>
            </StaggerItem>
            <StaggerItem>
              <h1 className="text-display text-white text-balance">
                Smart Technology.<br />Stronger Harvest.
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl">
                Practical technology for smarter irrigation, connected farm equipment and efficient agricultural operations.
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <ButtonLink to="/products" size="lg" variant="primary">
                  Explore Products <ArrowRight className="w-5 h-5" />
                </ButtonLink>
                <ButtonLink to="/solutions" size="lg" variant="white">
                  Explore Solutions
                </ButtonLink>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* SECTION 2: TRUST / VALUE STRIP */}
      <section className="bg-white border-b border-navy/8">
        <div className="container-page py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {valuePoints.map((vp, i) => (
              <Reveal key={vp.label} delay={i * 80}>
                <div className="flex items-center gap-3 group cursor-default">
                  <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-brand-green/8 text-brand-green flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-green/15">
                    <vp.icon className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-ink/90 text-sm sm:text-base group-hover:text-ink transition-colors">{vp.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: INTRODUCTION */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal>
              <p className="eyebrow mb-4">About Novex Agro</p>
              <h2 className="text-heading text-ink text-balance">
                Technology That Works Where Farming Needs It.
              </h2>
              <p className="mt-6 text-lg text-ink/80 leading-relaxed">
                Novex Agro develops practical agricultural technology designed to simplify farm operations, improve control and bring connected intelligence closer to the field.
              </p>
              <p className="mt-4 text-ink/75 leading-relaxed">
                Our products are built to address the operational realities of farming — from motor control and automation to monitoring and data collection.
              </p>
              <div className="mt-8">
                <ButtonLink to="/about" variant="outline" size="md">
                  Discover Novex Agro <ArrowRight className="w-4 h-4" />
                </ButtonLink>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md group">
                <img src={introImage} alt="Farmer tending to a wheat field" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURED PRODUCTS */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <SectionHeading
                eyebrow="Our Products"
                title={<>Built for the Field.<br />Designed for Control.</>}
              />
              <ButtonLink to="/products" variant="outline" size="md" className="flex-shrink-0">
                View All Products <ArrowRight className="w-4 h-4" />
              </ButtonLink>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: PROBLEM → SOLUTION */}
      <section className="bg-navy text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="container-page relative z-10">
          <Reveal>
            <div className="text-center mb-16">
              <p className="eyebrow-light mb-4">The Shift</p>
              <h2 className="text-heading text-white text-balance mx-auto">
                From Manual Control<br />to Smarter Farming.
              </h2>
            </div>
          </Reveal>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Problems */}
            <Reveal>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-900/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-red-500/15 text-red-400">
                    <TrendingDown className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Common Challenges</h3>
                </div>
                <ul className="space-y-4">
                  {problems.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-2.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            {/* Solutions */}
            <Reveal delay={150}>
              <div className="bg-brand-green/15 border border-brand-green/25 rounded-2xl p-8 h-full transition-all duration-300 hover:bg-brand-green/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-green/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-green/25 text-brand-lime">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">The Novex Approach</h3>
                </div>
                <div className="space-y-4">
                  {novexSolutions.map((s) => (
                    <div key={s.label} className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 text-brand-lime flex-shrink-0">
                        <s.icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm text-white/90 font-medium">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 6: SOLUTIONS */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Our Solutions"
              title={<>Technology for Every Stage of Farm Operations.</>}
              align="center"
              className="mb-12"
            />
          </Reveal>
          <div className="grid lg:grid-cols-3 gap-6 mb-6">
            {featuredSolutions.map((s, i) => (
              <Reveal key={s.slug} delay={i * 100}>
                <SolutionCard solution={s} variant="featured" />
              </Reveal>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherSolutions.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <SolutionCard solution={s} />
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <ButtonLink to="/solutions" variant="outline" size="md">
              View All Solutions <ArrowRight className="w-4 h-4" />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* SECTION 7: HOW IT WORKS */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              title={<>Simple Technology.<br />Straightforward Control.</>}
              align="center"
              className="mb-16"
            />
          </Reveal>
          <div className="relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-navy/12" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {steps.map((step, i) => (
                <Reveal key={step.num} delay={i * 120}>
                  <div className="relative text-center group cursor-default">
                    <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-white border-2 border-brand-green/20 text-brand-green mb-5 z-10 transition-all duration-300 group-hover:scale-110 group-hover:border-brand-green group-hover:shadow-lg group-hover:shadow-brand-green/20">
                      <step.icon className="w-8 h-8 transition-transform duration-300 group-hover:rotate-12" />
                      <span className="absolute -top-2 -right-2 flex items-center justify-center w-8 h-8 rounded-full bg-brand-green text-white text-xs font-bold transition-transform duration-300 group-hover:scale-110">
                        {step.num}
                      </span>
                    </div>
                    <h3 className="font-bold text-ink text-lg group-hover:text-brand-green transition-colors">{step.title}</h3>
                    <p className="mt-2 text-sm text-ink/75 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: TECHNOLOGY - EDITORIAL LAYOUT */}
      <section className="bg-navy text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-page relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <Reveal className="lg:col-span-5">
              <div className="sticky top-28">
                <SectionHeading
                  eyebrow="Technology Core"
                  eyebrowLight
                  light
                  title={<>Connected Intelligence for the Modern Farm.</>}
                  className="mb-8"
                />
                <p className="text-white/75 text-lg leading-relaxed mb-8">
                  Our systems are designed not just to automate, but to integrate seamlessly into your daily operations. From robust connectivity to smart scheduling, every feature is built to withstand the realities of Indian agriculture.
                </p>
                <ButtonLink to="/solutions" size="lg" variant="white">
                  Discover Our Tech
                </ButtonLink>
              </div>
            </Reveal>
            <div className="lg:col-span-7">
              <div className="space-y-12">
                {techCapabilities.map((tc, i) => (
                  <Reveal key={tc.label} delay={i * 80}>
                    <div className="flex gap-6 group">
                      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-brand-blue/15 text-brand-blue flex-shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white">
                        <tc.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-xl mb-2">{tc.label}</h3>
                        <p className="text-white/60 leading-relaxed text-lg">{tc.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: WHY NOVEX - SPLIT LAYOUT */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative aspect-square md:aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img src={heroImage} alt="Indian agricultural fields" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="text-white font-bold text-2xl">Empowering 10,000+ Farms.</p>
                </div>
              </div>
            </Reveal>
            <div>
              <Reveal>
                <SectionHeading
                  eyebrow="The Novex Standard"
                  title="Why Farmers Choose Us."
                  className="mb-12"
                />
              </Reveal>
              <div className="space-y-8">
                {principles.map((p, i) => (
                  <Reveal key={p.title} delay={i * 100}>
                    <div className="flex gap-5 relative group">
                      <div className="absolute left-6 top-10 bottom-[-2rem] w-px bg-navy/10 group-last:hidden" />
                      <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-cream border-2 border-navy/10 text-navy font-bold flex-shrink-0 transition-colors group-hover:bg-brand-green group-hover:text-white group-hover:border-brand-green">
                        {i + 1}
                      </div>
                      <div className="pt-2 pb-6">
                        <h3 className="text-xl font-bold text-ink">{p.title}</h3>
                        <p className="mt-2 text-ink/75 leading-relaxed text-lg">{p.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: PRODUCT + AGRICULTURE VISUAL */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={visualImage} alt="Agricultural field" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-navy/60" />
        </div>
        <div className="container-page relative z-10 py-20">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="text-heading text-white text-balance">
                Bringing Smart Technology Closer to the Field.
              </h2>
              <div className="mt-8">
                <ButtonLink to="/solutions" size="lg" variant="primary">
                  Explore Our Technology <ArrowRight className="w-5 h-5" />
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 11: CUSTOMER STORIES */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Customer Stories"
              title="Trusted by Farmers Across India."
              align="center"
              className="mb-4"
            />
            <p className="text-center text-sm text-muted mt-2 max-w-xl mx-auto mb-12">
              Customer testimonial placeholders. Replace with verified feedback before launch.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="bg-white border border-navy/8 rounded-2xl p-7 h-full flex flex-col">
                  <div className="flex gap-1 text-brand-green mb-4">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="w-4 h-4 rounded-full bg-brand-green/20" />
                    ))}
                  </div>
                  <p className="text-ink leading-relaxed flex-1 italic">"{t.quote}"</p>
                  <div className="mt-6 pt-5 border-t border-navy/8">
                    <p className="font-semibold text-ink text-sm">{t.name}</p>
                    <p className="text-xs text-muted mt-0.5">{t.role} &middot; {t.location}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12: RESOURCES */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <SectionHeading
                eyebrow="Resources"
                title="Insights for Smarter Agriculture."
              />
              <ButtonLink to="/resources" variant="outline" size="md" className="flex-shrink-0">
                View All Articles <ArrowRight className="w-4 h-4" />
              </ButtonLink>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {recentPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 100}>
                <Link
                  to={`/resources/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-navy/8 bg-white transition-all duration-300 hover:shadow-lg hover:border-navy/15"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-cream">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-xs text-muted mb-3">
                      <span className="font-semibold text-brand-green">{post.category}</span>
                      <span>&middot;</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="font-bold text-ink text-lg leading-snug group-hover:text-brand-green transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed flex-1">{post.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 13: FAQ */}
      <section id="faq" className="bg-cream py-16 lg:py-24">
        <div className="container-page">
          <div className="grid lg:grid-cols-5 gap-12">
            <Reveal className="lg:col-span-2">
              <SectionHeading
                eyebrow="FAQ"
                title="Frequently Asked Questions."
                description="General questions about Novex Agro and our products. For specific inquiries, please contact us."
              />
              <div className="mt-8">
                <ButtonLink to="/contact" variant="outline" size="md">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </ButtonLink>
              </div>
            </Reveal>
            <Reveal className="lg:col-span-3" delay={150}>
              <FAQAccordion items={faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 14: FINAL CTA */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-brand-green">
        <div className="absolute inset-0">
          <img src={ctaImage} alt="" className="w-full h-full object-cover opacity-20" loading="lazy" />
        </div>
        <div className="container-page relative z-10 text-center">
          <Reveal>
            <h2 className="text-heading text-white text-balance mx-auto">
              Ready to Make Farming Smarter?
            </h2>
            <p className="mt-5 text-lg text-white/85 leading-relaxed max-w-2xl mx-auto">
              Explore practical technology designed to bring greater control, connectivity and simplicity to modern agriculture.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonLink to="/products" size="lg" variant="white">
                Explore Products
              </ButtonLink>
              <ButtonLink to="/contact" size="lg" variant="navy">
                Talk to Novex Agro
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
