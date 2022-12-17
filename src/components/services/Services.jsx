import React, { useState } from "react";
import "./services.css"
const Services = () => {

    const[toggleState,setToggleState]=useState(1);
    
    const toggleTab = (index) =>{
        setToggleState(index);
    }
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What we offer</span>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title"> product <br /> designer </h3>
          </div>
          <span className="services__button" onClick={()=> toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className= {toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title"> product wala</h3>
              <p className="services__modal-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perferendis earum accusantium veniam unde modi aut nam minima
                quod nemo quo!
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Lorem, ipsum dolor.</p>
                </li>
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Lorem, ipsum dolor.</p>
                </li>
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Lorem, ipsum dolor.</p>
                </li>
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Lorem, ipsum dolor.</p>
                </li>
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Lorem, ipsum dolor.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title"> ui <br /> designer</h3>
          </div>
          <span className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className="services__modal">
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">ui ux designer </h3>
              <p className="services__modal-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perferendis earum accusantium veniam unde modi aut nam minima
                quod nemo quo!
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Lorem, ipsum dolor.</p>
                </li>
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Lorem, ipsum dolor.</p>
                </li>
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Lorem, ipsum dolor.</p>
                </li>
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Lorem, ipsum dolor.</p>
                </li>
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Lorem, ipsum dolor.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">visual <br /> designer </h3>
          </div>
          <span className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className="services__modal">
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title"> visual bhai</h3>
              <p className="services__modal-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perferendis earum accusantium veniam unde modi aut nam minima
                quod nemo quo!
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Lorem, ipsum dolor.</p>
                </li>
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Lorem, ipsum dolor.</p>
                </li>
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Lorem, ipsum dolor.</p>
                </li>
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Lorem, ipsum dolor.</p>
                </li>
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Lorem, ipsum dolor.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
