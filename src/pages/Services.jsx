import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Section, SectionHeading } from '../components/ui/Section'
import { services } from '../data/services'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.25, 0.8, 0.25, 1] },
}

export default function Services() {
  return (
    <>
      <Section className="pt-10">
        <nav className="text-sm text-text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link to="/" className="hover:text-brand-primary">Home</Link></li>
            <li>/</li>
            <li className="text-text-primary">Our Services</li>
          </ol>
        </nav>
        <SectionHeading
          className="mt-6"
          eyebrow="Our Services"
          title="Engineered for reliability"
          subtitle="Verified services from Power Pro Technology Electric, presented with a cleaner, more modern layout."
          align="left"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              id={service.id}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.05 }}
              className="card overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-4 p-6">
                <div>
                  <h3 className="font-display text-xl font-semibold text-brand-navy">{service.title}</h3>
                  <p className="mt-2 text-text-secondary">{service.description}</p>
                </div>
                <Link to="/contact" className="text-sm font-semibold text-brand-primary hover:text-brand-primaryHover">Request a quote →</Link>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>
      <Section className="pt-0">
        <div className="grid gap-8 overflow-hidden rounded-2xl bg-brand-navy lg:grid-cols-2 lg:items-center">
          <div className="relative h-full min-h-[280px]">
            <img src="/assets/images/service-centre.jpg" alt="Power Pro service centre" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="flex flex-col gap-6 p-8 text-white sm:p-10 lg:p-12">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Services Centre</span>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">For low and medium voltage panel maintenance and installations</h2>
              <p className="mt-4 text-lg text-white/80">
                Each panel undergoes a series of rigorous tests at the company's dedicated testing facility. Initial tests include continuity, insulation resistance and dielectric strength checks, ensuring all connections are correct and secure.
              </p>
            </div>
            <div>
              <Link to="/contact" className="btn-primary">Learn More</Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
