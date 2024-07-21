import React from 'react'
import './OurProgram.css';
import Button from '../../Button.jsx';
import pbutton from '../../Assets/RightArrowLogo.png'

const OurProgram = () => {
  return (
    <>
     <section className="our-program position-relative">
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <h3>OUR</h3>
                <h2> PROGRAMS</h2>
                <div className="col-md-5 our-program-left-col">
                    <h3 className="subtext">ISC + NEET</h3>
                    <div className="our-program-card">
                        <p>NEET is a national-level examination conducted by NTA. The candidates who want to get
                            admission to medical courses must qualify for the entrance test. NEET questions only come
                            from Physics, Chemistry, Zoology, and Botany.
                        </p>
                        <p>
                            Powered by IITPACE, Universal High School Dahisar will prepare students for both ISC and
                            NEET (and other Medical exams) within the comfort of their school premises. Our coursework
                            is specially created for the ISC curriculum to create a synergy between Board and NEET exam
                            preparations during school hours.
                        </p>
                        <div className="d-flex justify-content-center">
                        <Button icon={pbutton}>Enquire Now</Button>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 our-program-right-col">
                    <h3 className="subtext">ISC + IIT JEE</h3>
                    <div className="our-program-card">
                        <p>IITs are one of the most prestigious colleges in the country. All Engineering aspirants wish
                            to get into one of the IITs, but getting into such an institution is a challenging task. A
                            lot of hard work andhard and dedication is required to ace JEE Main and JEE Advanced to get
                            into IIT or some other top educational institution in the country.

                        </p>
                        <p>Powered by IITPACE, Universal High School Dahisar will prepare students for both ISC and
                            IITJEE ( and other engineering exams) within the comfort of their school premises. Our
                            coursework is specially created for the ISC curriculum to create a synergy between Board and
                            NEET exam preparations during school hours
                        </p>
                        <div className="d-flex justify-content-center">
                        <Button icon={pbutton}>Enquire Now</Button>
                        </div>
                    </div>
                </div>
            </div>
    </div></section>
    </>
  )
}

export default OurProgram