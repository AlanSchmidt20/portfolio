import './index.scss'
import LogoA from '../../../assets/images/logo-A.png'
import { useRef, useEffect } from 'react'
/* import LogoAoutlined from '../../../assets/images/logoAOutlined.svg'
 */ import LogoAoutlined from '../../../assets/images/logoAnimation.svg'
import gsap from 'gsap-trial'

const Logo = () => {
  const outlineLogoRef = useRef()

  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => {
        // Stop the animation here
        timeline.pause()
      },
    })

    timeline.fromTo(
      outlineLogoRef.current,
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power1.inOut',
      }
    )

    timeline
      .to(outlineLogoRef.current, {
        duration: 1.5,
        rotation: 360,
        ease: 'power2.inOut',
        repeat: 0,
        yoyo: true,
      })
      .to(outlineLogoRef.current, {
        duration: 1,
        rotation: 0,
        ease: 'power2.inOut',
      })

    // Delay the onComplete callback by 5 seconds
    timeline.delay(1)
  }, [])

  //ESTE POR AHORA EL MEJOR
  /*   useEffect(() => {
    const timeline = gsap.timeline()

    timeline.fromTo(
      outlineLogoRef.current,
      {
        opacity: 0,
        scaleX: 0,
        transformOrigin: '50% 50%',
      },
      {
        opacity: 1,
        scaleX: 1,
        duration: 2,
        ease: 'power1.inOut',
      }
    )

    timeline.to(outlineLogoRef.current, {
      duration: 3,
      rotationX: 180,
      transformOrigin: '50% 50%',
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true,
    })
  }, []) */

  return (
    <div className="logo-container">
      {/* <img className="solid-logo" src={LogoA} alt="A" /> */}
      <svg
        width="900pi"
        height="900pi"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/*         <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        > */}
        <image
          ref={outlineLogoRef}
          xlinkHref={LogoAoutlined}
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
        />
        {/*         </g> */}
      </svg>
    </div>
  )
}

export default Logo
