import { Wrapper } from '../../wrapper/wrapper'
import './testimonials.css'

export function Testimonials() {
  return (
    <div className='testimonials'>
      <Wrapper>
        <div className='testimonials-content'>
          <h3>
            Delivering real results for top companies. Some of our <span>success stories.</span>
          </h3>
          <div className='testimonials-list'></div>
        </div>
      </Wrapper>
    </div>
  )
}
