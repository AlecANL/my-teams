import './testimonial-card.css'
import quoteIcon from '/assets/icon-quotes.svg'

interface IQuote {
  quote: string
  name: string
  position: string
  cover: string
  id: number
}

interface IQuoteProps {
  quote: IQuote
}

export function TestimonialCard(props: IQuoteProps) {
  const { quote } = props ?? {}

  return (
    <figure className='testimonial-card'>
      <img className='quote-icon' src={quoteIcon} alt='quote icon' aria-hidden={true} />
      <blockquote>{quote?.quote}</blockquote>
      <figcaption>
        <span className='name'>{quote?.name} </span>
        <span className='position'> {quote?.position} </span>
      </figcaption>
      <div className='user-box'>
        <img src={quote?.cover} alt={`image ${quote?.name} profile`} />
      </div>
    </figure>
  )
}
