import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Hero.css'
import HLForm from './HLForm';
import BackgroundImg from '../../Assets/BackgroundImg.png'
import Carousel from 'react-bootstrap/Carousel';
import CarouselImg1 from '../../Assets/carouselImageOne.png'
import CarouselImg2 from '../../Assets/carouselImageTwo.png'
import HRForm from './HRForm';

function Hero() {
    return (
        <>
            <div className='Hero-main'>
                <div className='Background-image'>
                    <div>
                        <img src={BackgroundImg} alt="" />
                    </div>
                    <div className='Hero-carousel'>
                        <Carousel >
                            <Carousel.Item interval={1000}>
                                <h1><img src={CarouselImg1} alt="CarouselImg1" /> </h1>
                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <h1><img src={CarouselImg2} alt="CarouselImg2" /></h1>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className='Hero-contenet'>
                        <div className='Hero-contenet-left'><HRForm /></div>
                        <div className='Hero-contenet-right'><HLForm /></div>
                    </div>

                </div>


            </div>
        </>

    )
}

export default Hero