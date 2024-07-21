import React, { useState, useRef, useEffect } from 'react';
import Button from '../../Button'
import './HLForm.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Row from 'react-bootstrap/Row';


function HLForm() {

    const [selectedYear, setSelectedYear] = useState(null);
    const [isPickerOpen, setIsPickerOpen] = useState(false);

    // const [showDatePicker, setShowDatePicker] = useState(false);
    // const datePickerRef = useRef(null);
    // const [startDate, setStartDate] = useState(new Date());
    // const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

    // const dateBtnClick = () => {
    //     setShowDatePicker(true);
    //     if (datePickerRef.current) {
    //         datePickerRef.current.setFocus();
    //     }
    // };

    // const handleDateChange = (date) => {
    //     setStartDate(date);
    //     setSelectedYear(date.getFullYear());
    //     setShowDatePicker(false);
    // };


    const handleYearChange = (date) => {
        setSelectedYear(date);
        setIsPickerOpen(false);
    };

    const handleButtonClick = () => {
        setIsPickerOpen(true);
    };



    const [relationship, setRelationship] = useState('Father');

    const handleRelationshipChange = (newRelationship) => {
        setRelationship(newRelationship);
    };

    return (
        <div className='HLForm-main'>
            <h3 className='HLForm-title'>ENQUIRE NOW!</h3>
            <Form className='HLForm-main-containt'>

                <Form.Group id="academicYear">
                    <Form.Label>Academic Year</Form.Label>
                    <Button
                        className="cal-btn"
                        onClick={handleButtonClick}
                        style={{ borderRadius: '0px', width: '200px', height: '35px', padding: '7px 20px' }}
                    >
                        {selectedYear ? selectedYear.getFullYear() : 'Select Year'}
                    </Button>

                    {isPickerOpen && (
                        <DatePicker
                            selected={selectedYear}
                            onChange={handleYearChange}
                            showYearPicker
                            dateFormat="yyyy"
                            inline
                        />
                    )}
                    
                </Form.Group>


            

                <Form.Group id="relationship">
                    <Form.Label>Your Relationship with the Child</Form.Label>
                    <div className='relationship-btns'>
                        <Button
                            onClick={() => handleRelationshipChange('Father')}
                            style={{
                                borderRadius: '0px',
                                width: '100px',
                                height: '35px',
                                backgroundColor: relationship === 'Father' ? '#292967' : 'white',
                                color: relationship === 'Father' ? 'white' : 'black',
                                borderColor: relationship === 'Father' ? '#292967' : '#292967'
                            }}
                            className="rel-btn"
                        >
                            Father
                        </Button>
                        <Button
                            onClick={() => handleRelationshipChange('Mother')}
                            style={{
                                borderRadius: '0px',
                                width: '100px',
                                height: '35px',
                                backgroundColor: relationship === 'Mother' ? '#292967' : 'white',
                                color: relationship === 'Mother' ? 'white' : 'black',
                                borderColor: relationship === 'Mother' ? '#292967' : '#292967'
                            }}
                            className="rel-btn"
                        >
                            Mother
                        </Button>
                    </div>
                </Form.Group>

                <Row>
                    <Form.Group as={Col} controlId="childFirstName">
                        <Form.Label>Child's First Name</Form.Label>
                        <Form.Control type="text" placeholder="Type Here" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="childLastName">
                        <Form.Label>Child's Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Type Here" />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="yourFirstName">
                        <Form.Label>Your First Name</Form.Label>
                        <Form.Control type="text" placeholder="Type Here" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="yourLastName">
                        <Form.Label>Your Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Type Here" />
                    </Form.Group>
                </Row>
                <Form.Group controlId="courseApplyingFor">
                    <Form.Label>Course Applying For</Form.Label>
                    <Form.Control as="select">
                        <option>Choose Course</option>
                        {/* Add more options as needed */}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="mobileNumber">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="text" placeholder="+91 Enter your Mobile Number" />
                </Form.Group>
                <Form.Group controlId="emailAddress">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="yourname@example.com" />
                </Form.Group>
                <Button style={{margin:'3%', marginBottom:'3%', marginLeft:'20%'}}>
                Enquire Now
                </Button>
            </Form>
        </div>
    );
}

export default HLForm;
