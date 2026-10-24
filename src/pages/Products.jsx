import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Section, SectionHeading } from '../components/ui/Section'
import { products } from '../data/products'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.25, 0.8, 0.25, 1] },
}

export default function Products() {
  return (
    <>
      <Section className="pt-10">
        <nav className="text-sm text-text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link to="/" className="hover:text-brand-primary">Home</Link></li>
            <li>/</li>
            <li className="text-text-primary">Products</li>
          </ol>
        </nav>
        <SectionHeading
          className="mt-6"
          eyebrow="Our Products"
          title="Power Pro Product Range"
          subtitle="Real product imagery from the reference site. Details are preserved as shown without adding unverified specifications."
          align="left"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.05 }}
              className="card overflow-hidden"
            >
              <Link to={product.href} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={product.image}
                    alt="Power Pro product"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-between px-6 py-4">
                  <div>
                    <p className="text-sm font-semibold text-brand-navy">Product</p>
                    <p className="text-sm text-text-muted">View details</p>
                  </div>
                  <span className="text-sm font-semibold text-brand-primary">View →</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </Section>
    </>
  )
}
