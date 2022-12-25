import React from 'react'
import "./skills.css";
import Influencer from './Influencer';
import Business from './Business';
import Creator from './Creator';
const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Our Services</h2>
        <span className="section__subtitle">Service Truly Different</span>

        <div className="skills__container grid">
        <Influencer/>
        <Business/>
        <Creator/>
        </div>
    </section>
  )
}

export default Skills