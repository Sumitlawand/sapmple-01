import React from 'react'
import './Footer.css'
import logo_big from '../Assets/images/logo_big.png'
import instagram_icon from '../Assets/images/instagram_icon.png';
import whatsapp_icon from '../Assets/images/whatsapp_icon.png';
import pintester_icon from '../Assets/images/pintester_icon.png';
export const Footer = () => {
  return (
<div className="footer">
    <div className="footer-logo">
        <img src={logo_big} alt=''/>
        <p>SHOPPER</p>
    </div>
    <ul className='footer-list'>
 <li>Company</li>
 <li>Product</li>
 <li>Office</li>
 <li>About</li>
 <li>Contact</li>
    </ul>
   <div className="footer-social-icon">
    <div className="footer-icon-container">
        <img src={pintester_icon} alt='' />
    </div>
    <div className="footer-icon-container">
        <img src={instagram_icon} alt='' />
    </div>
    <div className="footer-icon-container">
        <img src={whatsapp_icon} alt='' />
    </div>
    
   </div>
   <hr/>
   <div className="footer-copyright">
    
    <p className='copy'>Copyright @ 2024 All Right Reserved</p>
   </div>

</div>
    )
}
