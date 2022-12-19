import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <footer className='footer'>
<div className="footer__container container">
    <h1 className="footer__title">hypeitup</h1>
    <ul className="footer__list">
        <li>
            <a href="#about" className='footer__link'>About</a>
        </li>  
        <li>
            <a href="#portfolio" className='footer__link'>project</a>
        </li>
        <li>
            <a href="#testimonials" className='footer__link'>Testimonials</a>
        </li>
    </ul>
    <div className="footer__social">
    <a href="#insta" className="footer__social-link" target="_blank">
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