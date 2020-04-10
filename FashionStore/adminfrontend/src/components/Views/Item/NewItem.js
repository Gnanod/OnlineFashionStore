import React, {Component} from "react";
import './Style/Item.css'
import {MDBAlert, MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCol, MDBInput, MDBRow} from "mdbreact";
import TextField from "@material-ui/core/TextField/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete/Autocomplete";
import axios from "axios";
import constants from "../../Constants/constants";
import {makeStyles} from '@material-ui/core/styles';
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

export default class NewItem extends Component {


    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            brands: [],
            itemCode: ' ',
            itemCodeValidation: false,
            itemName: ' ',
            itemNameValidation: false,
            onChangeItemName: ' ',
            itemDescription: '',
            itemDescriptionValidation: false,
            image: ' ',
            imageURL: ' ',
            imageURLValidation: false,
            selectedBrandObject: ' ',
            selectedBrandObjectValidation: false,
            selectedCharacterObject: ' ',
            selectedCharacterObjectValidation: false,
            imageValidation :false

        }


        this.onChangeGetBrandName = this.onChangeGetBrandName.bind(this);
        this.onChangeGetCategoryName = this.onChangeGetCategoryName.bind(this);
        this.getAllBrands = this.getAllBrands.bind(this);
        this.getAllCategories = this.getAllCategories.bind(this);
        this.onChangeItemCode = this.onChangeItemCode.bind(this);
        this.onChangeItemName = this.onChangeItemName.bind(this);
        this.onChangeItemDescription = this.onChangeItemDescription.bind(this);
        this.itemOnSubmit = this.itemOnSubmit.bind(this);
        this.onchangeFile = this.onchangeFile.bind(this);
        this.removePhoto = this.removePhoto.bind(this);
    }


    componentDidMount() {
        this.getAllBrands();
        this.getAllCategories();
    }

    onChangeItemDescription(e) {
        this.setState({
            itemDescription: e.target.value,
            itemDescriptionValidation: false
        });
    }

    onchangeFile(e) {

        this.setState({
            image: e.target.files[0],
            imageUrl: URL.createObjectURL(e.target.files[0]),
            imageURLValidation: true,
            imageValidation :false
        })

    }

    removePhoto() {
        this.setState({
            image: ' ',
            imageUrl: ' ',
            imageURLValidation: false,
            imageValidation :false
        })

    }

    itemOnSubmit(e) {
        e.preventDefault();

        if (this.state.itemCode !== ' ') {
            if (this.state.selectedBrandObject !== ' ') {
                if(this.state.itemName !== ' '){
                    if(this.state.selectedCharacterObject !==' '){
                        if(this.state.itemDescription !==' '){
                            if(this.state.image !==' '){
                                const  formData = new FormData();
                                formData.append('file',this.state.image);
                                formData.append('itemCode',this.state.itemCode);
                                formData.append('itemName',this.state.itemName);
                                formData.append('description',this.state.itemDescription);
                                formData.append('brandCode',this.state.selectedBrandObject.brandCode);
                                formData.append('categoryCode',this.state.selectedCharacterObject.categoryCode);

                                axios.post(constants.spring_backend_url + 'ItemController/addItem/',formData)
                                    .then(res => {
                                            if (res.status === 200) {
                                                Swal.fire(
                                                    '',
                                                    'Item Details Added Successfully',
                                                    'success'
                                                );
                                                this.setState({
                                                    image: ' ',
                                                    itemCode: ' ',
                                                    itemName :' ',
                                                    itemDescription : ' ',
                                                    brandCode : ' ',
                                                    categoryCode : ' ',
                                                    imageURL :' ',
                                                    imageURLValidation: false,
                                                })
                                                this.getAllCategories();
                                            } else {
                                                Swal.fire(
                                                    '',
                                                    'Item Added Faild',
                                                    'error'
                                                )
                                            }
                                        }
                                    );
                            }else{
                                this.setState({
                                    imageValidation: true
                                })
                            }
                        }else{
                            this.setState({
                                itemDescriptionValidation: true
                            })
                        }
                    }else{
                        this.setState({
                            selectedCharacterObjectValidation: true
                        })
                    }
                }else{
                    this.setState({
                        itemNameValidation: true
                    })
                }
            } else {
                this.setState({
                    selectedBrandObjectValidation: true
                })
            }
        } else {
            this.setState({
                itemCodeValidation: true
            })
        }



    }

    getAllBrands() {
        axios.get(constants.backend_url + 'api/brand/getAllBrands').then(response => {
            this.setState({brands: response.data});
        }).catch(function (error) {
            console.log(error);
        })
    }

    onChangeGetBrandName(value) {
        this.state.selectedBrandObject = value;
        this.setState({
            selectedBrandObject: this.state.selectedBrandObject,
            selectedBrandObjectValidation: false
        });
    }

    onChangeGetCategoryName(value) {
        this.setState({
            selectedCharacterObject: value,
            selectedCharacterObjectValidation: false
        });
    }

    getAllCategories() {

        axios.get(constants.backend_url + 'api/category/getAllCategories').then(response => {
            console.log(response.data);
            this.setState({categories: response.data});
        }).catch(function (error) {
            console.log(error);
        })

        console.log(this.state.categories);
    }

    onChangeItemCode(e) {
        this.setState({
            itemCode: e.target.value,
            itemCodeValidation: false
        });
    }

    onChangeItemName(e) {
        this.setState({
            itemName: e.target.value,
            itemNameValidation: false
        })
    }

    render() {

        return (

            <div className=" container-fluid AddItemHeight">

                <br/>
                <br/>
                <MDBRow>
                    <MDBCol size="8">
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle>Add New Item</MDBCardTitle>
                                <form onSubmit={this.itemOnSubmit}>
                                    <MDBRow>
                                        <MDBCol size="5">
                                            <TextField id="standard-basic" label="Item Code"
                                                       value={this.state.itemCode}
                                                       onChange={this.onChangeItemCode}
                                            />
                                            <br/>
                                            {

                                                this.state.itemCodeValidation ?
                                                    <MDBAlert color="danger">
                                                    Item Code Field Is Empty
                                                </MDBAlert> : ''
                                            }
                                        </MDBCol>
                                        <MDBCol size="4">
                                            <Autocomplete
                                                id="combo-box-demo"
                                                options={this.state.brands}
                                                getOptionLabel={(option) => option.brandName}
                                                style={{width: 300}}
                                                onChange={(event, value) => this.onChangeGetBrandName(value)}
                                                renderInput={(params) => <TextField {...params} label="Brand Name"/>}
                                                size="sm"
                                            />
                                            {
                                                this.state.selectedBrandObjectValidation ? <MDBAlert color="danger">
                                                    Brand Name Field Is Empty
                                                </MDBAlert> : ''
                                            }
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol size="5">
                                            <TextField id="standard-basic" label="Item Name"
                                                       value={this.state.itemName}
                                                       onChange={this.onChangeItemName}
                                            />

                                            {
                                                this.state.itemNameValidation ? <MDBAlert color="danger">
                                                    Item Name Field Is Empty
                                                </MDBAlert> : ''
                                            }
                                        </MDBCol>
                                        <MDBCol size="6">
                                            <Autocomplete
                                                id="combo-box-demo"
                                                options={this.state.categories}
                                                getOptionLabel={(option) => option.categoryName}
                                                style={{width: 300}}
                                                onChange={(event, value) => this.onChangeGetCategoryName(value)}
                                                renderInput={(params) => <TextField {...params} label="Category Name"/>}
                                                size="sm"
                                            />

                                            {
                                                this.state.selectedCharacterObjectValidation ? <MDBAlert color="danger">
                                                    Category Name Field Is Empty
                                                </MDBAlert> : ''
                                            }
                                        </MDBCol>

                                    </MDBRow>

                                    <br/>
                                    <MDBRow>
                                        <MDBCol size="9">
                                            <div className="form-group">
                                                <label htmlFor="descriptionItem">Description</label>
                                                <textarea className="form-control rounded-0" id="descriptionItem"
                                                          rows="3"
                                                          value={this.state.itemDescription}
                                                          onChange={this.onChangeItemDescription}
                                                />
                                            </div>
                                            {
                                                this.state.itemDescriptionValidation ?

                                                    <MDBAlert color="danger">
                                                    Description  Name Field Is Empty
                                                </MDBAlert> : ''
                                            }
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBRow>
                                        <MDBCol size="4">
                                            {
                                                this.state.imageURLValidation ? <img src={this.state.imageUrl}/> :''
                                            }

                                            {
                                                this.state.imageURLValidation ?
                                                    <button className="btnClass"
                                                            onClick={this.removePhoto}>Remove</button> : ''
                                            }

                                        </MDBCol>

                                    </MDBRow>

                                    <br/>
                                    <MDBRow>
                                        <MDBCol size="9">
                                            <div className="input-group">

                                                <div className="custom-file">
                                                    <MDBInput type="file" className="custom-file-input"
                                                              id="inputGroupFile01"
                                                              aria-describedby="inputGroupFileAddon01"
                                                              onChange={this.onchangeFile}/>
                                                    <label className="custom-file-label" htmlFor="inputGroupFile01">
                                                        Choose file
                                                    </label>
                                                </div>
                                            </div>
                                            {
                                                this.state.imageValidation ?

                                                    <MDBAlert color="danger">
                                                        Image Field Is Empty
                                                    </MDBAlert> : ''
                                            }
                                        </MDBCol>
                                    </MDBRow>


                                    <br/>
                                    <MDBRow>
                                        <MDBCol size="4">
                                            <MDBBtn type="submit">Save</MDBBtn>
                                        </MDBCol>
                                    </MDBRow>
                                </form>
                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>

                    <MDBCol size="4">


                    </MDBCol>
                </MDBRow>
            </div>
        );
    }
}
