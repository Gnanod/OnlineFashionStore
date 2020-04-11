import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBView,
    MDBContainer,MDBPagination, MDBPageItem, MDBPageNav,
    MDBCardText,
    MDBIcon,MDBDataTable,MDBFormInline,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBInput, MDBBtn, MDBTableHead, MDBTableBody, MDBTable
} from 'mdbreact';
import './test.css';
const TablePage = props => {


    return (
        <div id='parallaxintro'>
            <MDBView>
                <MDBMask className='rgba-white-light' />
                <MDBContainer className='d-flex justify-content-center align-items-center' style={{ height: '100%', width: '100%', paddingTop: '0rem' }}>
                    <MDBRow>

                        <MDBCol md='12' className='mb-4  text-center'>
                            <h1 className='display-5 mb-0 pt-md-5 pt-5  font-weight-bold' >
                                USER &nbsp;
                                <span className='font-weight-bold h1col'>DETAILS</span>
                            </h1>
                        </MDBCol>
                        <MDBCol md="6" className="searchC">
                            <MDBFormInline className="md-form">
                                <MDBIcon icon="search" />
                                <input className="form-control form-control-sm ml-3 " type="text" placeholder="Search" aria-label="Search" />
                                <MDBBtn outline size="sm">Search</MDBBtn>
                            </MDBFormInline>
                        </MDBCol>
                        <div className=" container-fluid ">
                            <MDBRow>
                                <MDBCol size="7"  >
                                    <MDBCard >
                                        <MDBCardBody className="feedbackdiv feedbackcard">
                                                <MDBTable scrollY  maxHeight="500px">
                                                    {/*-------------------------------------------------------------*/}
                                                    <MDBCard >
                                                    <MDBCardBody>
                                                        <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                        <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                        <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                        his/her issues and requests that the user admin should consider</MDBCardText>
                                                        <MDBBtn color='unique' >Delete</MDBBtn>
                                                    </MDBCardBody>
                                                    </MDBCard>
                                                    <br/>
                                                    {/*-------------------------------------------------------------*/}

                                                    {/*-------------------------------------------------------------*/}
                                                    <MDBCard >
                                                        <MDBCardBody>
                                                            <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                            <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                            <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                                his/her issues and requests that the user admin should consider</MDBCardText>
                                                            <MDBBtn color='unique' >Delete</MDBBtn>
                                                        </MDBCardBody>
                                                    </MDBCard>
                                                    <br/>
                                                    {/*-------------------------------------------------------------*/}


                                                    {/*-------------------------------------------------------------*/}
                                                    <MDBCard >
                                                        <MDBCardBody>
                                                            <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                            <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                            <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                                his/her issues and requests that the user admin should consider</MDBCardText>
                                                            <MDBBtn color='unique' >Delete</MDBBtn>
                                                        </MDBCardBody>
                                                    </MDBCard>
                                                    <br/>
                                                    {/*-------------------------------------------------------------*/}


                                                    {/*-------------------------------------------------------------*/}
                                                    <MDBCard >
                                                        <MDBCardBody>
                                                            <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                            <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                            <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                                his/her issues and requests that the user admin should consider</MDBCardText>
                                                            <MDBBtn color='unique' >Delete</MDBBtn>
                                                        </MDBCardBody>
                                                    </MDBCard>
                                                    <br/>
                                                    {/*-------------------------------------------------------------*/}

                                                    {/*-------------------------------------------------------------*/}
                                                    <MDBCard >
                                                        <MDBCardBody>
                                                            <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                            <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                            <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                                his/her issues and requests that the user admin should consider</MDBCardText>
                                                            <MDBBtn color='unique' >Delete</MDBBtn>
                                                        </MDBCardBody>
                                                    </MDBCard>
                                                    <br/>
                                                    {/*-------------------------------------------------------------*/}

                                                    {/*-------------------------------------------------------------*/}
                                                    <MDBCard >
                                                        <MDBCardBody>
                                                            <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                            <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                            <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                                his/her issues and requests that the user admin should consider</MDBCardText>
                                                            <MDBBtn color='unique' >Delete</MDBBtn>
                                                        </MDBCardBody>
                                                    </MDBCard>
                                                    <br/>
                                                    {/*-------------------------------------------------------------*/}

                                                    {/*-------------------------------------------------------------*/}
                                                    <MDBCard >
                                                        <MDBCardBody>
                                                            <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                            <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                            <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                                his/her issues and requests that the user admin should consider</MDBCardText>
                                                            <MDBBtn color='unique' >Delete</MDBBtn>
                                                        </MDBCardBody>
                                                    </MDBCard>
                                                    <br/>
                                                    {/*-------------------------------------------------------------*/}

                                                    {/*-------------------------------------------------------------*/}
                                                    <MDBCard >
                                                        <MDBCardBody>
                                                            <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                            <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                            <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                                his/her issues and requests that the user admin should consider</MDBCardText>
                                                            <MDBBtn color='unique' >Delete</MDBBtn>
                                                        </MDBCardBody>
                                                    </MDBCard>
                                                    <br/>
                                                    {/*-------------------------------------------------------------*/}
                                                </MDBTable>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </div>
                    </MDBRow>
                </MDBContainer>
            </MDBView>
        </div>



    );
};

export default TablePage;