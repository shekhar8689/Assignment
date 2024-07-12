import React from 'react'
import './HRForm.css'
import PaceLogo from '../../Assets/PaceLogo.png'
import Button from '../../Button'
import LCIconOne from '../../Assets/LCIconOne.png'
import LCIconTwo from '../../Assets/LCIconTwo.png'

function HRForm() {
    return (
        <div className='Hero-left-containt'>
            <div>
                <h5>Kickstart Your </h5>
                <div className='Hero-left-containt-title' >
                    <h2 className='Main-title'>IIT JEE/NEET Test Prep,</h2>
                    <h6 className='second-title'>Powered by</h6>
                    <div className='hero-left-pace-logo'>
                        <img src={PaceLogo} alt="pace" />
                    </div>
                </div>
            </div>
            <br />
            <div className='Hero-left-containt-secondContaint'>
                <h5>ADMISSIONS OPEN</h5>
                <Button logo >Enquire Now</Button>
            </div>
            <br />
            <div className='Hero-left-containt-lastContaint'>
                <div className='Hero-left-containt-lastContaint-one' >
                    <img src={LCIconOne} alt="img1" />
                    <p>Batch Starts From 3rd April '24</p>
                </div>
                <br />
                <div className='Hero-left-containt-lastContaint-two'>
                    <img src={LCIconTwo} alt="img2" />
                    <p>Batch Starts From 3rd April '24</p>
                </div>
            </div>

        </div>
    )
}

export default HRForm