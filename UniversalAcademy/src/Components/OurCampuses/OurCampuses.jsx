import React from 'react';
import './OurCampuses.css';
import Button from '../../Button.jsx';
import { Carousel } from 'react-bootstrap';
import campus1 from '../../Assets/compusesimg-1.png';
import campus2 from '../../Assets/compusesimg-2.png';
import campus3 from '../../Assets/compusesimg-3.png';
import campus4 from '../../Assets/compusesimg-4.png';
import campus5 from '../../Assets/compusesimg-5.png';
import campus6 from '../../Assets/compusesimg-6.png';
import campus7 from '../../Assets/compusesimg-7.png';
import campus8 from '../../Assets/compusesimg-8.png';
import campus9 from '../../Assets/compusesimg-9.png';
import campus10 from '../../Assets/compusesimg-10.png';
import campus11 from '../../Assets/compusesimg-11.png';
import campus12 from '../../Assets/compusesimg-12.png';
import campus13 from '../../Assets/compusesimg-13.png';
import campus14 from '../../Assets/compusesimg-14.png';
import campus15 from '../../Assets/compusesimg-15.png';
import campus16 from '../../Assets/compusesimg-16.png';
import campus17 from '../../Assets/compusesimg-17.png';
import campus18 from '../../Assets/compusesimg-18.png';

const OurCampuses = () => {
  return (
    <>
      <section className="our-compuses">
        <div className="container-fluid p-0">
          <div className="our-compuses-banner" />
        </div>
        <div className="container">
          <div className="row heading align-items-center">
            <div className="col-md-6">
              <h3 className="text-white">OUR</h3>
              <h2>CAMPUSES</h2>
            </div>
            <div className="col-md-6 our-compuses-heading-left-col d-flex justify-content-end">
            <Button logo>Enquire Now</Button>
            </div>
          </div>
          
          {/* Desktop */}
          <Carousel>
            <Carousel.Item>
              <div className="row gap-3 align-items-center justify-content-center">
                <div className="col-md-5">
                  <img src={campus1} alt="Campus 1" className="img-fluid" />
                </div>
                <div className="col-md-3">
                  <img src={campus2} alt="Campus 2" className="img-fluid" />
                </div>
                <div className="col-md-3">
                  <img src={campus3} alt="Campus 3" className="img-fluid" />
                </div>
                <div className="col-md-3">
                  <img src={campus4} alt="Campus 4" className="img-fluid" />
                </div>
                <div className="col-md-3">
                  <img src={campus5} alt="Campus 5" className="img-fluid" />
                </div>
                <div className="col-md-5">
                  <img src={campus6} alt="Campus 6" className="img-fluid" />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row gap-3 align-items-center justify-content-center">
                <div className="col-md-5">
                  <img src={campus7} alt="Campus 7" className="img-fluid" />
                </div>
                <div className="col-md-3">
                  <img src={campus8} alt="Campus 8" className="img-fluid" />
                </div>
                <div className="col-md-3">
                  <img src={campus9} alt="Campus 9" className="img-fluid" />
                </div>
                <div className="col-md-3">
                  <img src={campus10} alt="Campus 10" className="img-fluid" />
                </div>
                <div className="col-md-3">
                  <img src={campus11} alt="Campus 11" className="img-fluid" />
                </div>
                <div className="col-md-5">
                  <img src={campus12} alt="Campus 12" className="img-fluid" />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row gap-3 align-items-center justify-content-center">
                <div className="col-md-5">
                  <img src={campus13} alt="Campus 13" className="img-fluid" />
                </div>
                <div className="col-md-3">
                  <img src={campus14} alt="Campus 14" className="img-fluid" />
                </div>
                <div className="col-md-3">
                  <img src={campus15} alt="Campus 15" className="img-fluid" />
                </div>
                <div className="col-md-3">
                  <img src={campus16} alt="Campus 16" className="img-fluid" />
                </div>
                <div className="col-md-3">
                  <img src={campus17} alt="Campus 17" className="img-fluid" />
                </div>
                <div className="col-md-5">
                  <img src={campus18} alt="Campus 18" className="img-fluid" />
                </div>
              </div>
            </Carousel.Item>
          </Carousel>

          {/* Mobile */}
          <Carousel className="d-md-none">
            <Carousel.Item>
              <div className="row m-0 align-items-center justify-content-center">
                <div className="col-5">
                  <img src="./assets/images/our-compusesimg-mobile-1.webp" alt="Campus Mobile 1" className="img-fluid" />
                </div>
                <div className="col-7">
                  <img src="./assets/images/our-compusesimg-mobile-2.webp" alt="Campus Mobile 2" className="img-fluid" />
                </div>
                <div className="col-12">
                  <img src="./assets/images/our-compusesimg-mobile-3.webp" alt="Campus Mobile 3" className="img-fluid w-100" />
                </div>
                <div className="col-7">
                  <img src="./assets/images/our-compusesimg-mobile-4.webp" alt="Campus Mobile 4" className="img-fluid" />
                </div>
                <div className="col-5">
                  <img src="./assets/images/our-compusesimg-mobile-5.webp" alt="Campus Mobile 5" className="img-fluid" />
                </div>
                <div className="col-12">
                  <img src="./assets/images/our-compusesimg-mobile-6.webp" alt="Campus Mobile 6" className="img-fluid" />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row m-0 align-items-center justify-content-center">
                <div className="col-5">
                  <img src="./assets/images/our-compusesimg-mobile-7.webp" alt="Campus Mobile 7" className="img-fluid" />
                </div>
                <div className="col-7">
                  <img src="./assets/images/our-compusesimg-mobile-8.webp" alt="Campus Mobile 8" className="img-fluid" />
                </div>
                <div className="col-12">
                  <img src="./assets/images/our-compusesimg-mobile-9.webp" alt="Campus Mobile 9" className="img-fluid w-100" />
                </div>
                <div className="col-7">
                  <img src="./assets/images/our-compusesimg-mobile-10.webp" alt="Campus Mobile 10" className="img-fluid" />
                </div>
                <div className="col-5">
                  <img src="./assets/images/our-compusesimg-mobile-11.webp" alt="Campus Mobile 11" className="img-fluid" />
                </div>
                <div className="col-12">
                  <img src="./assets/images/our-compusesimg-mobile-12.webp" alt="Campus Mobile 12" className="img-fluid w-100" />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row m-0 align-items-center justify-content-center">
                <div className="col-5">
                  <img src="./assets/images/our-compusesimg-mobile-13.webp" alt="Campus Mobile 13" className="img-fluid" />
                </div>
                <div className="col-7">
                  <img src="./assets/images/our-compusesimg-mobile-14.webp" alt="Campus Mobile 14" className="img-fluid" />
                </div>
                <div className="col-12">
                  <img src="./assets/images/our-compusesimg-mobile-15.webp" alt="Campus Mobile 15" className="img-fluid w-100" />
                </div>
                <div className="col-7">
                  <img src="./assets/images/our-compusesimg-mobile-16.webp" alt="Campus Mobile 16" className="img-fluid" />
                </div>
                <div className="col-5">
                  <img src="./assets/images/our-compusesimg-mobile-17.webp" alt="Campus Mobile 17" className="img-fluid" />
                </div>
                <div className="col-12">
                  <img src="./assets/images/our-compusesimg-mobile-18.webp" alt="Campus Mobile 18" className="img-fluid w-100" />
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default OurCampuses;
