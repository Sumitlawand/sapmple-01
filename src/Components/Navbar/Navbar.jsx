import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/images/logo.png'
import cart_icon from '../Assets/images/cart_icon.png'
import './Navbar.css'
function Navbar() {
  const [menu, setMenu] = useState("Shop");
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt=''/>
        <p>SHOPPER</p>
      </div>
      
        <ul className="nav-menu">
          <li onClick={()=>{setMenu("Shop")}}><Link style={{textDecoration:'none'}} to='/'> Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("Man")}}><Link style={{textDecoration:'none'}} to='/Mans'> Mans</Link>{menu==="Man"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("Woman")}}><Link style={{textDecoration:'none'}} to='/Woman'> Woman</Link>{menu==="Woman"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("Kid")}}><Link style={{textDecoration:'none'}} to='/Kids'> Kid</Link>{menu==="Kid"?<hr/>:<></>}</li>
        </ul>

        <div className="nav-login-card">
        <Link style={{textDecoration:'none'}} to='/Loginsingup'><button>Log in</button></Link>
        <Link style={{textDecoration:'none'}} to='/Card'><img src={cart_icon} alt=''/></Link>
        <div className='nav-card-count'>
         0</div>
        </div>
      
    </div>
  )
}

export default Navbar