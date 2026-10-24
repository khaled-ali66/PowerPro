import { Link } from 'react-router-dom'
import { Section } from '../components/ui/Section'

export default function NotFound() {
  return (
    <Section className="text-center">
      <div className="mx-auto max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-primary">404</p>
        <h1 className="mt-4 font-display text-4xl font-bold text-brand-navy sm:text-5xl">Page not found</h1>
        <p className="mt-4 text-lg text-text-secondary">The page you are looking for doesn't exist or has been moved.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link to="/" className="btn-primary">Back to Home</Link>
          <Link to="/contact" className="btn-ghost">Contact Us</Link>
        </div>
      </div>
    </Section>
  )
}
