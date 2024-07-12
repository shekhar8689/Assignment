import React from 'react';
import success1 from '../../Assets/success1.png';
import success2 from '../../Assets/success2.png';
import success3 from '../../Assets/success3.png';
import { Carousel } from 'react-bootstrap';
import Button from '../../Button.jsx';

const SuccessStories = () => {
  return (
    <>
      <section className="success-stories">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 success-stories-heading-section-left-col">
              <h3>SUCCESS</h3>
              <h2>STORIES</h2>
            </div>
            <div className="col-md-6 success-stories-heading-section-right-col d-flex justify-content-end">
            <Button logo>Enquire Now</Button>
            </div>
          </div>

          <Carousel>
            <Carousel.Item>
              <img src={success1} alt="Success Story 1" className="img-fluid" />
              <img src={success2} alt="Success Story 2" className="img-fluid" />
              <img src={success3} alt="Success Story 3" className="img-fluid" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={success3} alt="Success Story 3" className="img-fluid" />
              <img src={success2} alt="Success Story 2" className="img-fluid" />
              <img src={success1} alt="Success Story 1" className="img-fluid" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={success2} alt="Success Story 2" className="img-fluid" />
              <img src={success3} alt="Success Story 3" className="img-fluid" />
              <img src={success1} alt="Success Story 1" className="img-fluid" />
            </Carousel.Item>
          </Carousel>

          <div className="success-stories-bottom-section-right-col d-flex justify-content-center">
          <Button logo>Enquire Now</Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default SuccessStories;
