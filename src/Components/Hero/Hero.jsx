import React from 'react'
import hand_icon from '../Assets/images/hand_icon.png'
import arrow from '../Assets/images/arrow.png'
import hero_image from '../Assets/images/hero_image.png'
import './Hero.css'
function Hero() {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
       
        <div>
            <div className="hand-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt=''/>
            </div>
            <p>collection </p>
            <p>for evryone</p>

        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow} alt=''/>
        </div>
        </div>
        <div className="hero-right">
          <img  src={hero_image} alt=''/>
        </div>
    </div>
  )
}

export default Hero