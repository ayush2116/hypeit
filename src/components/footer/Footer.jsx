import React from 'react'
import "./footer.css"
import Logo from "../../assets/logofinal.png"
const Footer = () => {
  return (
    <footer className='footer'>
<div className="footer__container container">
    <img src={Logo} alt="logo" className='logos'/>
    <ul className="footer__list">
        <li>
            <a href="#about" className='footer__link'>About</a>
        </li>  
        <li>
            <a href="#skills" className='footer__link'>Our Services</a>
        </li>
        <li>
            <a href="#testimonials" className='footer__link'>Survey</a>
        </li>
    </ul>
    <div className="footer__social">
    <a href="https://www.instagram.com/hypeitup.official/" className="footer__social-link" target="blank">
          <i class="bx bxl-instagram"></i>  
        </a>

        <a href="#social" className="footer__social-link" target="_blank">
        <i class="bx bxl-dribbble"></i>  
        </a>
        {/* <a href="#social" className="footer__social-link" target="_blank">
        <i class="bx bxl-github-alt"></i>  
        </a> */}
    </div>
    <span className='footer__copy'>2022 &#169; Hypeitup. All rights reserved</span>
</div>
    </footer>
  )
}

export default Footer