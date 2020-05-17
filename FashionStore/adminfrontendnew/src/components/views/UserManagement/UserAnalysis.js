import React, {Component} from "react";
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
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
import { Bar } from "react-chartjs-2";
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import './UserManage.css'
import axios from "axios";
import constants from "../../../constants/constants";



export default class UserAnalysis extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feedbackList: [],
            detailList:[],
            countMale: 0,
            countFemale: 0,
            dataBar: {},
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


        this.getDetails = this.getDetails.bind(this);
        this.getUserDetails = this.getUserDetails.bind(this);
        this.sweetalertfunction = this.sweetalertfunction.bind(this);
        this.countgender = this.countgender.bind(this);
    }
    componentDidMount() {
        this.getDetails();
        this.getUserDetails();
    }

    getDetails(){
        console.log("get Feedback");
        axios.get(constants.backend_url + 'api/feedback/getAlldetail').then(response => {
            console.log(response.data);
            this.setState({feedbackList:response.data})
            this.countgender();
        }).catch(function (error) {
            console.log(error);
        })
    }

    countgender(){
        console.log("gender count");
    }

    sweetalertfunction(){
        console.log("button clicks");
        Swal.fire(
            '',
            'Feedback Deleted',
            'success'
        );
    }


    getUserDetails(){
        axios.get(constants.backend_url + 'api/userDetail/getAllusers').then(response => {

            console.log('JJJJJJJJJJJJ');
            console.log(response.data);
            console.log('JJJJJJJJJJJJ');
            let maleCount=0;
            let femaleCount=0;
            response.data.map(user=>{
                if(user.gender === 'Male'){
                    maleCount++;
                }
                if(user.gender === 'Female'){
                    femaleCount ++;
                }
            })
            this.setState({
                detailList:response.data,
                countMale :maleCount,
                countFemale :femaleCount,
                dataBar: {
                    labels: [ "Male", "Female"],
                    datasets: [
                        {
                            label: "Gender attraction towards website",


                            data: [maleCount, femaleCount],


                            backgroundColor: [
                                "rgba(236, 112, 99 )",
                                "rgba(93, 173, 226)",
                            ],
                            borderWidth: 2,
                            borderColor: [
                                "rgba(255, 134, 159, 1)",
                                "rgba(98,  182, 239, 1)",
                            ]
                        }
                    ]
                }
            })
        }).catch(function (error) {
            console.log(error);
        })
    }


    render() {
        return (
            <div id='parallaxintro'>
                {/*<MDBView>*/}
                {/*    <MDBMask className='rgba-white-light' />*/}


                    <MDBCard className="mb-5">
                        <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
                            <NavLink exact={true} to="/usermanage/useranalysis" activeClassName="activeClass" >
                                <button type="button" className="btn btn-primary"> User Analysis</button>
                            </NavLink>
                            <NavLink exact={true} to="/usermanage" >
                                <button type="button" className="btn btn-success">User Details</button>
                            </NavLink>
                            <NavLink exact={true} to="/usermanage/adminmanage" >
                                <button type="button" className="btn btn-success "> Admin Manage</button>
                            </NavLink>
                            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        </MDBCardBody>
                    </MDBCard>

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
                                        <MDBTable scrollY  maxHeight="420px">

                                            {
                                                this.state.feedbackList.map(item => {
                                                    return(


                                        <div>
                                            <MDBCard>
                                                <MDBCardBody>
                                                    <h5 className='pink-text '><MDBIcon icon='envelope'/> New Feedback</h5>
                                                    <MDBCardTitle className='font-weight-bold'>Customer : {item.Name}</MDBCardTitle>
                                                    <MDBCardText className="feedbacktext">{item.feedback}</MDBCardText>
                                                    <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>
                                                </MDBCardBody>

                                            </MDBCard>
                                            <br/>
                                        </div>

                                                )
                                                })}

                                            {/*/!*-------------------------------------------------------------*!/*/}
                                            {/*<MDBCard >*/}
                                            {/*    <MDBCardBody>*/}
                                            {/*        <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>*/}
                                            {/*        <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>*/}
                                            {/*        <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,*/}
                                            {/*            his/her issues and requests that the user admin should consider</MDBCardText>*/}
                                            {/*        <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>*/}
                                            {/*    </MDBCardBody>*/}
                                            {/*</MDBCard>*/}
                                            {/*<br/>*/}
                                            {/*/!*-------------------------------------------------------------*!/*/}


                                            {/*/!*-------------------------------------------------------------*!/*/}
                                            {/*<MDBCard >*/}
                                            {/*    <MDBCardBody>*/}
                                            {/*        <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>*/}
                                            {/*        <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>*/}
                                            {/*        <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,*/}
                                            {/*            his/her issues and requests that the user admin should consider</MDBCardText>*/}
                                            {/*        <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>*/}
                                            {/*    </MDBCardBody>*/}
                                            {/*</MDBCard>*/}
                                            {/*<br/>*/}
                                            {/*/!*-------------------------------------------------------------*!/*/}

                                            {/*/!*-------------------------------------------------------------*!/*/}
                                            {/*<MDBCard >*/}
                                            {/*    <MDBCardBody>*/}
                                            {/*        <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>*/}
                                            {/*        <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>*/}
                                            {/*        <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,*/}
                                            {/*            his/her issues and requests that the user admin should consider</MDBCardText>*/}
                                            {/*        <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>*/}
                                            {/*    </MDBCardBody>*/}
                                            {/*</MDBCard>*/}
                                            {/*<br/>*/}
                                            {/*/!*-------------------------------------------------------------*!/*/}

                                            {/*/!*-------------------------------------------------------------*!/*/}
                                            {/*<MDBCard >*/}
                                            {/*    <MDBCardBody>*/}
                                            {/*        <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>*/}
                                            {/*        <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>*/}
                                            {/*        <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,*/}
                                            {/*            his/her issues and requests that the user admin should consider</MDBCardText>*/}
                                            {/*        <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>*/}
                                            {/*    </MDBCardBody>*/}
                                            {/*</MDBCard>*/}
                                            {/*<br/>*/}
                                            {/*/!*-------------------------------------------------------------*!/*/}

                                            {/*/!*-------------------------------------------------------------*!/*/}
                                            {/*<MDBCard >*/}
                                            {/*    <MDBCardBody>*/}
                                            {/*        <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>*/}
                                            {/*        <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>*/}
                                            {/*        <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,*/}
                                            {/*            his/her issues and requests that the user admin should consider</MDBCardText>*/}
                                            {/*        <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>*/}
                                            {/*    </MDBCardBody>*/}
                                            {/*</MDBCard>*/}
                                            {/*<br/>*/}
                                            {/*/!*-------------------------------------------------------------*!/*/}

                                            {/*/!*-------------------------------------------------------------*!/*/}
                                            {/*<MDBCard >*/}
                                            {/*    <MDBCardBody>*/}
                                            {/*        <h5 className='pink-text'><MDBIcon icon='envelope'/> New Feedback</h5>*/}
                                            {/*        <MDBCardTitle className='font-weight-bold'>Customer name</MDBCardTitle>*/}
                                            {/*        <MDBCardText>This is a Feedback message from the customer - About his feedbacks and thoughts. suggestions,*/}
                                            {/*            his/her issues and requests that the user admin should consider</MDBCardText>*/}
                                            {/*        <MDBBtn color='unique' onClick={this.sweetalertfunction}>Delete</MDBBtn>*/}
                                            {/*    </MDBCardBody>*/}
                                            {/*</MDBCard>*/}
                                            {/*<br/>*/}
                                            {/*/!*-------------------------------------------------------------*!/*/}
                                        </MDBTable>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </div>
                {/*</MDBView>*/}
            </div>
        );
    }
}
