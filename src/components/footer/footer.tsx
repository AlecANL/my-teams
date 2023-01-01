import { Wrapper } from '../wrapper/wrapper'
import logo from '/assets/logo.svg'

import './footer.css'

export function Footer() {
  return (
    <footer>
      <Wrapper>
        <div className='footer-content'>
          <img className='footer-logo' src={logo} alt='logo for my-team' />
          <nav className='footer-nav' aria-label='footer navigation'>
            <ul>
              <li>
                <a href='/'>home</a>
              </li>
              <li>
                <a href='/about/'>about</a>
              </li>
            </ul>
          </nav>
          <address className='footer_address-box'>
            987 Hillcrest Lane <br />
            Irvine, CA <br />
            California 92714 <br />
            Call Us: 949-833-7432 <br />
          </address>
          <div className='footer_social-media'>
            <a aria-label={`link to facebook`} target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/'>
              <i className='icon-facebook'></i>
            </a>
            <a aria-label={`link to pinterest`} target='_blank' rel='noopener noreferrer' href='https://www.pinterest.com/'>
              <i className='icon-pint'></i>
            </a>
            <a aria-label={`link to twitter`} target='_blank' rel='noopener noreferrer' href='https://www.twitter.com/'>
              <i className='icon-twitter'></i>
            </a>
          </div>
          <p className='copy'>Copyright 2020. All Rights Reserved</p>
        </div>
      </Wrapper>
    </footer>
  )
}
