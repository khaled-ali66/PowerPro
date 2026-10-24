import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.25, 0.8, 0.25, 1] },
}

export function Section({ className = '', children, ...props }) {
  return (
    <section className={`section-padding ${className}`} {...props}>
      <div className="container-custom">
        {children}
      </div>
    </section>
  )
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'center', className = '' }) {
  const alignClass = align === 'left' ? 'text-left items-start' : 'text-center items-center'
  return (
    <motion.div
      {...fadeUp}
      className={`section-heading flex flex-col ${alignClass} ${className}`}
    >
      {eyebrow ? <span className="section-eyebrow">{eyebrow}</span> : null}
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className={`section-subtitle ${align === 'left' ? 'mx-0' : 'mx-auto'}`}>{subtitle}</p> : null}
    </motion.div>
  )
}
