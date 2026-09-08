import { Link } from 'react-router-dom';
import {
  Play, CheckCircle2, Star, Plus, Minus, ArrowRight,
  Smartphone, ShieldCheck, Zap
} from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/motion';
import { motion } from 'motion/react';
import { products } from '@/data/products';
import { faqs, testimonials, blogPosts } from '@/data/content';
import { useState } from 'react';

// Images
const heroImage = 'https://images.unsplash.com/photo-1586771107445-d3af2835368a?auto=format&fit=crop&w=1920'; // Drone
const wwd1 = 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800';
const wwd2 = 'https://images.unsplash.com/photo-1592982537447-6f2a6a0c5c36?auto=format&fit=crop&w=800';
const wwd3 = 'https://images.unsplash.com/photo-1530533718754-001d2668365a?auto=format&fit=crop&w=800';
const wwd4 = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800';
const appFarmer = 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=800'; // Map/Phone
const aboutFarmers = 'https://images.unsplash.com/photo-1595841696650-659f81cebbdb?auto=format&fit=crop&w=1200';
const impact1 = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000';
const impact2 = 'https://images.unsplash.com/photo-1586771107445-d3af2835368a?auto=format&fit=crop&w=1000';

export function HomePage() {
  const [openFaq, setOpenFaq] = useState<string | null>(faqs[0]?.question);

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-navy">
          <motion.img 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={heroImage} 
            alt="Drone spraying a field" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container-wide relative z-10 py-24">
          <StaggerContainer delayChildren={0.2} staggerDelay={0.15} className="max-w-3xl">
            <StaggerItem>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Smart Farming Solutions for Modern Agriculture.
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-6 text-xl text-white/90 leading-relaxed max-w-2xl font-medium">
                Empowering farmers with innovative technology to boost crop yields and sustainable practices.
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-10 flex flex-col sm:flex-row gap-5 items-center">
                <ButtonLink to="/products" size="lg" className="bg-brand-green text-white hover:bg-brand-green/90 rounded-full px-8 font-semibold w-full sm:w-auto text-center py-4 text-lg shadow-lg shadow-brand-green/20">
                  Explore Products
                </ButtonLink>
                <button className="flex items-center justify-center gap-3 bg-white text-ink hover:bg-white/90 rounded-full px-8 py-4 font-semibold w-full sm:w-auto transition-colors text-lg shadow-lg">
                  <Play className="w-5 h-5" fill="currentColor" /> Watch Video
                </button>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* 2. FEATURED PRODUCT STRIP */}
      <section className="bg-white border-b border-navy/10 relative z-20">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row items-center divide-y lg:divide-y-0 lg:divide-x divide-navy/10">
            <div className="py-6 px-4 lg:px-8 w-full lg:w-1/4">
              <p className="font-bold text-ink uppercase tracking-wider text-sm">Featured Products</p>
              <p className="text-sm text-muted mt-1">Discover our latest tech</p>
            </div>
            {products.slice(0, 3).map((p) => (
              <Link key={p.slug} to={`/products/${p.slug}`} className="group flex items-center gap-4 py-6 px-4 lg:px-8 w-full lg:w-1/4 hover:bg-cream/50 transition-colors">
                <div className="w-12 h-12 rounded bg-cream flex-shrink-0 p-2 border border-navy/5">
                  <img src={p.image} alt={p.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-ink text-sm group-hover:text-brand-green transition-colors">{p.name}</h3>
                  <p className="text-xs font-semibold text-brand-green mt-1">View Details →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-ink tracking-tight mb-4">What We Do</h2>
                <p className="text-lg text-ink/70 max-w-xl">Building products for agriculture that bring real value and operational simplicity to farmers across the globe.</p>
              </div>
              <Link to="/solutions" className="font-bold text-brand-green hover:underline">View All →</Link>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              { img: wwd1, title: 'Smart Irrigation Systems' },
              { img: wwd2, title: 'Precision Farming Equipment' },
              { img: wwd3, title: 'Weather Monitoring Stations' },
              { img: wwd4, title: 'Farm Management Software' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-md">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-start text-left">
                    <h3 className="text-white font-bold text-2xl mb-6">{item.title}</h3>
                    <button className="bg-[#f08a3c] text-white px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-[#d97830] transition-colors">
                      Explore
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR IMPACT (STATS) */}
      <section className="bg-[#0b3320] text-white py-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-4 gap-12 items-center">
            <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-white/20 pb-8 lg:pb-0 lg:pr-8">
              <h2 className="text-3xl font-bold mb-3 text-brand-lime">Our Impact</h2>
              <p className="text-white/80">Building products that create real value and impact across the agricultural sector.</p>
            </div>
            <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { val: '10K+', label: 'Happy Farmers' },
                { val: '100+', label: 'Products' },
                { val: '10+', label: 'Years Exp.' },
                { val: '5+', label: 'Awards Won' },
              ].map((stat, i) => (
                <Reveal key={i} delay={i * 100} className="text-center lg:text-left">
                  <div className="text-4xl md:text-5xl font-extrabold mb-2">{stat.val}</div>
                  <div className="text-white/70 font-medium">{stat.label}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. APP SHOWCASE */}
      <section className="py-20 lg:py-32 bg-white overflow-hidden">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative">
                <div className="absolute inset-0 bg-cream rounded-full scale-150 -translate-x-1/4 -z-10" />
                <img src={appFarmer} alt="Farmer using smartphone" className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl rounded-3xl" />
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="uppercase font-bold tracking-widest text-brand-green/80 mb-4 text-sm">Download App</div>
              <h2 className="text-5xl lg:text-6xl font-extrabold text-[#093524] mb-6 tracking-tight leading-tight">
                Digital Power<br/>in every hand!
              </h2>
              <p className="text-lg text-ink/70 leading-relaxed mb-10 max-w-lg">
                Manage your farm, control your equipment, and monitor real-time data from anywhere using the Novex Agro mobile app.
              </p>
              
              <div className="flex gap-4 mb-12">
                <button className="bg-ink text-white rounded-xl px-6 py-3 flex items-center gap-3 hover:bg-ink/90 transition">
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wider text-white/70">Download on the</div>
                    <div className="font-bold text-lg leading-none">App Store</div>
                  </div>
                </button>
                <button className="bg-white border border-navy/15 text-ink rounded-xl px-6 py-3 flex items-center gap-3 hover:bg-cream transition shadow-sm">
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wider text-ink/70">Get it on</div>
                    <div className="font-bold text-lg leading-none">Google Play</div>
                  </div>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-navy/10">
                <div>
                  <div className="text-2xl font-bold text-ink mb-1">50K+</div>
                  <div className="text-xs uppercase text-muted font-bold tracking-wider">Downloads</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-ink mb-1">4.8</div>
                  <div className="text-xs uppercase text-muted font-bold tracking-wider">Rating</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-ink mb-1">99%</div>
                  <div className="text-xs uppercase text-muted font-bold tracking-wider">Uptime</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. COLLABORATIONS */}
      <section className="bg-[#0b3320] py-24">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <p className="text-brand-lime font-bold uppercase tracking-wider text-sm mb-3">Our Network</p>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white">Our Collaborations<br/>& Industry Partners</h2>
              </div>
              <p className="text-white/70 max-w-md">Working alongside leading institutions and tech providers to bring the best to our farmers.</p>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Reveal delay={100} className="bg-[#12422c] rounded-2xl p-8 flex items-center justify-center border border-white/5">
              <span className="text-white/50 font-bold text-2xl">AgriTech Inc.</span>
            </Reveal>
            <Reveal delay={200} className="lg:col-span-2 rounded-2xl overflow-hidden aspect-[2/1] bg-black">
              <img src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover opacity-80" alt="Collaboration" />
            </Reveal>
            <Reveal delay={300} className="bg-[#12422c] rounded-2xl p-8 flex items-center justify-center border border-white/5">
              <span className="text-white/50 font-bold text-2xl">EcoFarms</span>
            </Reveal>
            
            <Reveal delay={400} className="lg:col-span-2 rounded-2xl overflow-hidden aspect-[2/1] bg-black">
              <img src="https://images.pexels.com/photos/7947656/pexels-photo-7947656.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover opacity-80" alt="Award" />
            </Reveal>
            <Reveal delay={500} className="bg-[#12422c] rounded-2xl p-8 flex items-center justify-center border border-white/5">
               <span className="text-white/50 font-bold text-2xl">Global Ag</span>
            </Reveal>
            <Reveal delay={600} className="bg-[#12422c] rounded-2xl p-8 flex items-center justify-center border border-white/5">
               <span className="text-white/50 font-bold text-2xl">IoT India</span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. ABOUT NOVEX AGRO */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-extrabold text-ink mb-6">About Novex Agro</h2>
              <p className="text-lg text-ink/75 leading-relaxed mb-8">
                Novex Agro is dedicated to revolutionizing Indian agriculture through smart, accessible technology. We build hardware and software solutions that help farmers manage resources, control equipment remotely, and improve overall operational efficiency.
              </p>
              
              <ul className="space-y-5">
                {[
                  { title: 'Smart Technology', desc: 'IoT-enabled devices for remote monitoring and control.' },
                  { title: 'Farmer-Centric Design', desc: 'Built to withstand harsh field conditions and erratic power.' },
                  { title: 'Data-Driven Yields', desc: 'Insights that help optimize water usage and crop health.' }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="w-6 h-6 text-brand-green" />
                    </div>
                    <div>
                      <h4 className="font-bold text-ink text-lg">{item.title}</h4>
                      <p className="text-ink/60 mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
            
            <Reveal delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-green/10 rounded-[3rem] -z-10 rotate-3" />
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <img src={aboutFarmers} alt="Farmers in field" className="w-full aspect-[4/5] object-cover" />
                </div>
                <div className="absolute bottom-8 left-8 right-8 bg-black/60 backdrop-blur-md text-white p-6 rounded-2xl border border-white/10">
                  <h4 className="font-bold text-xl mb-1">Smart Solutions, Better Yields</h4>
                  <p className="text-white/80 text-sm">Join thousands of farmers upgrading their fields.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. OUR IMPACT (IMAGES) */}
      <section className="bg-cream py-24">
        <div className="container-page text-center mb-16">
          <SectionHeading title="Our Impact" align="center" className="mb-0" />
          <div className="w-16 h-1 bg-brand-green mx-auto mt-6 rounded-full" />
        </div>
        
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
            <Reveal>
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group">
                <img src={impact1} alt="Impact" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-8 left-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" fill="currentColor" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">10K+ Happy Farmers</h3>
                    <p className="text-white/80">Across multiple states</p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group">
                <img src={impact2} alt="Impact" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-8 left-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">Smart App Control</h3>
                    <p className="text-white/80">Monitor from anywhere</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          
          <Reveal delay={300} className="max-w-4xl mx-auto text-center mt-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-ink mb-6">Smart farming solutions for modern agriculture</h2>
            <p className="text-lg text-ink/70 leading-relaxed">
              We empower rural communities by providing affordable, easy-to-use technology that directly improves crop outcomes and resource management. Our products are rigorously tested to ensure they deliver reliable performance day in and day out.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="container-page text-center mb-16">
          <p className="text-brand-green font-bold uppercase tracking-wider text-sm mb-3">Testimonials</p>
          <h2 className="text-4xl font-extrabold text-ink">What Farmers Say</h2>
        </div>
        
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="bg-white border border-navy/10 shadow-lg shadow-navy/5 rounded-3xl p-8 h-full flex flex-col">
                  <div className="flex gap-1 text-[#f08a3c] mb-6">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-ink/80 leading-relaxed text-lg flex-1 mb-8">"{t.quote}"</p>
                  <div className="flex items-center gap-4 pt-6 border-t border-navy/5">
                    <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green font-bold text-xl">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-ink">{t.name}</p>
                      <p className="text-sm text-muted">{t.location}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-12">
             <ButtonLink to="/about" className="bg-brand-green text-white px-8 py-3 rounded-full font-bold">Read More Stories</ButtonLink>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="py-24 bg-cream">
        <div className="container-page">
          <div className="text-center mb-16 max-w-2xl mx-auto">
             <p className="text-brand-green font-bold uppercase tracking-wider text-sm mb-3">Have Questions?</p>
             <h2 className="text-4xl lg:text-5xl font-extrabold text-[#093524] mb-6">Frequently Asked<br/>Questions</h2>
             <p className="text-ink/70 text-lg">Find answers to common questions about our smart agricultural products.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 50}>
                <div 
                  className={`bg-white rounded-2xl p-6 cursor-pointer border ${openFaq === faq.question ? 'border-brand-green shadow-md' : 'border-navy/10 hover:border-brand-green/50'}`}
                  onClick={() => setOpenFaq(openFaq === faq.question ? null : faq.question)}
                >
                  <div className="flex gap-4 items-start">
                    <div className="mt-1 flex-shrink-0 w-8 h-8 rounded bg-brand-green/10 text-brand-green flex items-center justify-center">
                      {openFaq === faq.question ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                    <div>
                      <h4 className="font-bold text-ink text-lg">{faq.question}</h4>
                      {openFaq === faq.question && (
                        <p className="mt-4 text-ink/70 leading-relaxed animate-in slide-in-from-top-2 fade-in duration-200">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11. LATEST NEWS */}
      <section className="py-24 bg-white">
        <div className="container-page">
           <Reveal>
             <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
               <div>
                 <p className="text-brand-green font-bold uppercase tracking-wider text-sm mb-3">Insights & Updates</p>
                 <h2 className="text-4xl font-extrabold text-ink">Latest News</h2>
               </div>
               <Link to="/resources" className="font-bold text-brand-green hover:underline">View All →</Link>
             </div>
           </Reveal>

           <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post, i) => (
              <Reveal key={post.slug} delay={i * 100}>
                <Link to={`/resources/${post.slug}`} className="group block h-full">
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/10] mb-6 shadow-md">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-brand-green font-bold text-xs uppercase tracking-wider px-3 py-1.5 rounded-full">
                      {post.category}
                    </div>
                  </div>
                  <h3 className="font-bold text-ink text-xl mb-3 group-hover:text-brand-green transition-colors">{post.title}</h3>
                  <p className="text-ink/60 mb-4 line-clamp-2">{post.excerpt}</p>
                  <p className="text-brand-green font-bold text-sm">Read More →</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 12. VIDEO HIGHLIGHTS */}
      <section className="py-24 bg-cream overflow-hidden">
        <div className="container-page text-center">
          <Reveal>
             <p className="text-brand-green font-bold uppercase tracking-wider text-sm mb-3">Watch & Learn</p>
             <h2 className="text-4xl font-extrabold text-ink mb-16">Check out our video highlights</h2>
          </Reveal>
          
          <Reveal delay={150}>
            <div className="relative rounded-3xl overflow-hidden aspect-[21/9] bg-navy shadow-2xl max-w-5xl mx-auto mb-8 group cursor-pointer">
              <img src={impact1} className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity" alt="Video Highlight" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto">
              {[wwd1, wwd2, wwd3].map((imgUrl, i) => (
                <div key={i} className="relative rounded-xl overflow-hidden aspect-[16/9] bg-navy cursor-pointer group">
                  <img src={imgUrl} className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity" alt={`Thumbnail ${i+1}`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                      <Play className="w-4 h-4 text-white ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 13. FINAL CTA */}
      <section className="bg-[#0b3320] py-24 text-center">
        <div className="container-page">
          <Reveal>
            <p className="text-brand-lime font-bold uppercase tracking-wider text-sm mb-4">Start Your Journey With Us</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-10 tracking-tight">
              Ready to Transform Your Farm?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <ButtonLink to="/store" variant="white" size="lg" className="rounded-full font-bold text-lg">
                Get Started
              </ButtonLink>
              <ButtonLink to="/contact" variant="ghost" size="lg" className="border-2 border-brand-green text-white rounded-full font-bold text-lg hover:bg-brand-green/20">
                Contact Sales
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
