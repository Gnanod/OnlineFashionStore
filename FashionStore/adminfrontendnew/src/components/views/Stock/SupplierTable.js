import React, {Component} from "react";
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBView,
    MDBContainer,
    MDBBtnGroup,
    MDBIcon,  MDBFormInline,
    MDBCard,
    MDBCardBody,
    MDBBtn, MDBTableHead, MDBTableBody, MDBTable, MDBAlert,MDBPagination,MDBPageItem,MDBPageNav,
} from 'mdbreact';
// import './UserManage.css';
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import constants from "../../../constants/constants";
import axios from "axios";
import {InputGroup} from 'react-bootstrap';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import StockPriceTableBody from "./StockPriceTableBody";


export default class SupplierTable extends Component{

    constructor(props) {
        super(props);


        this.state = {
            suppliers: [],
            empty: false

        }

        this.sweetalertfunction = this.sweetalertfunction.bind(this);
        this.getAllSuppliers = this.getAllSuppliers.bind(this);
        this.deleteSuppliers = this.deleteSuppliers.bind(this);
        this.getAllSuppliers();

    }

    componentDidMount(){
        if(localStorage.getItem("userLogged")!=="userLogged"){
            this.props.history.push('/');
        }
    }

    getAllSuppliers() {
        axios.get(constants.backend_url + 'api/supplier/getAllSuppliers').then(response => {
            this.setState({suppliers: response.data});
            console.log("Suppler")
            console.log(response.data)
            console.log("Supplier")
        }).catch(function (error) {
            console.log(error);
        })
        console.log(this.state.suppliers);
    }

    sweetalertfunction(id){
        console.log("button clicks");
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            console.log("suppppp");
            if (result.value) {
                console.log("outside of deleteSupplier");
                axios.get(constants.backend_url + 'api/supplier/deleteSuppliers/'+ id).then(response => {
                    console.log("Inside of deleteSupplier");
                    if (response.data.supplierDelete === 'success') {
                        swalWithBootstrapButtons.fire(
                            '',
                            'Delete Failed !.',
                            'error'
                        )
                    }else {
                        Swal.fire(
                            '',
                            'Customer Deleted !',
                            'success'
                        )
                        this.getAllSuppliers();
                    }
                })

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Customer details not deleted',
                    'error'
                )
            }
        })
    }


    deleteSuppliers(id){
        const notDeletedItems = this.state.suppliers.filter(supplier => supplier._id !== id);
        this.setState({
                suppliers: notDeletedItems

            }
        )
        if (notDeletedItems.length === 0) {
            this.setState({
                noItem: true
            })
        }
    }

    render() {

        const suppliersArr = this.state.suppliers;
        // const {deleteSuppliers} = this.props;
        const deleteSuppliers = this.deleteStockPrice;

        return (

            <div>

                <MDBCard className="mb-5">
                    <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">

                        <NavLink exact={true} to="/supplier/suppliermanage" >
                            <button type="button" className="btn btn-primary"> Supplier Manage</button>
                        </NavLink>

                        <NavLink exact={true} to="/supplier/supplieranalysis" activeClassName="activeClass">
                            <button type="button" className="btn btn-success ">Supplier Details</button>
                        </NavLink>

                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    </MDBCardBody>
                </MDBCard>


            <MDBCard className="card">
                <MDBCardBody>
                    <MDBTable responsive>
                        <MDBTableHead color="primary-color" textWhite>
                            <tr>
                                <th>Company Name</th>
                                <th>Website</th>
                                <th>Description</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Company Number</th>
                                <th>Mobile Number</th>
                                <th>Email</th>
                                <th>Fax</th>
                                <th>Address1</th>
                                <th>Address2</th>
                                <th>City</th>
                                <th>County</th>
                                <th>State</th>
                                <th>Action</th>

                            </tr>

                        </MDBTableHead>
                        {
                            suppliersArr.length === 0 ?
                                <tr >
                                    <td colSpan="12" style={{textAlign : "center", fontWeight: "bold"}}>
                                        <MDBAlert color="danger" >
                                            No Suppliers Registered
                                        </MDBAlert>
                                    </td>
                                </tr> :
                                suppliersArr.map(sup => {

                                    return(
                                        <MDBTableBody>
                                            <tr>
                                                <td>{sup.companyName}</td>
                                                <td>{sup.companyWebsite}</td>
                                                <td>{sup.description}</td>
                                                <td>{sup.firstName}</td>
                                                <td>{sup.lastName}</td>
                                                <td>{sup.companyNumber}</td>
                                                <td>{sup.mobileNumber}</td>
                                                <td>{sup.email}</td>
                                                <td>{sup.fax}</td>
                                                <td>{sup.address1}</td>
                                                <td>{sup.address2}</td>
                                                <td>{sup.city}</td>
                                                <td>{sup.country}</td>
                                                <td>{sup.state}</td>
                                                <td>
                                                    <MDBBtn tag="a" size="sm" color="danger" onClick={() => this.sweetalertfunction(sup._id)} >
                                                        <MDBIcon size="lg" icon="times-circle" />
                                                    </MDBBtn>
                                                </td>
                                            </tr>
                                        </MDBTableBody>
                                    )
                                })}
                    </MDBTable>
                </MDBCardBody>
            </MDBCard>

            </div>
        );
    }
}
