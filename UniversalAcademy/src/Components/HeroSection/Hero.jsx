import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Hero.css'
import HLForm from './HLForm';
import BackgroundImg from '../../Assets/BackgroundImg.png'
import HRForm from './HRForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero() {
    return (
        <>
            <div className='Hero-main'>
                <div className='Background-image'>
                    <div>
                        <img src={BackgroundImg} alt="" />
                    </div>
                    <Container className='Hero-contenet'>
                        <Row>
                            <Col xs={8}><div className='Hero-contenet-left'><HRForm /></div></Col>
                            <Col><div className='Hero-contenet-right'><HLForm /></div></Col>
                        </Row>
                    </Container>

                </div>


            </div>
        </>

    )
}

export default Hero