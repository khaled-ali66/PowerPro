import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { Section } from '../components/ui/Section'
import { siteInfo } from '../data/site'
import { Mail, MapPin, Phone, Clock } from 'lucide-react'
import { fadeLeft, fadeRight } from '../lib/motion'

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(6, 'Please enter a valid phone number'),
  subject: z.string().min(3, 'Please enter a subject'),
  message: z.string().min(10, 'Please enter a message (at least 10 characters)'),
})

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  })

  const onSubmit = async (data) => {
    setStatus('submitting')
    // Prepared for backend integration; do not actually send messages per requirements
    await new Promise((resolve) => setTimeout(resolve, 600))
    setStatus('ready')
    console.info('Contact form submission (prepared for backend):', data)
    reset()
  }

  return (
    <>
      <Section className="pt-10">
        <nav className="text-sm text-text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link to="/" className="hover:text-brand-primary">Home</Link></li>
            <li>/</li>
            <li className="text-text-primary">Contact</li>
          </ol>
        </nav>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="section-eyebrow">Contact</span>
            <h1 className="mt-2 font-display text-3xl font-bold text-brand-navy sm:text-4xl lg:text-5xl">Let's get in touch</h1>
            <p className="mt-4 max-w-xl text-lg text-text-secondary">
              We will be happy to answer your questions. Use the form below or reach us directly via the details provided.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <motion.div {...fadeLeft} className="card p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-sky/70 text-brand-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-navy">Phone</p>
                    <p className="text-sm text-text-secondary">{siteInfo.phoneDisplay}</p>
                  </div>
                </div>
              </motion.div>
              <motion.div {...fadeRight} className="card p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-sky/70 text-brand-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-navy">Email</p>
                    <a href={`mailto:${siteInfo.email}`} className="text-sm text-text-secondary hover:text-brand-primary">{siteInfo.email}</a>
                  </div>
                </div>
              </motion.div>
              <motion.div {...fadeLeft} className="card p-6 sm:col-span-2">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-sky/70 text-brand-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-navy">Address</p>
                    <p className="text-sm text-text-secondary">{siteInfo.address}</p>
                  </div>
                </div>
              </motion.div>
              <motion.div {...fadeRight} className="card p-6 sm:col-span-2">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-sky/70 text-brand-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-navy">Hours</p>
                    <p className="text-sm text-text-secondary">{siteInfo.hours}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div {...fadeRight} className="card h-fit p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-brand-navy">Send us a message</h2>
            <p className="mt-2 text-text-secondary">Form validation is enabled. This form is prepared for backend integration.</p>
            <form className="mt-6 grid gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-brand-navy" htmlFor="name">Name</label>
                  <input
                    id="name"
                    className={`mt-2 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/30 ${errors.name ? 'border-red-400' : 'border-border'}`}
                    {...register('name')}
                  />
                  {errors.name ? <p className="mt-1 text-xs text-red-500">{errors.name.message}</p> : null}
                </div>
                <div>
                  <label className="text-sm font-medium text-brand-navy" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    className={`mt-2 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/30 ${errors.email ? 'border-red-400' : 'border-border'}`}
                    {...register('email')}
                  />
                  {errors.email ? <p className="mt-1 text-xs text-red-500">{errors.email.message}</p> : null}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-brand-navy" htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    className={`mt-2 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/30 ${errors.phone ? 'border-red-400' : 'border-border'}`}
                    {...register('phone')}
                  />
                  {errors.phone ? <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p> : null}
                </div>
                <div>
                  <label className="text-sm font-medium text-brand-navy" htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    className={`mt-2 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/30 ${errors.subject ? 'border-red-400' : 'border-border'}`}
                    {...register('subject')}
                  />
                  {errors.subject ? <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p> : null}
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-brand-navy" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className={`mt-2 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/30 ${errors.message ? 'border-red-400' : 'border-border'}`}
                  {...register('message')}
                />
                {errors.message ? <p className="mt-1 text-xs text-red-500">{errors.message.message}</p> : null}
              </div>
              <button type="submit" className="btn-primary" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Preparing...' : 'Send Message'}
              </button>
              {status === 'ready' ? (
                <p className="text-sm text-emerald-600">Form validated and prepared for backend integration. No message was sent.</p>
              ) : null}
            </form>
          </motion.div>
        </div>
      </Section>
      <Section className="pt-0">
        <div className="overflow-hidden rounded-2xl shadow-card ring-1 ring-black/5">
          <iframe
            title="Power Pro Technology Electric location"
            src={siteInfo.mapEmbed}
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>
    </>
  )
}
