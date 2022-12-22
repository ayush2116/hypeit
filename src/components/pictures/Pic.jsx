import { isVisible } from '@testing-library/user-event/dist/utils'
import React, { Fragment,useState } from 'react'
import CountUp from 'react-countup'
import ReactVisibilitySensor from 'react-visibility-sensor'
import "./pic.css"
const Pic = ({className, ...rest }) => {
    const [viewPortEntered , setViewPortEntered] = useState(false)
  return (
    <Fragment>

        <section className='counter'>
<div className="counter-row">
<div className="counter-column">
    <strong data-number="105127">
        <CountUp {...rest} start={viewPortEntered ? null : 0} end={105127} >
        {({ countUpRef}) => {
            return (
                <ReactVisibilitySensor
                active = {!viewPortEntered}
                onChange ={isVisible => {
                    if(isVisible){
                        setViewPortEntered(true);
                    }
                }}
                deployedCall
                >
                <span className='number' ref={countUpRef}></span>
                </ReactVisibilitySensor>

            )
        }}
        </CountUp>
    </strong> +
    <span>And Growing <br /> INFLUENCERS</span>
</div>

<div className="counter-column">
    <strong data-number="2200">
        <CountUp {...rest} start={viewPortEntered ? null : 0} end={2200} >
        {({ countUpRef}) => {
            return (
                <ReactVisibilitySensor
                active = {!viewPortEntered}
                onChange ={isVisible => {
                    if(isVisible){
                        setViewPortEntered(true);
                    }
                }}
                deployedCall
                >
                <span className='number' ref={countUpRef}></span>
                </ReactVisibilitySensor>

            )
        }}
        </CountUp>
    </strong>+
    <span>Crores <br /> of market</span>
</div>

<div className="counter-column"> 
    <strong data-number="2">
        <CountUp {...rest} start={viewPortEntered ? null : 0} end={2} >
        {({ countUpRef}) => {
            return (
                <ReactVisibilitySensor
                active = {!viewPortEntered}
                onChange ={isVisible => {
                    if(isVisible){
                        setViewPortEntered(true);
                    }
                }}
                deployedCall
                >
                <span className='number' ref={countUpRef}></span>
                </ReactVisibilitySensor>

            )
        }}
        </CountUp>
    </strong>+
    <span>Million <br /> Registered companies</span>
</div>

</div>


        </section>

    </Fragment>
  )
}

export default Pic