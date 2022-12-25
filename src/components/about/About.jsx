import React from 'react'
import "./about.css";
import AboutImg from "../../assets/market.jpg";
// import CV from "../../assets/john-Cv.pdf";
import Info from './Info';
const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Us</h2>
        <span className="section__subtitle">get set GROW!!</span>

        <div className="about__container container grid">
            <img  src={AboutImg} alt="" className="about__img"/>

            <div className="about__data">
                <Info/>
                <p className="about__description">
                    Hype up your product to drive growth at every stage of your customes journey
                </p>
            </div>
        </div>
    </section>
  )
}

export default About