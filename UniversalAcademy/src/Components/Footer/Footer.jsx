import React from 'react'
import './Footer.css';
import mapimg from '../../Assets/map.png';
import callicon from '../../Assets/call_icon.png';
import mapicon from '../../Assets/map_icon.png';
import Button from '../../Button';
import bbutton from '../../Assets/arrow.png';
const Footer = () => {
  return (
    <>
      <footer className='footer-data-main-content'>
        <div className='footer-data-left-content'>
          <h3>DAHISAR</h3>
          <h2>UNIVERSAL HIGH SCHOOL</h2>
          <div className='map-icon-address'>
            <div>
              <img src={mapicon} alt='mapicon' />
            </div>
            <div className='map-address'>
              <h4>ADDRESS</h4>
              <p>Ashok Van, Shiv Vallabh Road, Dahisar East, Mumbai – 400 068</p>
            </div>
          </div>

          <div className='map-call-details'>
            <div>
              <img src={callicon} alt='callicon' />
            </div>
            <div className='map-address'>
              <h4>ADMISSIONS ENQUIRY</h4>
              <a className="mobilenumber" href="tel:912241947733">+91 224 194 7733</a>
              <div className="vr" />
              <a href="mailto:admissions.dahisar@universal.edu.in ">admissions.dahisar@universal.edu.in
              </a>
            </div>
          </div>
        
          <Button icon={bbutton} style={{ backgroundColor: '#FDDF49', color: '#292967'}}>Get In Touch</Button>
          
        </div>
        <div>
          <img src={mapimg} alt="map" className="mapimage" />
        </div>
      </footer>
      <div className="container-fluid copyright">
        <p>Copyright © 2024 Universal Academy. All rights reserved</p>
      </div>
    </>
  )
}

export default Footer