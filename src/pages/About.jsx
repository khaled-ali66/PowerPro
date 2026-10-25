import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Section, SectionHeading } from '../components/ui/Section'
import { products } from '../data/products'
import { fadeUp, fadeLeft, fadeRight } from '../lib/motion'

export default function About() {
  return (
    <>
      <Section className="pt-10">
        <nav className="text-sm text-text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link to="/" className="hover:text-brand-primary">Home</Link></li>
            <li>/</li>
            <li className="text-text-primary">About Us</li>
          </ol>
        </nav>
        <SectionHeading
          className="mt-6"
          eyebrow="About Us"
          title="Power Pro Technology Electric"
          subtitle="Excellence in production of low-voltage panels with a commitment to quality, reliability, and safe electrical management."
          align="left"
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div {...fadeLeft} className="overflow-hidden rounded-2xl shadow-card ring-1 ring-black/5">
            <img src="/assets/images/about-1.jpg" alt="Power Pro panels" className="h-full w-full object-cover" loading="lazy" />
          </motion.div>
          <motion.div {...fadeRight}>
            <h3 className="font-display text-2xl font-semibold text-brand-navy">Who we are</h3>
            <p className="mt-4 text-text-secondary">
              Power Pro Technology Electric excels in the production of low-voltage panels, ensuring top-notch quality and reliability for safe electrical management.
            </p>
            <p className="mt-4 text-text-secondary">
              Our expertise extends to the maintenance of low-voltage and medium voltage panels, where we employ advanced techniques and stringent safety protocols to guarantee optimal performance and longevity through the Power Pro Technology Electric service centre.
            </p>
            <p className="mt-4 text-text-secondary">
              With a strong commitment to innovation and customer satisfaction, Power Pro Technology stands at the forefront of the electrical equipment industry, delivering comprehensive solutions tailored to meet the diverse needs of its clients.
            </p>
          </motion.div>
        </div>
      </Section>
      <Section className="pt-0">
        <div className="grid gap-6 lg:grid-cols-3">
          <motion.article {...fadeLeft} className="card overflow-hidden">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src="/assets/images/vision-1.jpg" alt="Our vision" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold text-brand-navy">Our Vision</h3>
              <p className="mt-3 text-text-secondary">
                Innovation in Electrical Solutions, Cutting-Edge Technology, Quality and Reliability, Customer-Centric Approach, Sustainability and Efficiency, Global Reach and Local Impact, Technological Leadership, Research and Development, Safety and Compliance.
              </p>
            </div>
          </motion.article>
          <motion.article {...fadeUp} className="card overflow-hidden">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src="/assets/images/mission-1.jpg" alt="Our mission" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold text-brand-navy">Our Mission</h3>
              <p className="mt-3 text-text-secondary">
                Power Pro Technology's mission is manufacturing superior low-voltage panels, and maintaining Medium -voltage panels. Committed to innovation and excellence, we aim to deliver reliable, efficient, and safe electrical distribution solutions tailored to meet the diverse needs of its clients.
              </p>
            </div>
          </motion.article>
          <motion.article {...fadeRight} className="card overflow-hidden">
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold text-brand-navy">Commitment</h3>
              <p className="mt-3 text-text-secondary">
                Through continuous research and development, strategic partnerships, and a customer centric approach, the company strives to enhance electrical infrastructure, ensure operational efficiency, and contribute to a safer and more sustainable energy future.
              </p>
              <Link to="/contact" className="mt-6 inline-flex text-sm font-semibold text-brand-primary hover:text-brand-primaryHover">Get in touch →</Link>
            </div>
          </motion.article>
        </div>
      </Section>
      <Section className="pt-0">
        <SectionHeading eyebrow="Our Products" title="Product Portfolio" subtitle="Real product imagery from the reference site." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <Link key={product.id} to={product.href} className="group overflow-hidden rounded-2xl shadow-card ring-1 ring-black/5">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={product.image} alt="Power Pro product" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/products" className="btn-primary">View all products</Link>
        </div>
      </Section>
    </>
  )
}
