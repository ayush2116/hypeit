import React from 'react'

const Info = () => {
  return (
    <div className="about__info">
        <div className="about__box">
        <i class='bx bx-signal-5 about__icon'></i>
            <h3 className="about__title">Connect</h3>
            <span className="about__subtitle">to 100+ influencers</span>
        </div>
        <div className="about__box">
        <i class='bx bx-money-withdraw about__icon'></i>
            <h3 className="about__title">Grow</h3>
            <span className="about__subtitle">direct growth</span>
        </div>
        <div className="about__box">
        <i class='bx bx-support about__icon'></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">24/7 support</span>
        </div>
    </div>
  )
}

export default Info