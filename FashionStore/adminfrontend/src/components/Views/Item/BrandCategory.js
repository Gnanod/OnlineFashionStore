import React, {Component} from "react";
import './Style/Item.css'
import {
    MDBAlert,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBInput,
    MDBRow, MDBTable,
    MDBTableBody, MDBTableHead
} from "mdbreact";
import {AutoComplete} from "rsuite";
import axios from "axios";
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

export default class BrandCategory extends Component {

    constructor(props) {
        super(props);


        this.state = {
            brandName: ' ',
            brandNameValidation: false,
            brandCode: ' ',
            brandCodeValidation: false,
            discount: 0,
            brandDiscountValidation: false
        }

        this.onChangeBrandCode = this.onChangeBrandCode.bind(this);
        this.onChangeBrandName = this.onChangeBrandName.bind(this);
        this.onChangeDiscount = this.onChangeDiscount.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeBrandName(e) {
        this.setState({
            brandName: e.target.value,
            brandNameValidation: false
        });
    }

    onChangeBrandCode(e) {
        this.setState({
            brandCode: e.target.value,
            brandCodeValidation: false

        });
    }

    onChangeDiscount(e) {
        this.setState({
            discount: e.target.value,
            brandDiscountValidation: false
        });
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.state.brandName !== ' ') {
            if (this.state.brandCode !== ' ') {
                if (this.state.brandDiscountValidation !== ' ') {
                    const newBrand = {
                        brandCode: this.state.brandCode,
                        brandName: this.state.brandName,
                        sellingDiscount: this.state.discount,
                    }

                    axios.post('http://localhost:4000/api/brand/add', newBrand)
                        .then(res => {
                                console.log(res)
                                if (res.data.brand === 'success') {
                                    Swal.fire(
                                        '',
                                        'Brand Details Added Success.',
                                        'success'
                                    );
                                    this.setState({
                                        brandName: ' ',
                                        brandCode: ' ',
                                        discount: 0

                                    })


                                } else {
                                    Swal.fire(
                                        '',
                                        'Brand Added Faild)',
                                        'error'
                                    )
                                }
                            }
                        );


                } else {
                    this.setState({
                        brandDiscountValidation: true
                    })
                }
            } else {
                this.setState({
                    brandCodeValidation: true
                })
            }
        } else {
            this.setState({
                brandNameValidation: true
            })
        }

    }

    render() {

        return (

            <div className=" container-fluid BrandCategoryMain">

                <br/>
                <br/>
                <MDBRow>
                    <MDBCol size="6">
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle>Add New Brand</MDBCardTitle>
                                <form onSubmit={this.onSubmit}>
                                    <MDBInput label="Brand Name" size="sm"
                                              value={this.state.brandName}
                                              onChange={this.onChangeBrandName}
                                    />
                                    {
                                        this.state.brandNameValidation ? <MDBAlert color="danger">
                                            Brand Name Field Is Empty
                                        </MDBAlert> : ''
                                    }


                                    <MDBInput label="Brand Code" size="sm"
                                              value={this.state.brandCode}
                                              onChange={this.onChangeBrandCode}
                                    />
                                    {
                                        this.state.brandCodeValidation ? <MDBAlert color="danger">
                                            Brand Code Field Is Empty
                                        </MDBAlert> : ''
                                    }

                                    <MDBInput label="Selling Discount" size="sm"
                                              pattern="[0-9]*"
                                              value={this.state.discount}
                                              onChange={this.onChangeDiscount}


                                    />
                                    {
                                        this.state.brandDiscountValidation ? <MDBAlert color="danger">
                                            Discount Field Is Empty
                                        </MDBAlert> : ''
                                    }
                                    <MDBBtn type="submit">Save</MDBBtn>
                                </form>
                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>

                    <MDBCol size="6">
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle>Add New Category</MDBCardTitle>
                                <form>
                                    <MDBInput label="Category Name" size="sm"/>
                                    <MDBInput label="Category Code" size="sm"/>
                                    <MDBBtn href="#">Save</MDBBtn>
                                </form>
                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>

                <br/>
                <MDBRow>

                    <MDBCol>

                        <MDBCard size="6">
                            <MDBCardBody>
                                <MDBCardTitle>Add New Category</MDBCardTitle>
                                <form>
                                    <AutoComplete data={''} placeholder="BrandName"/>
                                    <br/>
                                    <AutoComplete data={''} placeholder="Category Name"/>
                                    <br/>
                                    <MDBBtn href="#">Add</MDBBtn>


                                    <br/>
                                    <br/>
                                    <MDBTable>
                                        <MDBTableHead color="primary-color" textWhite>
                                            <tr>
                                                <th>Brand Name</th>
                                                <th>Category Name</th>

                                            </tr>
                                        </MDBTableHead>
                                        <MDBTableBody>
                                            <tr>
                                                <td>1</td>
                                                <td>Mark</td>

                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Jacob</td>

                                            </tr>

                                        </MDBTableBody>
                                    </MDBTable>
                                    <MDBBtn href="#">Save</MDBBtn>
                                </form>

                            </MDBCardBody>
                        </MDBCard>


                    </MDBCol>
                    <MDBCol size="6"/>
                </MDBRow>

            </div>
        );
    }
}
