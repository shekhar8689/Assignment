import React from 'react'
import './HRForm.css'
import PaceLogo from '../../Assets/PaceLogo.png'
import Button from '../../Button'
import LCIconOne from '../../Assets/LCIconOne.png'
import LCIconTwo from '../../Assets/LCIconTwo.png'
import pbutton from '../../Assets/RightArrowLogo.png'
import Carousel from 'react-bootstrap/Carousel';
import CarouselImg1 from '../../Assets/carouselImageOne.png'
import CarouselImg2 from '../../Assets/carouselImageTwo.png'

function HRForm() {
    return (
        <div className='Hero-left-containt'>
            <div className='Hero-carousel'>
                <Carousel >
                    <Carousel.Item interval={1000} >
                        <div className='carousel-one-content'>

                            <div className='leftL-one-para'>
                                <h4 className='Hero-left-containt-start' >Kickstart Your </h4>
                                <div className='Hero-left-containt-title' >
                                    <h2 className='Main-title-top'>IIT JEE/NEET Test Prep,</h2>
                                    <h6 className='second-title'>Powered by</h6>
                                    <div className='hero-left-pace-logo'>
                                        <img src={PaceLogo} alt="pace" />
                                    </div>
                                </div>

                                <div className='Hero-left-containt-secondContaint'>
                                    <h4 className='Hero-left-containt-secondContaint-text'>ADMISSIONS OPEN</h4>
                                    <Button icon={pbutton} >Enquire Now</Button>
                                </div>
                                <br />
                                <div className='Hero-left-containt-lastContaint'>
                                    <div className='Hero-left-containt-lastContaint-one' >
                                        <img src={LCIconOne} alt="img1" />
                                        <p>Batch Starts From 3rd April '24</p>
                                    </div>
                                    <div className='Hero-left-containt-lastContaint-two'>
                                        <img src={LCIconTwo} alt="img2" />
                                        <p>Batch Starts From 3rd April '24</p>
                                    </div>
                                </div>

                            </div>
                            <div><h1><img className='main-img' src={CarouselImg1} alt="CarouselImg1" /> </h1></div>

                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <div className='carousel-two-content'>
                            <div className='leftL-two-para'>
                                <h4 className='Hero-left-containt-start' >Kickstart Your </h4>
                                <div className='Hero-left-containt-title' >
                                    <h2 className='Main-title-top'>IIT JEE/NEET Test Prep,</h2>
                                    <div className='second-two-title'>
                                    <h6>Powered by</h6>
                                    <img src={PaceLogo} alt="pace" />
                                    </div>   
                                </div>

                                <div className='Hero-left-containt-secondContaint'>
                                    <h4 className='Hero-left-containt-secondContaint-text'>ADMISSIONS OPEN</h4>
                                    <Button icon={pbutton} >Enquire Now</Button>
                                </div>

                            </div>

                            <div><h1><img className='main-img' src={CarouselImg2} alt="CarouselImg2" /></h1></div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default HRForm