import React from 'react'
import Button from '../../Button'
import './HLForm.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import SplitButton from 'react-bootstrap/SplitButton';
import Container from 'react-bootstrap/Container';


function HLForm() {
    return (
        <section className="enquiry-form">
            <h2 className='enquiry-form-title'>Enquire Now!</h2>
            <Form className='form-containt'>
                <Row className="mb-1">
                    <Form.Group as={Col} controlId="acadmic-year">
                        <Form.Label>Acadmic Year</Form.Label>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Button style={{
                            borderRadius: '5px', width: '240.49px',
                            height: '45px'
                        }} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form.Group>
                </Row>

                <Container className="mt-2 mb-3">
                    <Row className="align-items-center">
                        <Col>
                            <h7 className="Your-rel-chd">Your relationship with the child</h7>
                        </Col>
                        <Col className="d-flex justify-content-end">
                            <Button style={{
                                borderRadius: '5px', width: '110px',
                                height: '45px',
                            }} variant="primary" className="me-4">Father</Button>
                            <Button style={{
                                borderRadius: '5px', width: '110px',
                                height: '45px'
                            }} variant="secondary" className="me-4">Mother</Button>
                        </Col>
                    </Row>
                </Container>



                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>Child's First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Child's Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridYourFirstName">
                        <Form.Label>Your First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridYourLastName">
                        <Form.Label>Your Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3">
                    <Form.Label>Course Applying For</Form.Label>
                    <Form.Select>
                        <option>Disabled select</option>
                    </Form.Select>
                </Form.Group>


                <Form.Label>Mobile Number</Form.Label>
                <InputGroup className="mb-3">
                    <SplitButton
                        variant="outline-secondary"
                        title="+91"
                        id="segmented-button-dropdown-1"
                    >
                        <Dropdown.Item href="#">+9</Dropdown.Item>
                        <Dropdown.Item href="#">+01</Dropdown.Item>
                        <Dropdown.Item href="#">+85</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                    </SplitButton>
                    <Form.Control aria-label="Text input with dropdown button" />
                </InputGroup>

                <Form.Group className="mb-1 pb-4" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <div className='Form-Enq-button'>
                <Button >Enquire Now</Button>
                </div>

            </Form>
        </section>
    )
}

export default HLForm

{/* <form>
                <div className='acadmic-year'>
                    <h5 className='acadmic-year-text'>Acadmic Year</h5>
                    <input type="text" value={2024-2025} name='AcadmicYear' />
                </div>
                <div>
                    <label htmlFor="childfirstname" className='child-first-name-label'>
                        Child's First Name
                    </label>
                    <input type="text" className='child-first-name-input' id='child-first-name-input' placeholder='First Name' required />
                </div>
                <div>
                    <label htmlFor="childlastname" className='child-last-name-label'>
                        Child's Last Name
                    </label>
                    <input type="text" className='child-last-name-input' id='child-last -name-input' placeholder='First Name' required />
                </div>
                <Button>Enquire Now</Button>
            </form> */}