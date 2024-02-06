import React from 'react'
import './Newsletter.css'
export const Newslatter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusevie offers in your email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email"  placeholder='Enter your email'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}
export default Newslatter;