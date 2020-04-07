import React, {Component} from "react";
import './Style/Item.css'
import {
    MDBAlert,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCol,
    MDBInput,
    MDBRow, MDBTable,
    MDBTableHead
} from "mdbreact";

import axios from "axios";
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

import constants from '../../Constants/constants';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import BrandCategoryTableBody from "./BrandCategoryTableBody";

export default class BrandCategory extends Component {

    constructor(props) {
        super(props);


        this.state = {
            brandName: ' ',
            brandNameValidation: false,
            brandCode: ' ',
            brandCodeValidation: false,
            discount: 0,
            brandDiscountValidation: false,
            categoryName: ' ',
            categoryCode: ' ',
            categoryNameValidation: false,
            categoryCodeValidation: false,
            categories :[],
            brands :[],
            brandValue :' ',
            selectedBrandObject :' ',
            selectedCharacterObject :' ',
            brandCategoryArray :[]

        }

        this.onChangeBrandCode = this.onChangeBrandCode.bind(this);
        this.onChangeBrandName = this.onChangeBrandName.bind(this);
        this.onChangeDiscount = this.onChangeDiscount.bind(this);
        this.onSubmitbBrands = this.onSubmitbBrands.bind(this);
        this.onChangeCategoryCode = this.onChangeCategoryCode.bind(this);
        this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
        this.onSubmitCategory = this.onSubmitCategory.bind(this);
        this.getAllBrands = this.getAllBrands.bind(this);
        this.getAllCategories = this.getAllCategories.bind(this);
        this.onChangeGetBrandName = this.onChangeGetBrandName.bind(this);
        this.onChangeGetCategoryName = this.onChangeGetCategoryName.bind(this);
        this.addDetailsToTable = this.addDetailsToTable.bind(this);
        this.getAllBrands();
        this.getAllCategories();
    }

    onChangeCategoryCode(e) {
        this.setState({
            categoryCode: e.target.value,
            categoryCodeValidation :false

        })
    }

    onChangeCategoryName(e) {
        this.setState({
            categoryName: e.target.value,
            categoryNameValidation: false
        })
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

    onSubmitCategory(e) {
        e.preventDefault();
        if (this.state.categoryName !== ' ') {
            if (this.state.categoryCode !== ' ') {
                const newCategory={
                    categoryName: this.state.categoryName,
                    categoryCode: this.state.categoryCode
                }






                axios.post(constants.backend_url+'api/category/add', newCategory)
                    .then(res => {
                            console.log(res)
                            if (res.data.category === 'success') {
                                Swal.fire(
                                    '',
                                    'Category Details Added Success.',
                                    'success'
                                );
                                this.setState({
                                    categoryName: ' ',
                                    categoryCode :' '
                                })
                                this.getAllCategories();
                            } else {
                                Swal.fire(
                                    '',
                                    'Category Added Faild)',
                                    'error'
                                )
                            }
                        }
                    );

            } else {
                this.setState({
                    categoryCodeValidation: true
                })
            }
        } else {
            this.setState({
                categoryNameValidation: true
            })
        }
    }


    onSubmitbBrands(e) {
        e.preventDefault();
        if (this.state.brandName !== ' ') {
            if (this.state.brandCode !== ' ') {
                if (this.state.brandDiscountValidation !== ' ') {
                    const newBrand = {
                        brandCode: this.state.brandCode,
                        brandName: this.state.brandName,
                        sellingDiscount: this.state.discount,
                    }
                    axios.post(constants.backend_url+'api/brand/add', newBrand)
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
                                    this.getAllBrands();

                                } else {
                                    Swal.fire(
                                        '',
                                        'Brand Added Faild)',
                                        'error'
                                    )
                                }
                            }
                        );


                    // sdfhskjdhs
                    // sdgsjhdgs
                    // sdgshg

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

    addDetailsToTable(e){
        e.preventDefault();
        const newBrandCategory ={
            category : this.state.selectedCharacterObject,
            brand  :this.state.selectedBrandObject
        }
        const array = [newBrandCategory, ...this.state.brandCategoryArray];
        this.setState({
            brandCategoryArray :array
        })
        this.getAllBrands();
        this.getAllCategories();
    }

    getAllBrands(){
        axios.get(constants.backend_url+'api/brand/getAllBrands').then(response => {
            this.setState({brands: response.data});
        }).catch(function (error) {
            console.log(error);
        })
        console.log(this.state.brands);
    }

    onChangeGetBrandName(value){
        console.log(value)
        this.state.selectedBrandObject=value;
        this.setState({
            selectedBrandObject :  this.state.selectedBrandObject
        });

    }

    onChangeGetCategoryName(value){
        this.setState({
            selectedCharacterObject : value
        });
    }
    getAllCategories(){
        axios.get(constants.backend_url+'api/category/getAllCategories').then(response => {
            this.setState({categories: response.data});
        }).catch(function (error) {
            console.log(error);
        })

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
                                <form onSubmit={this.onSubmitbBrands}>
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
                                <form onSubmit={this.onSubmitCategory}>

                                    <MDBInput label="Category Name" size="sm"
                                              value={this.state.categoryName}
                                              onChange={this.onChangeCategoryName}
                                    />
                                    {
                                        this.state.categoryNameValidation ? <MDBAlert color="danger">
                                            Category Name Field Is Empty
                                        </MDBAlert> : ''
                                    }
                                    <MDBInput label="Category Code" size="sm"
                                              value={this.state.categoryCode}
                                              onChange={this.onChangeCategoryCode}
                                    />
                                    {
                                        this.state.categoryCodeValidation ? <MDBAlert color="danger">
                                            Category Code Field Is Empty
                                        </MDBAlert> : ''
                                    }
                                    <MDBBtn type="submit">Save</MDBBtn>

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
                                <form onSubmit={this.addDetailsToTable}>
                                    <Autocomplete
                                        id="combo-box-demo"
                                        options={this.state.brands}
                                        getOptionLabel={(option) => option.brandName}
                                        style={{ width: 300 }}
                                        onChange={(event, value) => this.onChangeGetBrandName(value)}
                                        renderInput={(params) => <TextField {...params} label="Brand Name"  />}
                                        size="sm"
                                    />
                                    <br/>
                                    <Autocomplete
                                        id="combo-box-demo"
                                        options={this.state.categories}
                                        getOptionLabel={(option) => option.categoryName}
                                        style={{ width: 300 }}
                                        onChange={(event, value) => this.onChangeGetCategoryName(value)}
                                        renderInput={(params) => <TextField {...params} label="Category Name"  />}
                                        size="sm"
                                    />
                                    {/*<AutoComplete data={this.state.categories} placeholder="Category Name"/>*/}
                                    <br/>
                                    <MDBBtn type="submit">Add</MDBBtn>
                                </form>

                                    <br/>
                                    <br/>
                                    <MDBTable>
                                        <MDBTableHead color="primary-color" textWhite>
                                            <tr>
                                                <th>Brand Name</th>
                                                <th>Category Name</th>

                                            </tr>
                                        </MDBTableHead>
                                        <BrandCategoryTableBody
                                            brandCategoryListList={this.state.brandCategoryArray}
                                        />
                                    </MDBTable>
                                    <MDBBtn href="#">Save</MDBBtn>


                            </MDBCardBody>
                        </MDBCard>


                    </MDBCol>
                    <MDBCol size="6"/>
                </MDBRow>

            </div>
        );
    }
}
