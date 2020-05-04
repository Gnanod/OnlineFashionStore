import React, {Component} from 'react';
import {MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBNavLink} from "mdbreact";
import './Item.css'
import axios from "axios";
import constants from "../../Constants/constants";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Loader from "react-loader-spinner";

export class ItemDetail extends Component {


    constructor(props) {
        super(props)
        this.state = {
            itemColorId: '',
            itemColorDetail: '',
            itemName: ' ',
            itemColorObj: [],
            status: false,
            autocompleteStatus: false,
            itemColorCode: '',
            Url: ' ',
            itemSizesAll: [],
            items:'',
            itemPrice: '',
            selected:'',
            price:'',
            loaderStatus: true

        }

        this.getNewItemColorDetails = this.getNewItemColorDetails.bind(this);
        this.changePhotoUrl = this.changePhotoUrl.bind(this);
        this.getPhotoAccordingToColor = this.getPhotoAccordingToColor.bind(this);
        this.getSizesAccordingToTheColor = this.getSizesAccordingToTheColor.bind(this);
        this.onChangeItemSize = this.onChangeItemSize.bind(this);
        this.printSelected=this.printSelected.bind(this);
        this.getNewItemColorDetails();
        this.getPhotoAccordingToColor();
        //  this.getSizesAccordingToTheColor();
    }

    componentDidMount() {
        this.setState({
            itemColorId: this.props.match.params.id,
            itemColorObjectId: this.props.match.params.colorId,

        });
    }

    getPhotoAccordingToColor() {
        axios.get(constants.backend_url + 'api/itemcolor/getItemColorDetail/' + this.props.match.params.colorId).then(response => {
            const base64String = btoa(new Uint8Array(response.data.image.data).reduce(function (data, byte) {
                return data + String.fromCharCode(byte);
            }, ''));
            this.setState({
                Url: base64String,
                itemName: response.data.itemCode[0].itemName,
                itemColorCode: response.data.itemColor
            })
            this.getSizesAccordingToTheColor(response.data.itemColor, response.data.itemCode[0].itemCode);
        }).catch(function (error) {
            console.log(error);
        })
    }

    getSizesAccordingToTheColor(color, itemCode) {
        let colId = color.substr(1);
        this.setState({
            itemSizesAll:[]
        })
        axios.get(constants.backend_url + 'api/itemcolor/getAllItemColors').then(response => {
            response.data.map(item => {
                if (item.itemCode[0].itemCode === itemCode && item.itemColor === color) {
                    if (this.state.itemSizesAll.length === 0) {
                        const newSizes = {
                            itemSizes: item
                        }
                        const array = [newSizes, ...this.state.itemSizesAll]
                        this.setState({
                            itemSizesAll: array,
                            autocompleteStatus: true,
                            loaderStatus: false
                        })
                    }

                }
            })
        }).catch(function (error) {
            console.log(error);
        })

    }

    changePhotoUrl(itemColor) {
        const base64String = btoa(new Uint8Array(itemColor.itemColorObject.image.data).reduce(function (data, byte) {
            return data + String.fromCharCode(byte);
        }, ''));
        console.log(itemColor.itemColor);
        this.setState({
            Url: base64String,
            itemColorCode: itemColor.itemColor
        })
        this.getSizesAccordingToTheColor(itemColor.itemColor, itemColor.itemColorObject.itemCode[0].itemCode);

    }

    ///////////////////////////// Add This Object To Cart ///////////////////////
    onChangeItemSize(value) {
        console.log(value)
        if(value !==null){
            let price = value.itemSizes.price;
            this.setState({
                price: price,
                selected:value

            })

        }

    }
    printSelected(){
        console.log(this.state.selected);
    }

    getNewItemColorDetails() {
        axios.get(constants.backend_url + 'api/itemcolor/getAllItemColors').then(response => {
            response.data.map(item => {
                if (this.props.match.params.id === item.itemCode[0]._id) {
                    const newItemColorObj = {
                        itemColor: item.itemColor,
                        itemColorObjId: item._id,
                        itemColorObject: item
                    }
                    const array = [newItemColorObj, ...this.state.itemColorObj];
                    this.setState({
                        itemName: item.itemCode[0].itemName,
                        itemColorObj: array,
                        status: true,

                    });
                }

            })
            this.setState({itemColorDetail: response.data});
        }).catch(function (error) {
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div>
                    <div className="row ">
                        <div className="col-sm-2">
                        </div>
                        <div className="col-sm-8 ">

                            <MDBCard>
                                <MDBCardBody>

                                    <div className="row">

                                        {
                                            this.state.loaderStatus ?
                                                <div className="col-sm-12">
                                                    <div className="row">
                                                        <div className="col-sm-4">

                                                        </div>
                                                        <div className="col-sm-4">
                                                            <Loader className="loaderClass"

                                                                    type="ThreeDots"
                                                                    color="#00BFFF"
                                                                    height={500}
                                                                    width={350}
                                                                    timeout={30000} //3 secs

                                                            />
                                                        </div>
                                                        <div className="col-sm-4">

                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                <div className="col-sm-12">
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <MDBCardImage className="imageClass "
                                                                          src={`data:image/jpeg;base64,${this.state.Url}`}
                                                                          waves/>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <MDBCardTitle
                                                                className="itemNameText">{this.state.itemName}</MDBCardTitle>
                                                            {
                                                                this.state.status ?
                                                                    this.state.itemColorObj.map(item => {
                                                                        const style = {
                                                                            backgroundColor: item.itemColor,
                                                                            width: 50,
                                                                            height: 50
                                                                        }
                                                                        return (
                                                                            <button style={style}
                                                                                    onClick={() => this.changePhotoUrl(item)}>
                                                                            </button>
                                                                        )
                                                                    })
                                                                    : ''
                                                            }
                                                            {

                                                                this.state.autocompleteStatus ?

                                                                    <Autocomplete
                                                                        id="combo-box-demo"
                                                                        options={this.state.itemSizesAll}
                                                                        getOptionLabel={(option) => option.itemSizes.itemSize}
                                                                        style={{width: 300}}
                                                                        onChange={(event, value) => this.onChangeItemSize(value)}
                                                                        renderInput={(params) => <TextField {...params}
                                                                                                            label="Item Sizes"/>}
                                                                    />
                                                                    : ' '
                                                            }

                                                            <h2 className="textAligns">LKR :{this.state.price}</h2>
                                                            <h2 className="textAligns">Qty</h2>

                                                            <div className="col-sm-6 btnSize">
                                                                <MDBNavLink to={"/Cart/"+this.state.selected}>
                                                                    <MDBBtn className="btnSize1" >Add to Cart</MDBBtn>
                                                                </MDBNavLink>

                                                            </div>
                                                            <h2>Add To wishlist</h2>
                                                        </div>
                                                    </div>


                                                </div>
                                        }


                                    </div>
                                </MDBCardBody>
                            </MDBCard>

                        </div>
                        <div className="col-sm-2">
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}
