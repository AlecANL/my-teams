import React from 'react'
import { Navigation } from '../navigation/navigation'
import { Wrapper } from '../wrapper/wrapper'

import './header.css'

export function Header() {
  const [isActive, setActive] = React.useState<boolean>(false)

  function toggleActiveMenu() {
    setActive(!isActive)
    console.log('toggleActiveMenu', isActive)
  }

  return (
    <header className='header'>
      <Wrapper>
        <div className='header-content'>
          <h1>myteam</h1>
          <i onClick={toggleActiveMenu} className='icon-menu'></i>
          <Navigation isActiveMenu={isActive} toggleActiveMenu={toggleActiveMenu} />
        </div>
      </Wrapper>
    </header>
  )
}
