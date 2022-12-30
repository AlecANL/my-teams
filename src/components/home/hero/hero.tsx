import bgPatternHome1 from '/assets/bg-pattern-home-1.svg'
import bgPatternHome2 from '/assets/bg-pattern-home-2.svg'

import './hero.css'
import { Wrapper } from '../../wrapper/wrapper'

export function HeroHome() {
  return (
    <section className='hero'>
      <Wrapper>
        <div className='hero-content'>
          <h2>
            Find the best <span>talent</span>
          </h2>
          <p>
            Finding the right people and building high performing teams can be hard. Most companies aren't tapping into the abundance of
            global talent. We're about to change that.
          </p>
        </div>
      </Wrapper>
      <div className='box-image'>
        <img className='hero-image2' src={bgPatternHome2} alt='hero image 2' aria-hidden={true} />
      </div>
      <img className='hero-image1' src={bgPatternHome1} alt='hero image 1' aria-hidden={true} />
    </section>
  )
}
