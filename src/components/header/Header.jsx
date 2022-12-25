import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logohai.png";
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
        <div href="#home">
        <img  src={Logo} alt="logo" className="logo" />
        {/* <a href="#home" className="nav__logo">
          Hype 
          <span className="nav__smalllogo">it up</span>
        </a> */}
        </div>
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
                        <i className="uil uil-user nav__icon"></i>About Us
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#skills" className="nav__link">
                        <i className="uil uil-file-alt nav__icon"></i>Key Features
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#testimonials" className="nav__link">
                        <i className="uil uil-briefcase nav__icon"></i>Survey
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
