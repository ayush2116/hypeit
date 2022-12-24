import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <footer className='footer'>
<div className="footer__container container">
    <h1 className="footer__title">HYPE</h1>
    <div className='footer__tiitle'>itup</div>
    <ul className="footer__list">
        <li>
            <a href="#about" className='footer__link'>About</a>
        </li>  
        <li>
            <a href="#skills" className='footer__link'>Key Features</a>
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