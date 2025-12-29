import React from 'react'
import { motion } from 'framer-motion'

/**
 * ScrollReveal
 * Props:
 *  - as: tag to render (default: 'div')
 *  - children
 *  - className
 *  - delay (seconds)
 *  - direction: 'up'|'down'|'left'|'right' (controls initial offset)
 *  - distance: number of px offset for initial position
 *  - duration: animation duration
 */
const ScrollReveal = ({
  as = 'div',
  children,
  className,
  delay = 0,
  direction = 'up',
  distance = 24,
  duration = 0.6,
  ...rest
}) => {
  const initial = {
    opacity: 0,
    x: direction === 'left' ? -distance : direction === 'right' ? distance : 0,
    y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
  }

  const animate = { opacity: 1, x: 0, y: 0 }

  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

export default ScrollReveal
