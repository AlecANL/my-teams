import menuNavJson from '../../data/menu-navigation.json'
import bgPatternNavImage from '/assets/bg-pattern-about-1-mobile-nav-1.svg'

import './navigation.css'

interface IMenuProps {
  id: number
  name: string
  url: string
}

interface INavProps {
  isActiveMenu: boolean
  toggleActiveMenu: () => void
}

export function Navigation(props: INavProps) {
  const { isActiveMenu, toggleActiveMenu } = props ?? {}

  const menuClassName = `nav-list ${isActiveMenu ? 'active' : ''}`
  const layerClassName = `layer ${isActiveMenu ? 'active' : ''}`

  const menuNavList: IMenuProps[] = menuNavJson

  return (
    <nav className='nav'>
      <div className={layerClassName}></div>
      <ul className={menuClassName}>
        <i onClick={toggleActiveMenu} className='icon-close'></i>
        <img className='bg-nav-pattern' src={bgPatternNavImage} alt='bg pattern nav' aria-hidden={true} />
        {menuNavList.map(item => (
          <li key={item.id}>
            <a href={item.url}> {item.name} </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
