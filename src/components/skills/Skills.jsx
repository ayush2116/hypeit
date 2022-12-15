import React from 'react'
import "./skills.css";
import Influencer from './Influencer';
import Business from './Business';
const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Key Features</h2>
        <span className="section__subtitle">Highlights</span>

        <div className="skills__container grid">
        <Influencer/>
        <Business/>
        </div>
    </section>
  )
}

export default Skills