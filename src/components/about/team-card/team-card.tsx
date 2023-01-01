import React from 'react'
import './team-card.css'

interface ITeamCard {
  id: number
  name: string
  position: string
  description: string
  image: string
  socialMedia: ITeamCardSocialMedia[]
}

interface ITeamCardSocialMedia {
  name: string
  link: string
  icon: string
}

interface ITeamCardProps {
  teamCard: ITeamCard
}

export function TeamCard(props: ITeamCardProps) {
  const [isOpen, setOpen] = React.useState<boolean>(false)
  const { teamCard } = props ?? {}

  function handleShowCardDetail() {
    setOpen(!isOpen)
  }

  const showClassName = `${isOpen ? 'show' : ''}`

  return (
    <div className='team-card'>
      <div className='team-card-helper'>
        <div className='front-box'>
          <div className='user-box'>
            <img src={teamCard?.image} alt={`${teamCard?.name} team of myTeam`} />
          </div>
          <span className='name'> {teamCard?.name} </span>
          <span className='position'> {teamCard?.position} </span>
        </div>
        <div className={`back-box ${showClassName}`}>
          <span className='name'> {teamCard?.name} </span>
          <p className='description'> {teamCard?.description} </p>
          <div className='social__box'>
            {teamCard?.socialMedia?.map((socialMedia: ITeamCardSocialMedia, idx) => (
              <a
                rel='noopener noreferrer'
                target='_blank'
                href={socialMedia?.link}
                aria-label={`link url to ${socialMedia?.name}`}
                key={idx}
              >
                <i className={socialMedia?.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      <button className={showClassName} onClick={handleShowCardDetail}>
        <i className={`front-icon icon-close1 ${showClassName}`}></i>
      </button>
    </div>
  )
}
