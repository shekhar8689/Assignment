import React from 'react'
import './OurProgram2.css'
import SchoolPrepImg from '../../Assets/Rectangle683.png';
import Button from '../../Button.jsx';

const OurProgram2 = () => {
  return (
    <>
  <section className="in-school-preparation">
    <div className="container">
      <div className="row">
        <div className="d-flex justify-content-center align-items-center">
          <div className="card p-3 shadow border-0">
            <nav>
              <div className="nav nav-tabs mb-3 gap-3 justify-content-center" id="nav-tab" role="tablist">
                <button className="nav-link active" id="nav-preparation-tab" data-bs-toggle="tab" data-bs-target="#nav-preparation" type="button" role="tab" aria-controls="nav-preparation" aria-selected="true">In School Preparation</button>
                <button className="nav-link" id="nav-revision-tab" data-bs-toggle="tab" data-bs-target="#nav-revision" type="button" role="tab" aria-controls="nav-revision" aria-selected="false" tabIndex={-1}>Revision</button>
                <button className="nav-link" id="nav-tests-tab" data-bs-toggle="tab" data-bs-target="#nav-tests" type="button" role="tab" aria-controls="nav-tests" aria-selected="false" tabIndex={-1}>Mock Tests</button>
                <button className="nav-link" id="nav-feedback-tab" data-bs-toggle="tab" data-bs-target="#nav-feedback" type="button" role="tab" aria-controls="nav-feedback" aria-selected="false" tabIndex={-1}>Feedback</button>
                <button className="nav-link" id="nav-study-tab" data-bs-toggle="tab" data-bs-target="#nav-study" type="button" role="tab" aria-controls="nav-study" aria-selected="false" tabIndex={-1}>Study Material</button>
                <button className="nav-link" id="nav-counselling-tab" data-bs-toggle="tab" data-bs-target="#nav-counselling" type="button" role="tab" aria-controls="nav-counselling" aria-selected="false" tabIndex={-1}>Counselling</button>
                <button className="nav-link" id="nav-career-tab" data-bs-toggle="tab" data-bs-target="#nav-career" type="button" role="tab" aria-controls="nav-career" aria-selected="false" tabIndex={-1}>Career Guidance</button>
              </div>
            </nav>
            <div className="tab-content border-0" id="nav-tabContent">
              <div className="tab-pane fade active show" id="nav-preparation" role="tabpanel" aria-labelledby="nav-preparation-tab">
                <div className="row align-items-center">
                  <div className="tab-left-col col-md-6">
                    <h2>In School Preparation</h2>
                    <p>Lectures will happen on campus during school hours with our esteemed faculty
                      powered by PACE, so students don’t need to go anywhere for extra coaching or
                      tuition classes. </p>
                      <Button logo>Enquire Now</Button>
                  </div>
                  <div className="tab-right-col col-md-6 d-flex justify-content-end">
                    <img src={SchoolPrepImg} alt className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-revision" role="tabpanel" aria-labelledby="nav-revision-tab">
                <div className="row align-items-center">
                  <div className="tab-left-col col-md-6">
                    <h2>Revision</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus amet aliquid autem vel 
                      excepturi possimus facere perspiciatis accusantium minima ab!</p>
                      <Button logo>Enquire Now</Button>
                  </div>
                  <div className="tab-right-col col-md-6 d-flex justify-content-end">
                    <img src="./assets/images/revision.webp" alt className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-tests" role="tabpanel" aria-labelledby="nav-tests-tab">
                <div className="row align-items-center">
                  <div className="tab-left-col col-md-6">
                    <h2>Mock Tests</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem autem non cumque ab quis 
                      amet quasi doloribus et beatae? Nam?</p>
                      <Button logo>Enquire Now</Button>
                  </div>
                  <div className="tab-right-col col-md-6 d-flex justify-content-end">
                    <img src="./assets/images/mock-text.webp" alt className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-feedback" role="tabpanel" aria-labelledby="nav-feedback-tab">
                <div className="row align-items-center">
                  <div className="tab-left-col col-md-6">
                    <h2>Feedback</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quo dolores 
                      maxime vel nobis quasi nulla, sequi a accusantium culpa.</p>
                      <Button logo>Enquire Now</Button>
                  </div>
                  <div className="tab-right-col col-md-6 d-flex justify-content-end">
                    <img src="./assets/images/feedback.webp" alt className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-study" role="tabpanel" aria-labelledby="nav-study-tab">
                <div className="row align-items-center">
                  <div className="tab-left-col col-md-6">
                    <h2>Study Material</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit excepturi 
                      voluptatum eos eveniet ipsa dolores deserunt cumque numquam necessitatibus alias.</p>
                      <Button logo>Enquire Now</Button>
                  </div>
                  <div className="tab-right-col col-md-6 d-flex justify-content-end">
                    <img src="./assets/images/study-material.webp" alt className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-counselling" role="tabpanel" aria-labelledby="nav-counselling-tab">
                <div className="row align-items-center">
                  <div className="tab-left-col col-md-6">
                    <h2>Counseling</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sint est 
                      enim itaque quasi veniam magni quaerat. Aperiam.
                    </p>
                    <Button logo>Enquire Now</Button>
                  </div>
                  <div className="tab-right-col col-md-6 d-flex justify-content-end">
                    <img src="./assets/images/counseling.webp" alt className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-career" role="tabpanel" aria-labelledby="nav-career-tab">
                <div className="row align-items-center">
                  <div className="tab-left-col col-md-6">
                    <h2>Career Guidance
                    </h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                      Quos, quae numquam? Ad ut iste eligendi accusamus, repellat facilis incidunt asperiores?</p>
                      <Button logo>Enquire Now</Button>
                  </div>
                  <div className="tab-right-col col-md-6 d-flex justify-content-end">
                    <img src="./assets/images/career.webp" alt className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid p-0">
      <div className="in-school-preparation-banner" />
    </div>
  </section>
  </>
  )
  }

export default OurProgram2;