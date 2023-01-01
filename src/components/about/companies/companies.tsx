import { Wrapper } from '../../wrapper/wrapper'
import companyListJson from '../../../data/companies.json'
import bgPattern from '/assets/bg-pattern-home-3.svg'

import './companies.css'

interface ICompany {
  id: number
  url: string
  name: string
}

export function Companies() {
  const companyList: ICompany[] = companyListJson

  return (
    <section className='companies'>
      <Wrapper>
        <div className='companies-content'>
          <h3>Some of our clients</h3>
          <div className='company-content-list'>
            {companyList.map((company: ICompany) => (
              <img className='company-logo' src={company?.url} alt={`logo ${company?.name}`} />
            ))}
          </div>
        </div>
      </Wrapper>
      <img className='bg-about-pattern' src={bgPattern} alt='bg pattern' aria-hidden={true} />
    </section>
  )
}
