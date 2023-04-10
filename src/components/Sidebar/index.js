import './index.scss'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ALogo from '../../assets/images/logo-A.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons'
import Footer from '../Footer/index'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={ALogo} alt="logo" />
        {/* <img src={} alt="sub-logo" /> */}
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="home-link"
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon
          icon={faClose}
          color="#ffd700"
          size="3x"
          className="close-icon"
          onClick={() => setShowNav(false)}
        />
        {showNav && <Footer />}
      </nav>

      <ul className={showNav ? 'open' : 'close'}>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/alan-schmidt-b62377165/"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="contact-icon"
            />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/AlanSchmidt20"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="contact-icon"
            />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="discord:live:Alan Schmidt#2207"
          >
            <FontAwesomeIcon
              icon={faDiscord}
              color="#4d4d4e"
              className="contact-icon"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  )
}

export default Sidebar
