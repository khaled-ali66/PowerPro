import { Link } from 'react-router-dom'
import { Facebook, Linkedin, Mail, MapPin, Phone, Clock } from 'lucide-react'
import { siteInfo, navLinks } from '../../data/site'

export default function Footer() {
  return (
    <footer className="mt-16 bg-brand-navy text-white">
      <div className="container-custom section-padding">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img src={siteInfo.logo} alt={siteInfo.name} className="h-14 w-auto" />
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold">Power Pro Technology Electric</span>
                <span className="text-xs uppercase tracking-[0.3em] text-white/60">Low Voltage Panels</span>
              </div>
            </div>
            <p className="mt-6 max-w-xl text-white/80">
              {siteInfo.description}
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold">Contact Info</h3>
            <ul className="mt-4 space-y-3 text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-white/60" />
                <span>{siteInfo.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-white/60" />
                <span>{siteInfo.phoneDisplay}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-white/60" />
                <a href={`mailto:${siteInfo.email}`} className="transition-colors hover:text-white">{siteInfo.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-white/60" />
                <span>{siteInfo.hours}</span>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-3">
              <a href={siteInfo.social.facebook} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={siteInfo.social.linkedin} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand-primary">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold">Our Company</h3>
            <ul className="mt-4 space-y-2 text-white/80">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="transition-colors hover:text-white">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-custom flex flex-col items-center justify-between gap-3 py-4 text-sm text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {siteInfo.shortName}. All rights reserved.</p>
          <p>Design & Developed by Digital Mas Agency</p>
        </div>
      </div>
    </footer>
  )
}
