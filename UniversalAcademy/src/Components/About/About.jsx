import React from 'react';
import './About.css';
import imageSrc from '../../Assets/About1.png';
import imageSrc2 from '../../Assets/About2.png'
import Button from '../../Button';

const About = () => {
    return (
        <>
        <section className="about position-relative">
          <div className='container-fluid'>
            <div className="row align-items-center justify-content-center">
            <div className="col-md-1"></div>
            <div className="col-md-3 about-left-col">
                  <img src={imageSrc} alt="" className="img-fluid imgabt" />
            </div>
            <div className="col-md-6  bg-color">
                    <div className="about1 about-right-col ">
                        <h3 className="subtext">About</h3>
                        <h2 className="title">Universal High School</h2>
                        <p className="">Universal High School, Dahisar equips every student with the right attitude and skills to
                            help them find their unique place in the world by providing a wholesome and ever-evolving
                            learning environment. So that they can fearlessly pursue a better tomorrow.In line with this
                            mission, Universal is launching the best IIT JEE/ NEET test prep program powered by PACE IIT
                            &amp; MEDICAL. PACE IIT &amp; Medical is Indias best IIT JEE/ NEET test prep program and has helped
                            more than 80,000+ students prepare for IIT JEE and 20,000+ students in NEET for the last few
                            years.</p>
                            <Button logo>Enquire Now</Button>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
          </div>
        </section>
        <section className="about about-iit position-relative">
        <div className="container-fluid">
            <div className="row align-items-center justify-content-center">
                <div className="col-md-2"></div>
                <div className="col-md-6  bg-color">
                    <div className="about-right-col">

                        <h3 className="subtext">About</h3>
                        <h2 className="title">IIT PACE</h2>
                        <p>Founded by Mr. Praveen Tyagi, for over two decades, PACE IIT & Medical has embarked on a
                            remarkable journey, transforming the lives of students and shaping the landscape of
                            competitive exam coaching. It all began in 1999, with a humble vision to bridge the gap
                            between aspirations and achievements. PACE IIT & Medical has become synonymous with success
                            in competitive exams and helped xxx students to crack IIT and xxx students to crack NEET/
                            Medical exams.</p>
                         <Button logo>Enquire Now</Button>
                    </div>
                </div>
                <div className="col-md-3 about-left-col">
                    <img src={imageSrc2} alt="" className="img-fluid imgabt"/>
                </div>

                <div className="col-md-1"></div>

            </div>
        </div>
    </section>
        </>
        )
        }
export default About

