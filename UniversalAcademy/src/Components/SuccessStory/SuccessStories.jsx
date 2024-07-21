import React from 'react';
import success1 from '../../Assets/success1.png';
import success2 from '../../Assets/success2.png';
import success3 from '../../Assets/success3.png';
import Button from '../../Button.jsx';
import Carousel from 'react-bootstrap/Carousel';
import './SuccesStories.css'
import pbutton from '../../Assets/RightArrowLogo.png'


const SuccessStories = () => {
  return (
    <>
      <section className="success-stories ">
        <div className="container success-story-main-contain">
          <div className='success-story-heading'>
            <div>
              <h3>SUCCESS</h3>
              <h2>STORIES</h2>
            </div>
            <div>
              <Button icon={pbutton}>Enquire Now</Button>
            </div>
          </div>

          <Carousel >
            <Carousel.Item interval={1000} >
              <div className='all-img-containts'>
                <img src={success1} alt="Success Story 1" className="carousel-img-fluid" />
                <img src={success2} alt="Success Story 2" className="carousel-img-fluid" />
                <img src={success3} alt="Success Story 3" className="carousel-img-fluid" />
              </div>
            </Carousel.Item>

            <Carousel.Item interval={1000} >
              <div className='all-img-containts'>
                <img src={success1} alt="Success Story 1" className="carousel-img-fluid" />
                <img src={success2} alt="Success Story 2" className="carousel-img-fluid" />
                <img src={success3} alt="Success Story 3" className="carousel-img-fluid" />
              </div>
            </Carousel.Item>

            <Carousel.Item interval={1000} >
              <div className='all-img-containts'>
                <img src={success1} alt="Success Story 1" className="carousel-img-fluid" />
                <img src={success2} alt="Success Story 2" className="carousel-img-fluid" />
                <img src={success3} alt="Success Story 3" className="carousel-img-fluid" />
              </div>
            </Carousel.Item>
          </Carousel>

        </div>
      </section>
    </>
  );
}

export default SuccessStories;
