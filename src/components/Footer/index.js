import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <>
      <ul className="footer-container">
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
        <li>
          <a
            href="mailto:alu.schmidt@hotmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              color="#4d4d4e"
              className="contact-icon"
            />
          </a>
        </li>
      </ul>
    </>
  )
}

export default Footer
