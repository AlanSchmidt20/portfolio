import './index.scss'
import React, { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters/index'
import Loader from 'react-loaders'
import portfolioData from '../../data/portfolio.json'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port) => {
          return (
            <div key={port.id} className="image-box">
              <img
                src={port.cover}
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <p className="title">{port.title}</p>
                <h4 className="description">{port.description}</h4>
                <button
                  className="button"
                  onClick={() => window.open(port.url)}
                >
                  VIEW
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            strArray={'Portfolio'.split('')}
            letterClass={letterClass}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
