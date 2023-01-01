import { Wrapper } from '../../wrapper/wrapper'
import bgPattern1 from '/assets/bg-pattern-home-4-about-3.svg'
import bgPattern2 from '/assets/bg-pattern-home-5.svg'

import testimonialListJson from '../../../data/testimonials.json'

import { TestimonialCard } from '../../testimonial-card/testimonial-card'

import './testimonials.css'

export function Testimonials() {
  return (
    <section aria-label='testimonials of success stories' className='testimonials'>
      <Wrapper>
        <div className='testimonials-content'>
          <h3>
            Delivering real results for top companies. Some of our <span>success stories.</span>
          </h3>
          <div className='testimonials-list'>
            {testimonialListJson.map(quote => (
              <TestimonialCard key={quote.id} quote={quote} />
            ))}
          </div>
        </div>
      </Wrapper>
      <img className='bg-pattern1' src={bgPattern1} alt='bg pattern 1' aria-hidden={true} />
      <img className='bg-pattern2' src={bgPattern2} alt='bg pattern 2' aria-hidden={true} />
    </section>
  )
}
