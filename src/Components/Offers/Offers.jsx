import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/images/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-right">
            <h1>Excluseve</h1>
            <h1>Offers for you</h1>
            <p>ONLY ON BEST SELLERS PRODUCT</p>
            <button>Check  Now</button>
        </div>
      <dev className="offers-left">
        <img src={exclusive_image} alt=''/>
      </dev>
    </div>
  )
}

export default Offers
