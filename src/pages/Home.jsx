import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Settings, ShieldCheck, Mouse } from 'lucide-react'
import { Section, SectionHeading } from '../components/ui/Section'
import { products } from '../data/products'
import { siteInfo } from '../data/site'
import { fadeUp, fadeLeft, fadeRight, slideIn } from '../lib/motion'

const serviceCards = [
  { id: 'busbar', title: 'Multifunctional Busbar Processing Machines', text: 'Advanced machines for precise and efficient busbar processing.', icon: Settings, href: '/services#busbar-processing' },
  { id: 'maintenance', title: 'Maintenance Services', text: 'Expert maintenance for low and medium voltage panels.', icon: ShieldCheck, href: '/services#maintenance' },
  { id: 'panels', title: 'Manufacturing of Low-Voltage Panels', text: 'High-quality panels built for maximum safety and reliability.', icon: PanelBolt, href: '/services#lv-panels' },
]

function PanelBolt({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="4" y="3" width="16" height="18" rx="2.5" />
      <path d="M12.8 7 9.5 12.2h2.6L11.2 17l3.3-5.2h-2.6L12.8 7Z" />
    </svg>
  )
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#021D3E]">
        {/* image on the right, fades into the navy on its left edge */}
        <div
          className="absolute inset-y-0 right-0 hidden w-[57.8%] bg-cover bg-left lg:block"
          style={{
            backgroundImage: "url('/assets/hero-factory.png')",
            WebkitMaskImage: 'linear-gradient(to right, transparent 0, #000 9%)',
            maskImage: 'linear-gradient(to right, transparent 0, #000 9%)',
          }}
        />
        {/* mobile / tablet: image behind the copy */}
        <div className="absolute inset-x-0 top-0 h-[70%] lg:hidden">
          <img src="/assets/hero-factory.png" alt="" className="h-full w-full object-cover object-[45%_center]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#021D3E] from-0% via-[#021D3E]/70 via-35% to-transparent" />
        </div>
        {/* diagonal navy panel */}
        <div
          className="absolute inset-y-0 left-0 hidden w-[51.3%] bg-gradient-to-b from-[#021D3E] to-[#031A38] lg:block"
          style={{ clipPath: 'polygon(0 0, 100% 0, 73.2% 100%, 0 100%)' }}
        />

        <div className="container-custom relative flex min-h-[calc(100svh-72px)] flex-col justify-end pb-10 pt-12 lg:min-h-[calc(100svh-109px)] lg:justify-center lg:py-0">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.8, 0.25, 1] }}
            className="max-w-[620px]"
          >
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/85 sm:text-[12px] sm:tracking-[0.28em]">
              <span className="h-[2px] w-6 bg-[#1E6BFF]" />
              Technology
              <span className="h-1 w-1 rounded-full bg-[#1E6BFF]" />
              Quality
              <span className="h-1 w-1 rounded-full bg-[#1E6BFF]" />
              Reliability
            </p>
            <h1 className="mt-5 font-display text-[40px] font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[68px]">
              The Power <span className="text-white">Is Here</span>
            </h1>
            <p className="mt-5 max-w-[600px] text-base leading-[1.5] text-white/95 sm:mt-6 sm:text-[18px] sm:leading-[1.4]">
              {siteInfo.description}
            </p>
            <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-8 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
              <Link to="/contact" className="inline-flex h-[46px] items-center justify-center gap-2 rounded-xl bg-[#0059F9] px-5 sm:px-7 text-[15px] font-semibold text-white shadow-[0_10px_24px_rgba(0,89,249,0.35)] transition-colors hover:bg-[#0047CC]">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/about" className="inline-flex h-[46px] items-center justify-center rounded-xl border border-[#2F6FE0] bg-[#0A2A5E]/40 px-5 sm:px-7 text-[15px] font-semibold text-white transition-colors hover:bg-white/10">
                About Us
              </Link>
            </div>
            <a href="#services" className="mt-10 hidden items-center gap-3 text-[14px] text-white/90 lg:inline-flex">
              <Mouse className="h-6 w-6" strokeWidth={1.5} />
              Scroll Down
            </a>
          </motion.div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section id="services" className="relative overflow-x-clip bg-[#F6F8FE] py-8 xl:py-[28px]">
        <div className="container-custom">
          <div className="grid gap-8 xl:grid-cols-[300px_minmax(0,1fr)_260px] xl:gap-0">
            <motion.div {...fadeLeft} className="xl:pt-[6px]">
              <p className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.25em] text-[#0B55F5]">
                <span className="h-[2px] w-6 bg-[#0B55F5]" />
                Our Services
              </p>
              <h2 className="mt-4 font-display text-[32px] font-bold leading-[1.12] tracking-tight text-brand-navy">
                Comprehensive Electrical Solutions
              </h2>
              <p className="mt-4 max-w-[380px] text-[15px] leading-[1.6] text-[#4B5C7A]">
                We provide integrated solutions for low-voltage systems, from advanced manufacturing to professional maintenance, ensuring efficiency, safety and long-term performance.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-3 xl:ml-10 xl:mr-2 xl:self-start">
              {serviceCards.map((card, index) => {
                const Icon = card.icon
                return (
                  <motion.article
                    key={card.id}
                    {...slideIn(index)}
                    className="flex min-h-[210px] flex-col rounded-xl bg-white p-[25px] shadow-[0_4px_18px_rgba(15,31,63,0.06)] ring-1 ring-black/[0.04]"
                  >
                    <span className="flex h-[42px] w-[42px] items-center justify-center rounded-[10px] bg-[#E8F0FF] text-[#0B55F5]">
                      <Icon className="h-6 w-6" strokeWidth={1.6} />
                    </span>
                    <h3 className="mt-4 text-[15px] font-semibold leading-[1.25] text-brand-navy">{card.title}</h3>
                    <p className="mt-2 text-[12px] leading-[1.55] text-[#5A6B87]">{card.text}</p>
                    <Link
                      to={card.href}
                      aria-label={`Learn more: ${card.title}`}
                      className="mt-auto flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0B55F5] shadow-[0_2px_8px_rgba(15,31,63,0.12)] transition-colors hover:bg-[#0B55F5] hover:text-white"
                    >
                      <ArrowRight className="h-[18px] w-[18px]" />
                    </Link>
                  </motion.article>
                )
              })}
            </div>

            {/* image panel bleeds to the viewport's right edge */}
            <motion.div
              {...fadeRight}
              className="relative hidden h-[238px] self-start xl:block"
              style={{ marginRight: 'calc(-1 * ((100vw - min(100vw, 80rem)) / 2 + 2rem))' }}
            >
              <div
                className="absolute inset-y-0 left-0 right-[200px]"
                style={{
                  backgroundImage: "url('/assets/services-panels.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'left center',
                  clipPath: 'polygon(18% 0, 100% 0, 100% 100%, 0 100%)',
                }}
              />
              <div
                className="absolute bottom-[18px] right-0 top-[44px] w-[238px] text-white"
                style={{
                  background: 'linear-gradient(135deg,#0A63E8,#0050D0)',
                  clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)',
                }}
              >
                <div className="flex h-full flex-col justify-center pl-12 pr-4">
                  <PanelBolt className="h-11 w-11" />
                  <p className="mt-5 max-w-[150px] text-[15px] font-semibold leading-[1.25]">Your Trusted Partner in Electrical Solutions</p>
                </div>
              </div>
            </motion.div>

            {/* mobile / tablet version of the panel */}
            <motion.div {...fadeRight} className="relative overflow-hidden rounded-2xl xl:hidden">
              <img src="/assets/services-panels.jpg" alt="Low-voltage panels" className="h-56 w-full object-cover" />
              <div className="absolute bottom-4 right-4 flex items-center gap-3 rounded-xl bg-[#0A5BE0] p-4 text-white">
                <PanelBolt className="h-8 w-8" />
                <p className="max-w-[160px] text-sm font-semibold leading-tight">Your Trusted Partner in Electrical Solutions</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="About Us"
          title="Power Pro Technology Electric"
          subtitle="Excellence in production of low-voltage panels with a commitment to quality, reliability, and safe electrical management."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <motion.article {...fadeLeft} className="card overflow-hidden">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src="/assets/images/about-1.jpg" alt="Power Pro panels" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="flex flex-col gap-4 p-6">
              <div>
                <h3 className="font-display text-xl font-semibold text-brand-navy">Company Overview</h3>
                <p className="mt-2 text-text-secondary">
                  Power Pro Technology Electric excels in the production of low-voltage panels, ensuring top-notch quality and reliability for safe electrical management.
                </p>
              </div>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-brand-primary" />Maintenance of low and medium voltage panels</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-brand-primary" />Advanced technologies and strict safety protocols</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-brand-primary" />Commitment to innovation and customer satisfaction</li>
              </ul>
              <Link to="/about" className="text-sm font-semibold text-brand-primary hover:text-brand-primaryHover">Learn more →</Link>
            </div>
          </motion.article>
          <motion.article {...fadeUp} className="card overflow-hidden">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src="/assets/images/vision-1.jpg" alt="Innovation in electrical solutions" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="flex flex-col gap-4 p-6">
              <div>
                <h3 className="font-display text-xl font-semibold text-brand-navy">Our Vision</h3>
                <p className="mt-2 text-text-secondary">
                  Innovation in Electrical Solutions with cutting-edge technology, quality and reliability, customer-centric approach, sustainability, and global reach with local impact.
                </p>
              </div>
              <Link to="/about" className="text-sm font-semibold text-brand-primary hover:text-brand-primaryHover">Learn more →</Link>
            </div>
          </motion.article>
          <motion.article {...fadeRight} className="card overflow-hidden">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src="/assets/images/mission-1.jpg" alt="Our mission" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="flex flex-col gap-4 p-6">
              <div>
                <h3 className="font-display text-xl font-semibold text-brand-navy">Our Mission</h3>
                <p className="mt-2 text-text-secondary">
                  Manufacturing superior low-voltage panels and maintaining medium-voltage panels. Delivering reliable, efficient, and safe electrical distribution solutions through innovation and customer-centric approach.
                </p>
              </div>
              <Link to="/about" className="text-sm font-semibold text-brand-primary hover:text-brand-primaryHover">Learn more →</Link>
            </div>
          </motion.article>
        </div>
      </Section>


      <Section className="pt-0">
        <div className="grid gap-8 overflow-hidden rounded-2xl bg-brand-navy lg:grid-cols-2 lg:items-center">
          <motion.div {...fadeLeft} className="relative h-full min-h-[280px]">
            <img src="/assets/images/service-centre.jpg" alt="Power Pro service centre" className="h-full w-full object-cover" loading="lazy" />
          </motion.div>
          <motion.div {...fadeRight} className="flex flex-col gap-6 p-8 text-white sm:p-10 lg:p-12">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Services Centre</span>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">For low and medium voltage panel maintenance and installations</h2>
              <p className="mt-4 text-lg text-white/80">
                Each panel undergoes a series of rigorous tests at the company's dedicated testing facility. Initial tests include continuity, insulation resistance and dielectric strength checks, ensuring all connections are correct and secure.
              </p>
            </div>
            <div>
              <Link to="/services" className="btn-primary">Learn More</Link>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading eyebrow="Our Products" title="Product Portfolio" subtitle="Real product imagery from the reference site." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product, index) => (
            <motion.div
              key={product.id}
              {...slideIn(index, 4)}
              className="overflow-hidden rounded-2xl shadow-card ring-1 ring-black/5"
            >
              <Link to={product.href} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={product.image} alt="Power Pro product" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/products" className="btn-primary">View all products</Link>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div {...fadeLeft}>
            <span className="section-eyebrow">Contact</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy sm:text-4xl">Get In Touch</h2>
            <p className="mt-4 text-lg text-text-secondary">
              Reach out to Power Pro Technology Electric for inquiries about low-voltage panels, maintenance, and services.
            </p>
            <div className="mt-6 space-y-3 text-text-secondary">
              <p><strong className="text-brand-navy">Address:</strong> {siteInfo.address}</p>
              <p><strong className="text-brand-navy">Phone:</strong> {siteInfo.phoneDisplay}</p>
              <p><strong className="text-brand-navy">Email:</strong> <a href={`mailto:${siteInfo.email}`} className="text-brand-primary hover:text-brand-primaryHover">{siteInfo.email}</a></p>
              <p><strong className="text-brand-navy">Hours:</strong> {siteInfo.hours}</p>
            </div>
            <Link to="/contact" className="btn-primary mt-6">Contact Us</Link>
          </motion.div>
          <motion.div {...fadeRight} className="overflow-hidden rounded-2xl shadow-card ring-1 ring-black/5">
            <iframe
              title="Power Pro location"
              src={siteInfo.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '320px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </Section>
    </>
  )
}