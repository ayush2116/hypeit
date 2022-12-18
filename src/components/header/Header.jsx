import React, { useState } from "react";
import "./Header.css";
const Header = () => {
    // togglemenu
    const[Toggle,showMenu]= useState(false);

//     
    const showBar = () => showMenu(!Toggle)
    

    // function linkAction(){
    //     const navMenu = document.getElementById('nav-menu')

    //     navMenu.classList.remove('show-menu')
    // }
    // navLink.forEach(n => n.addEventListener('click', linkAction))
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Hypeitup
        </a>
        <div id="nav-menu"className={Toggle? "nav__menu show-menu":
    "nav__menu"} >
            <ul className="nav__list grid" onClick={showBar} >
                <li className="nav__item">
                    <a href="#home" className="nav__link active-link">
                        <i className="uil uil-estate nav__icon"></i>Home
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#about" className="nav__link">
                        <i className="uil uil-user nav__icon"></i>About
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#skills" className="nav__link">
                        <i className="uil uil-file-alt nav__icon"></i>Process
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#testimonials" className="nav__link">
                        <i className="uil uil-briefcase nav__icon"></i>Services
                    </a>
                </li>
                {/* <li className="nav__item">
                    <a href="#portfolio" className="nav__link">
                        <i className="uil uil-scenery nav__icon"></i>Portfolio
                    </a>
                </li> */}
                <li className="nav__item">
                    <a href="#contact" className="nav__link">
                        <i className="uil uil-message nav__icon"></i>Contact
                    </a>
                </li>
            </ul>

            <i id="nav-close" class="uil uil-times nav__close" onClick={()=> showMenu(!Toggle)}></i>
        </div>
        <div id="nav-toggle"className="nav__toggle" onClick={()=> showMenu(!Toggle)}>
        <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
