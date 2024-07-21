import React from 'react';
import './About.css';
import imageSrc from '../../Assets/About1.png';
import imageSrc2 from '../../Assets/About2.png'
import Button from '../../Button';
import pbutton from '../../Assets/RightArrowLogo.png'

const About = () => {
    return (
        <>
            <section className="about">
                <div className='about-img-first'>
                    <img src={imageSrc} alt="" className="imgabt-first" />
                </div>
                <div className='about-one about-right-col'>
                    <h3 className="subtext">About</h3>
                    <h2 className="title">Universal High School</h2>
                    <p>Universal High School, Dahisar equips every student with the right attitude and skills to
                        help them find their unique place in the world by providing a wholesome and ever-evolving
                        learning environment. So that they can fearlessly pursue a better tomorrow.In line with this
                        mission, Universal is launching the best IIT JEE/ NEET test prep program powered by PACE IIT
                        &amp; MEDICAL. PACE IIT &amp; Medical is Indias best IIT JEE/ NEET test prep program and has helped
                        more than 80,000+ students prepare for IIT JEE and 20,000+ students in NEET for the last few
                        years.</p>
                    <Button icon={pbutton} >Enquire Now</Button>
                </div>
            </section>
            <section className="about">
                <div className='about-two'>
                    <div className='about-two-content-two'>
                        <h3 className="subtext">About</h3>
                        <h2 className="title">IIT PACE</h2>
                        <p>Founded by Mr. Praveen Tyagi, for over two decades, PACE IIT & Medical has embarked on a
                            remarkable journey, transforming the lives of students and shaping the landscape of
                            competitive exam coaching. It all began in 1999, with a humble vision to bridge the gap
                            between aspirations and achievements. PACE IIT & Medical has become synonymous with success
                            in competitive exams and helped xxx students to crack IIT and xxx students to crack NEET/
                            Medical exams.</p>
                        <Button icon={pbutton}>Enquire Now</Button>
                    </div>
                </div>
                <div className='about-img-second'>
                    <img src={imageSrc2} alt="" className="imgabt-second" />
                </div>
            </section>
        </>
    )
}
export default About

