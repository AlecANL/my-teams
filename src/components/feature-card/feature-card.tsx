import './feature-card.css'

interface IFeatureCard {
  icon: string
  title: string
  id: number
  description: string
}

interface IFeatureCardProps {
  feature: IFeatureCard
}

export function FeatureCard(props: IFeatureCardProps) {
  const { feature } = props

  return (
    <div className='feature-card'>
      <div className='image-box'>
        <div className='box'>
          <i className={feature?.icon} aria-hidden={true}></i>
        </div>
      </div>
      <h4> {feature?.title} </h4>
      <p> {feature?.description} </p>
    </div>
  )
}
