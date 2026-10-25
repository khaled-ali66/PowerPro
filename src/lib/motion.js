const ease = [0.25, 0.8, 0.25, 1]
const viewport = { once: true, margin: '-80px' }
const transition = { duration: 0.7, ease }

export const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport,
  transition,
}

// يظهر من الشمال
export const fadeLeft = {
  initial: { opacity: 0, x: -80 },
  whileInView: { opacity: 1, x: 0 },
  viewport,
  transition,
}

// يظهر من اليمين
export const fadeRight = {
  initial: { opacity: 0, x: 80 },
  whileInView: { opacity: 1, x: 0 },
  viewport,
  transition,
}

// للعناصر داخل grid: أول عمود من الشمال، آخر عمود من اليمين، والأوسط من تحت
export function slideIn(index, cols = 3) {
  const col = index % cols
  const base = col < (cols - 1) / 2 ? fadeLeft : col > (cols - 1) / 2 ? fadeRight : fadeUp
  return { ...base, transition: { ...transition, delay: Math.floor(index / cols) * 0.05 } }
}
