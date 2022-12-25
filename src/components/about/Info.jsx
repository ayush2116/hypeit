import React from 'react'

const Info = () => {
  return (
    <div className="about__info">
        <div className="about__box">
        <i class='bx bx-signal-5 about__icon'></i>
            <h3 className="about__title">Collaborate with creators. Fast,easy,fun</h3>
            <span className="about__subtitle"></span>
        </div>
        <div className="about__box">
        <i class='bx bx-money-withdraw about__icon'></i>
            <h3 className="about__title">All your content at your fingertips</h3>
            <span className="about__subtitle"></span>
        </div>
        <div className="about__box">
        <i class='bx bx-support about__icon'></i>
            <h3 className="about__title">our Support team us just a click away</h3>
            <span className="about__subtitle"></span>
        </div>
    </div>
  )
}

export default Info