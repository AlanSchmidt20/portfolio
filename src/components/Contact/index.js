import './index.scss'
import Loader from 'react-loaders'
import { useEffect, useState, useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters/index'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    const timer = setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_4plv72d',
        'template_buqcbts',
        form.current,
        'CafOybHkd2OQ45CHZ'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again :)')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm excited to connect with you! If you have any questions,
            comments, or just want to chat about programming, I'm all ears. I'm
            also open to exploring new opportunities and taking on new projects.
            So, if you're interested in working together or have a potential job
            opportunity, please don't hesitate to contact me. I look forward to
            hearing from you and working together to build great things!
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Alan Schmidt
          <br />
          United States,
          <br />
          Miami, Florida <br />
          <a
            href="mailto:alu.schmidt@hotmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <span>alu.schmidt@hotmail.com</span>
          </a>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[25.857815470726017, -80.23676651931586]}
            zoom={11}
          >
            <TileLayer
              attribution='&copy; <a href="http://stamen.com">Stamen</a> | &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
              url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png"
            />
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
