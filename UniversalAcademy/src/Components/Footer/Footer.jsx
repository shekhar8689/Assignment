import React from 'react'
import './Footer.css';
import mapimg from '../../Assets/map.png';
import callicon from '../../Assets/call_icon.png';
import mapicon from '../../Assets/map_icon.png';
import Button from '../../Button';
import arrow from '../../Assets/arrow.png';
const Footer = () => {
  return (
    <>
    <footer>
  <div className="container">
    <div className="row">
      <div className="col-md-6 footer-left-col">
        <h3>DAHISAR</h3>
        <h2>UNIVERSAL HIGH SCHOOL</h2>
        <div className="address d-flex gap-3">
          <div className="location-icons">
            <img src={mapicon} alt className="img-fluid" />
          </div>
          <div>
            <h4>ADDRESS</h4>
            <p>Ashok Van, Shiv Vallabh Road, Dahisar East, Mumbai – 400 068</p>
          </div>
        </div>
        <div className="location d-flex gap-3">
          <div className>
            <img src={callicon} alt className="img-fluid" />
          </div>
          <div>
            <h4>ADMISSIONS ENQUIRY</h4>
            <div className="admission-contact d-flex gap-5 align-items-center">
              <a className="mobilenumber" href="tel:912241947733">+91 224 194 7733</a>
              <div className="vr" />
              <a href="mailto:admissions.dahisar@universal.edu.in ">admissions.dahisar@universal.edu.in
              </a>
            </div>
          </div>
        </div>
        <div className="footer-button">
        <Button logo={arrow}style={{backgroundColor:'#FDDF49',color:'#292967'}}>Get In Touch</Button>
        </div>
      </div>
      <div className="col-md-6">
        <img src={mapimg} alt="map" className="mapimage"/>
      </div>
    </div>
  </div>
</footer>
<div class="container-fluid copyright">
        <p>Copyright © 2024 Universal Academy. All rights reserved</p>
    </div>
</>
  )
}

export default Footer