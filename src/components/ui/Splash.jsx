import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { siteInfo } from '../../data/site'

const MIN_DURATION = 2200 // أقل مدة يظهر فيها السبلاش (بالمللي ثانية)

export default function Splash({ children }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const start = performance.now()
    let timer

    const finish = () => {
      const elapsed = performance.now() - start
      timer = setTimeout(() => setVisible(false), Math.max(0, MIN_DURATION - elapsed))
    }

    // استنى تحميل الصفحة كلها (صور وخطوط) وبعدها اقفل السبلاش
    if (document.readyState === 'complete') finish()
    else window.addEventListener('load', finish, { once: true })

    return () => {
      clearTimeout(timer)
      window.removeEventListener('load', finish)
    }
  }, [])

  // منع السكرول وقت ظهور السبلاش
  useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [visible])

  return (
    <>
      {children}
      <AnimatePresence>
        {visible && (
          <motion.div
            key="splash"
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
            role="status"
            aria-label="Loading"
          >
            {/* خلفية ناعمة */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(11,95,255,0.08),transparent_60%)]" />

            <div className="relative flex h-44 w-44 items-center justify-center sm:h-52 sm:w-52">
              {/* توهج نابض */}
              <span className="splash-glow absolute inset-6 rounded-full bg-brand-primary/20 blur-2xl" />

              {/* الحلقة */}
              <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100" fill="none">
                <defs>
                  <linearGradient id="splash-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#00A3FF" />
                    <stop offset="100%" stopColor="#0B5FFF" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="46" stroke="#E6F0FF" strokeWidth="2.5" />
                <circle
                  className="splash-arc"
                  cx="50"
                  cy="50"
                  r="46"
                  stroke="url(#splash-grad)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="90 200"
                />
              </svg>

              {/* نقطة صغيرة بتلف مع الحلقة */}
              <span className="splash-orbit absolute inset-0">
                <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-accent shadow-[0_0_12px_3px_rgba(0,163,255,0.6)]" />
              </span>

              {/* اللوجو */}
              <motion.img
                src={siteInfo.logo}
                alt={siteInfo.name}
                className="relative h-20 w-auto max-w-[6.5rem] object-contain sm:h-24 sm:max-w-[7.5rem]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.25, 0.8, 0.25, 1] }}
              />
            </div>

            <motion.p
              className="relative mt-8 font-display text-sm font-semibold uppercase tracking-[0.35em] text-brand-navy/70"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {siteInfo.shortName}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
