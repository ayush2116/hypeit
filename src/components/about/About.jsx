import React from 'react'
import "./about.css";
import AboutImg from "../../assets/market.jpg";
// import CV from "../../assets/john-Cv.pdf";
import Info from './Info';
const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Us</h2>
        <span className="section__subtitle">What We Do</span>

        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img"/>

            <div className="about__data">
                <Info/>
                {/* <p className="about__description">
                    we help you get influencers while u sit back and watch your brand grow and reach success.
                </p> */}
            </div>
        </div>
    </section>
  )
}

export default About