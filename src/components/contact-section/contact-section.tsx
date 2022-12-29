import bgPatternContactSection from '/assets/bg-pattern-home-6-about-5.svg'

import './contact-section.css'
import { Wrapper } from '../wrapper/wrapper'

export function ContactSection() {
  return (
    <div className='contact'>
      <Wrapper>
        <div className='contact-content'>
          <h3>Ready to get started?</h3>
          <a href='/contact/'>contact us</a>
        </div>
      </Wrapper>
      <img className='pattern' src={bgPatternContactSection} alt='bg pattern' aria-hidden={true} />
    </div>
  )
}
