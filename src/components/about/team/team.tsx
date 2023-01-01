import { Wrapper } from '../../wrapper/wrapper'
import teamListJson from '../../../data/team.json'
import bgPattern1 from '/assets/bg-pattern-home-4-about-3.svg'
import bgPattern2 from '/assets/bg-pattern-about-2-contact-1.svg'

import './team.css'
import { TeamCard } from '../team-card/team-card'

export function TeamMembers() {
  return (
    <section className='team'>
      <Wrapper>
        <div className='team-content'>
          <h3>Meet the directors</h3>
          <div className='team-members-list'>
            {teamListJson.map(teamMember => (
              <TeamCard key={teamMember.id} teamCard={teamMember} />
            ))}
          </div>
        </div>
      </Wrapper>
      <img className='bg_team-pattern2' src={bgPattern1} alt='bg pattern' aria-hidden={true} />
      <img className='bg_team-pattern1' src={bgPattern2} alt='bg pattern' aria-hidden={true} />
    </section>
  )
}
