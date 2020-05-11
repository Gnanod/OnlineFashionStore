import React, {Component} from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBView,
    MDBContainer, MDBPagination, MDBPageItem, MDBPageNav,
    MDBNavbar,
    MDBIcon, MDBDataTable, MDBFormInline,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBInput, MDBBtn, MDBTableHead, MDBTableBody, MDBTable, MDBDropdown, MDBCardText
} from 'mdbreact';
import './test.css';
import { Bar } from "react-chartjs-2";
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js'



export default class Test extends Component {

    constructor(props) {
        super(props);
        this.sweetalertfunction = this.sweetalertfunction.bind(this);
    }
    sweetalertfunction(){
        console.log("button clicks");
        Swal.fire(
            '',
            'Feedback Deleted',
            'success'
        );
    }

    state = {
        dataBar: {
            labels: [ "2015", "2016", "2017", "2018", "2019", "2020"],
            datasets: [
                {
                    label: "Number of customers",
                    data: [30, 45, 40, 20, 50, 10],
                    backgroundColor: [
                        "rgba(236, 112, 99 )",
                        "rgba(93, 173, 226)",
                        "rgba(82, 190, 128 )",
                        "rgba(113, 205, 205)",
                        "rgba(170, 128, 252)",
                        "rgba(255, 177, 101)"
                    ],
                    borderWidth: 2,
                    borderColor: [
                        "rgba(255, 134, 159, 1)",
                        "rgba(98,  182, 239, 1)",
                        "rgba(82, 190, 128, 1)",
                        "rgba(113, 205, 205, 1)",
                        "rgba(170, 128, 252, 1)",
                        "rgba(255, 177, 101, 1)"
                    ]
                }
            ]
        },
        barChartOptions: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [
                    {
                        barPercentage: 1,
                        gridLines: {
                            display: true,
                            color: "rgba(0, 0, 0, 0.1)"
                        }
                    }
                ],
                yAxes: [
                    {
                        gridLines: {
                            display: true,
                            color: "rgba(0, 0, 0, 0.1)"
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            }
        }
    }


    render() {
        return (
            <div id='parallaxintro'>
                <MDBView>
                    <MDBMask className='rgba-white-light' />
                    <MDBContainer className='d-flex justify-content-center align-items-center' style={{ height: '100%', width: '100%', paddingTop: '0rem' }}>
                        <MDBRow>
                            <MDBCol md='12' className='mb-4  text-center'>
                                <h1 className='display-5 mb-0 pt-md-5 pt-5  font-weight-bold' >
                                    USER &nbsp;
                                    <span className='font-weight-bold h1col'>ANALYSIS</span>
                                </h1>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <br></br><br></br>
                    <div className=" container-fluid itemColorMain">
                        <MDBRow>
                            <MDBCol size="5">
                                <MDBCard>
                                    <MDBCardBody className="charts">
                                        <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            {/*    ---------------------------------------------Customer feedback----------------------------------------------------------------*/}
                            <MDBCol size="7"  >
                                <MDBCard >
                                    <MDBCardBody className="feedbackdiv2 feedbackcard">
                                        <MDBTable scrollY  maxHeight="500px">
                                            {/*-------------------------------------------------------------*/}
                                            <MDBCard >
                                                <MDBCardBody>
                                                    <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                    <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                    <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                        his/her issues and requests that the user admin should consider</MDBCardText>
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
                                                </MDBCardBody>
                                            </MDBCard>
                                            <br/>
                                            {/*-------------------------------------------------------------*/} {/*-------------------------------------------------------------*/}
                                            <MDBCard >
                                                <MDBCardBody>
                                                    <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                    <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                    <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                        his/her issues and requests that the user admin should consider</MDBCardText>
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
                                                </MDBCardBody>
                                            </MDBCard>
                                            <br/>
                                            {/*-------------------------------------------------------------*/} {/*-------------------------------------------------------------*/}
                                            <MDBCard >
                                                <MDBCardBody>
                                                    <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                    <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                    <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                        his/her issues and requests that the user admin should consider</MDBCardText>
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
                                                </MDBCardBody>
                                            </MDBCard>
                                            <br/>
                                            {/*-------------------------------------------------------------*/} {/*-------------------------------------------------------------*/}
                                            <MDBCard >
                                                <MDBCardBody>
                                                    <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                    <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                    <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                        his/her issues and requests that the user admin should consider</MDBCardText>
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
                                                </MDBCardBody>
                                            </MDBCard>
                                            <br/>
                                            {/*-------------------------------------------------------------*/} {/*-------------------------------------------------------------*/}
                                            <MDBCard >
                                                <MDBCardBody>
                                                    <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                    <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                    <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                        his/her issues and requests that the user admin should consider</MDBCardText>
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
                                                </MDBCardBody>
                                            </MDBCard>
                                            <br/>
                                            {/*-------------------------------------------------------------*/} {/*-------------------------------------------------------------*/}
                                            <MDBCard >
                                                <MDBCardBody>
                                                    <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                    <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                    <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                        his/her issues and requests that the user admin should consider</MDBCardText>
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
                                                </MDBCardBody>
                                            </MDBCard>
                                            <br/>
                                            {/*-------------------------------------------------------------*/} {/*-------------------------------------------------------------*/}
                                            <MDBCard >
                                                <MDBCardBody>
                                                    <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                    <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                    <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                        his/her issues and requests that the user admin should consider</MDBCardText>
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
                                                </MDBCardBody>
                                            </MDBCard>
                                            <br/>
                                            {/*-------------------------------------------------------------*/} {/*-------------------------------------------------------------*/}
                                            <MDBCard >
                                                <MDBCardBody>
                                                    <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                    <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                    <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                        his/her issues and requests that the user admin should consider</MDBCardText>
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
                                                </MDBCardBody>
                                            </MDBCard>
                                            <br/>
                                            {/*-------------------------------------------------------------*/} {/*-------------------------------------------------------------*/}
                                            <MDBCard >
                                                <MDBCardBody>
                                                    <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                    <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                    <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                        his/her issues and requests that the user admin should consider</MDBCardText>
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
                                                </MDBCardBody>
                                            </MDBCard>
                                            <br/>
                                            {/*-------------------------------------------------------------*/} {/*-------------------------------------------------------------*/}
                                            <MDBCard >
                                                <MDBCardBody>
                                                    <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                    <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                    <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                        his/her issues and requests that the user admin should consider</MDBCardText>
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
                                                </MDBCardBody>
                                            </MDBCard>
                                            <br/>
                                            {/*-------------------------------------------------------------*/} {/*-------------------------------------------------------------*/}
                                            <MDBCard >
                                                <MDBCardBody>
                                                    <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                    <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                    <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                        his/her issues and requests that the user admin should consider</MDBCardText>
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
                                                </MDBCardBody>
                                            </MDBCard>
                                            <br/>
                                            {/*-------------------------------------------------------------*/} {/*-------------------------------------------------------------*/}
                                            <MDBCard >
                                                <MDBCardBody>
                                                    <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                    <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                    <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                        his/her issues and requests that the user admin should consider</MDBCardText>
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
                                                </MDBCardBody>
                                            </MDBCard>
                                            <br/>
                                            {/*-------------------------------------------------------------*/} {/*-------------------------------------------------------------*/}
                                            <MDBCard >
                                                <MDBCardBody>
                                                    <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                    <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                    <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                        his/her issues and requests that the user admin should consider</MDBCardText>
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
                                                </MDBCardBody>
                                            </MDBCard>
                                            <br/>
                                            {/*-------------------------------------------------------------*/} {/*-------------------------------------------------------------*/}
                                            <MDBCard >
                                                <MDBCardBody>
                                                    <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                    <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                    <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                        his/her issues and requests that the user admin should consider</MDBCardText>
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
                                                </MDBCardBody>
                                            </MDBCard>
                                            <br/>
                                            {/*-------------------------------------------------------------*/} {/*-------------------------------------------------------------*/}
                                            <MDBCard >
                                                <MDBCardBody>
                                                    <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                    <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                    <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                        his/her issues and requests that the user admin should consider</MDBCardText>
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
                                                </MDBCardBody>
                                            </MDBCard>
                                            <br/>
                                            {/*-------------------------------------------------------------*/} {/*-------------------------------------------------------------*/}
                                            <MDBCard >
                                                <MDBCardBody>
                                                    <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                    <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                    <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                        his/her issues and requests that the user admin should consider</MDBCardText>
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
                                                </MDBCardBody>
                                            </MDBCard>
                                            <br/>
                                            {/*-------------------------------------------------------------*/} {/*-------------------------------------------------------------*/}
                                            <MDBCard >
                                                <MDBCardBody>
                                                    <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                    <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                    <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                        his/her issues and requests that the user admin should consider</MDBCardText>
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
                                                </MDBCardBody>
                                            </MDBCard>
                                            <br/>
                                            {/*-------------------------------------------------------------*/} {/*-------------------------------------------------------------*/}
                                            <MDBCard >
                                                <MDBCardBody>
                                                    <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                    <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                    <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                        his/her issues and requests that the user admin should consider</MDBCardText>
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
                                                </MDBCardBody>
                                            </MDBCard>
                                            <br/>
                                            {/*-------------------------------------------------------------*/} {/*-------------------------------------------------------------*/}
                                            <MDBCard >
                                                <MDBCardBody>
                                                    <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                    <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                    <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                        his/her issues and requests that the user admin should consider</MDBCardText>
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
                                                </MDBCardBody>
                                            </MDBCard>
                                            <br/>
                                            {/*-------------------------------------------------------------*/} {/*-------------------------------------------------------------*/}
                                            <MDBCard >
                                                <MDBCardBody>
                                                    <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                    <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                    <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                        his/her issues and requests that the user admin should consider</MDBCardText>
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
                                                </MDBCardBody>
                                            </MDBCard>
                                            <br/>
                                            {/*-------------------------------------------------------------*/} {/*-------------------------------------------------------------*/}
                                            <MDBCard >
                                                <MDBCardBody>
                                                    <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                    <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                    <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                        his/her issues and requests that the user admin should consider</MDBCardText>
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
                                                </MDBCardBody>
                                            </MDBCard>
                                            <br/>
                                            {/*-------------------------------------------------------------*/} {/*-------------------------------------------------------------*/}
                                            <MDBCard >
                                                <MDBCardBody>
                                                    <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                    <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                    <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                        his/her issues and requests that the user admin should consider</MDBCardText>
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
                                                </MDBCardBody>
                                            </MDBCard>
                                            <br/>
                                            {/*-------------------------------------------------------------*/} {/*-------------------------------------------------------------*/}
                                            <MDBCard >
                                                <MDBCardBody>
                                                    <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                    <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                    <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                        his/her issues and requests that the user admin should consider</MDBCardText>
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
                                                </MDBCardBody>
                                            </MDBCard>
                                            <br/>
                                            {/*-------------------------------------------------------------*/} {/*-------------------------------------------------------------*/}
                                            <MDBCard >
                                                <MDBCardBody>
                                                    <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                    <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                    <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                        his/her issues and requests that the user admin should consider</MDBCardText>
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
                                                </MDBCardBody>
                                            </MDBCard>
                                            <br/>
                                            {/*-------------------------------------------------------------*/} {/*-------------------------------------------------------------*/}
                                            <MDBCard >
                                                <MDBCardBody>
                                                    <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                    <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                    <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                        his/her issues and requests that the user admin should consider</MDBCardText>
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
                                                </MDBCardBody>
                                            </MDBCard>
                                            <br/>
                                            {/*-------------------------------------------------------------*/} {/*-------------------------------------------------------------*/}
                                            <MDBCard >
                                                <MDBCardBody>
                                                    <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                    <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                    <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                        his/her issues and requests that the user admin should consider</MDBCardText>
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
                                                </MDBCardBody>
                                            </MDBCard>
                                            <br/>
                                            {/*-------------------------------------------------------------*/} {/*-------------------------------------------------------------*/}
                                            <MDBCard >
                                                <MDBCardBody>
                                                    <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                    <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                    <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                        his/her issues and requests that the user admin should consider</MDBCardText>
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
                                                </MDBCardBody>
                                            </MDBCard>
                                            <br/>
                                            {/*-------------------------------------------------------------*/} {/*-------------------------------------------------------------*/}
                                            <MDBCard >
                                                <MDBCardBody>
                                                    <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                    <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                    <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                        his/her issues and requests that the user admin should consider</MDBCardText>
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
                                                </MDBCardBody>
                                            </MDBCard>
                                            <br/>
                                            {/*-------------------------------------------------------------*/} {/*-------------------------------------------------------------*/}
                                            <MDBCard >
                                                <MDBCardBody>
                                                    <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                    <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                    <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                        his/her issues and requests that the user admin should consider</MDBCardText>
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
                                                </MDBCardBody>
                                            </MDBCard>
                                            <br/>
                                            {/*-------------------------------------------------------------*/} {/*-------------------------------------------------------------*/}
                                            <MDBCard >
                                                <MDBCardBody>
                                                    <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                    <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                    <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                        his/her issues and requests that the user admin should consider</MDBCardText>
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
                                                </MDBCardBody>
                                            </MDBCard>
                                            <br/>
                                            {/*-------------------------------------------------------------*/} {/*-------------------------------------------------------------*/}
                                            <MDBCard >
                                                <MDBCardBody>
                                                    <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                    <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                    <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                        his/her issues and requests that the user admin should consider</MDBCardText>
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
                                                </MDBCardBody>
                                            </MDBCard>
                                            <br/>
                                            {/*-------------------------------------------------------------*/} {/*-------------------------------------------------------------*/}
                                            <MDBCard >
                                                <MDBCardBody>
                                                    <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>
                                                    <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>
                                                    <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,
                                                        his/her issues and requests that the user admin should consider</MDBCardText>
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
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
                </MDBView>
            </div>
        );
    }
}
