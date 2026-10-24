import { useParams, Link } from 'react-router-dom'
import { Section } from '../components/ui/Section'
import { products } from '../data/products'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <Section>
        <div className="mx-auto max-w-xl text-center">
          <h1 className="font-display text-3xl font-bold text-brand-navy">Product not found</h1>
          <p className="mt-3 text-text-secondary">The product you're looking for is not available in this listing.</p>
          <Link to="/products" className="btn-primary mt-6">Back to Products</Link>
        </div>
      </Section>
    )
  }

  return (
    <>
      <Section className="pt-10">
        <nav className="text-sm text-text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link to="/" className="hover:text-brand-primary">Home</Link></li>
            <li>/</li>
            <li><Link to="/products" className="hover:text-brand-primary">Products</Link></li>
            <li>/</li>
            <li className="text-text-primary">Product {product.id}</li>
          </ol>
        </nav>
        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-2xl shadow-card ring-1 ring-black/5">
            <img src={product.image} alt="Power Pro product" className="h-full w-full object-cover" />
          </div>
          <div>
            <span className="section-eyebrow">Product</span>
            <h1 className="mt-2 font-display text-3xl font-bold text-brand-navy sm:text-4xl">Power Pro Product</h1>
            <p className="mt-4 text-lg text-text-secondary">
              This product is shown as presented in the original Power Pro Technology Electric reference site. Specifications are not reproduced here to avoid inventing product details.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">Request Information</Link>
              <Link to="/products" className="btn-ghost">Back to Products</Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
