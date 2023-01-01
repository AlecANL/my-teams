import { Wrapper } from '../../wrapper/wrapper'
import bgPattern from '/assets/bg-pattern-about-1-mobile-nav-1.svg'

import './hero.css'

export function HeroAbout() {
  return (
    <main className='hero-about'>
      <Wrapper>
        <div className='hero-about-content'>
          <h1>About</h1>
          <p>
            We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive
            innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We'll bring those
            teams to you.
          </p>
        </div>
      </Wrapper>
      <img src={bgPattern} alt='bg pattern' aria-hidden={true} />
    </main>
  )
}
