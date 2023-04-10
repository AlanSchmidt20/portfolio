import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faReact,
  faJsSquare,
  faHtml5,
  faCss3,
  faJava,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15} //this is the time delay basically 1.5s
            />
          </h1>
          <p>
            Hello, my name is Alan Schmidt, and I'm a 22 years old from Buenos
            Aires, Argentina. Tennis has been a major part of my life ever since
            I was young, and I was fortunate enough to receive a tennis
            scholarship to play for the FNU tennis team in the United States.
            While I loved being a part of the team and treasured the experiences
            and memories I gained from it, technology has always been a passion
            of mine. Even as a child, I was always fascinated by computers and
            enjoyed experimenting with gadgets and software. As I grew older, my
            interest in programming only intensified, and I now find it
            incredibly rewarding to use my skills to build innovative and
            practical web applications.
          </p>
          <p>
            I specialize in using React, JavaScript, HTML, and CSS to build web
            applications that are both beautiful and functional. I enjoy the
            challenge of finding elegant solutions to complex problems, and I
            always aim to learn new technologies and stay up-to-date with the
            latest trends in web development, specially in React and JavaScript.
          </p>
          <p>
            In my free time, I enjoy playing video games, biking, and hanging
            out with friends. I'm currently trying to finish watching the
            Pokemon anime, but it's going faster than I can keep up! :)
            {/*            work on personal coding
            projects, and explore new technologies. I'm always eager to
            collaborate with other programmers and learn from their expertise.
            My ultimate goal as a programmer is to use my skills to create
            applications that have a positive impact on people's lives and make
            the world a better place. */}
          </p>
        </div>
        <div class="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJava} color="#28A4D9" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About

/*   
Loader types:
    "ball-clip-rotate-pulse" | 
    "ball-clip-rotate-multiple" |
    "ball-pulse-rise" |
    "ball-rotate" |
    "cube-transition" |
    "ball-zig-zag-deflect" |
    "line-scale" |
    "line-scale-pulse-out" |
    "line-scale-pulse-out-rapid" |
    "pacman" |
*/
