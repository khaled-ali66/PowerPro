import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { siteInfo, navLinks } from '../../data/site'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
      {/* top info bar: blue background, white text */}
      <div className="hidden bg-brand-primary text-white lg:block">
        <div className="container-custom flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-6">
            <a href={`mailto:${siteInfo.email}`} className="flex items-center gap-2 transition-opacity hover:opacity-80">
              <Mail className="h-4 w-4" />
              <span>{siteInfo.email}</span>
            </a>
            <a href={`tel:${siteInfo.phones[0].replace(/\s/g, '')}`} className="flex items-center gap-2 transition-opacity hover:opacity-80">
              <Phone className="h-4 w-4" />
              <span>{siteInfo.phoneDisplay}</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/80">{siteInfo.name}</span>
            <div className="flex items-center gap-3">
              <a href={siteInfo.social.facebook} target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-80">Facebook</a>
              <a href={siteInfo.social.linkedin} target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-80">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-custom flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={siteInfo.logo} alt={siteInfo.name} className="h-12 w-auto" />
          <div className="hidden sm:flex flex-col">
            <span className="font-display text-lg font-bold leading-tight text-brand-navy">Power Pro Technology Electric</span>
            <span className="text-xs uppercase tracking-[0.3em] text-text-muted">Low Voltage Panels</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors hover:text-brand-primary ${isActive ? 'text-brand-primary' : 'text-brand-navy'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/contact" className="btn-primary">Get Started</Link>
        </div>
        <button
          className="inline-flex items-center justify-center rounded-lg p-2 text-brand-navy lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-border/70 lg:hidden">
          <nav className="container-custom flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${isActive ? 'bg-brand-sky/60 text-brand-primary' : 'text-brand-navy hover:bg-surface-bg'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full">Get Started</Link>
          </nav>
        </div>
      ) : null}
    </header>
  )
}