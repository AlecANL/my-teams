import { Wrapper } from '../../wrapper/wrapper'
import bgHomePattern from '/assets/bg-pattern-home-3.svg'
import featureListJson from '../../../data/features.json'

import './features.css'
import { FeatureCard } from '../../feature-card/feature-card'

export function Features() {
  return (
    <section className='features' aria-label='features section'>
      <Wrapper>
        <div className='features-content'>
          <h3>Build & manage distributed teams like no one else.</h3>

          <div className='features-list'>
            {featureListJson.map(feature => (
              <FeatureCard feature={feature} key={feature?.id} />
            ))}
          </div>
        </div>
      </Wrapper>
      <img className='f_image-pattern' src={bgHomePattern} alt='pattern' aria-hidden={true} />
    </section>
  )
}
