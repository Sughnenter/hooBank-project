import React from 'react'
import { feedback } from '../constants'
import styles from '../styles'
import FeedbackCard from './FeedbackCard'
import ScrollReveal from './ScrollReveal'

function Testimonials  () {
  return (
    <ScrollReveal as="section" id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`} direction="up">
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient' />

      <div className='w-full flex justify-between items-center 
        md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <ScrollReveal as="h1" className={styles.heading2} direction="up">
          What people are <br className='sm:block hidden'/>saying about us
        </ScrollReveal>

        <div className='w-full md:mt-0 mt-6'>
          <ScrollReveal as="p" className={`${styles.paragraph} text-left max-w-[450px]`} direction="up" delay={0.08}>
            Everything you need to accept card payments and grow your business anywhere on the planet.
          </ScrollReveal>
        </div>
      </div>
      <div className='flex flex-wrap xs:justify-start justify-center w-full feedback-container relative z-[1]'>
          {feedback.map((card, i) =>(
            <ScrollReveal key={card.id} as="div" delay={i * 0.06} className="w-full md:w-auto">
              <FeedbackCard {...card} />
            </ScrollReveal>
          ))}
      </div>
    </ScrollReveal>
  )
}

export default Testimonials