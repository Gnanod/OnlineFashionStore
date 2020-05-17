import React, {Component} from 'react';
import {
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBNavLink
} from "mdbreact";
import './Item.css'
import axios from "axios";
import constants from "../../Constants/constants";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Loader from "react-loader-spinner";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import {Rating} from "../Ratings/Rating";
import StarRatings from "react-star-ratings";



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
            loaderStatus: true,
            price :'',
            selected:'',
            item_Id:'',
            averageRates :0,
            ratingItems :''

        }

        this.getNewItemColorDetails = this.getNewItemColorDetails.bind(this);
        this.changePhotoUrl = this.changePhotoUrl.bind(this);
        this.getPhotoAccordingToColor = this.getPhotoAccordingToColor.bind(this);
        this.getSizesAccordingToTheColor = this.getSizesAccordingToTheColor.bind(this);
        this.onChangeItemSize = this.onChangeItemSize.bind(this);
        this.addToCart=this.addToCart.bind(this);
        this.getNewItemColorDetails();
        this.getPhotoAccordingToColor();
        //  this.getSizesAccordingToTheColor();
        this.decrementQuantity=this.decrementQuantity.bind(this);
        this.addToWhishList=this.addToWhishList.bind(this);
        this.getAverageRate = this.getAverageRate.bind(this);
    }

    componentDidMount() {
        this.setState({
            itemColorId: this.props.match.params.id,
            itemColorObjectId: this.props.match.params.colorId,
        });
    }

    getAverageRate(){
        axios.get(constants.backend_url + 'api/comment/getComment/'+this.state.item_Id).then(response => {
            this.setState({
                ratingItems :response.data
            })
        }).catch(function (error) {
            console.log(error);
        })
    }

    getPhotoAccordingToColor() {
        axios.get(constants.backend_url + 'api/itemcolor/getItemColorDetail/' + this.props.match.params.colorId).then(response => {
            const base64String = btoa(new Uint8Array(response.data.image.data).reduce(function (data, byte) {
                return data + String.fromCharCode(byte);
            }, ''));
            this.setState({
                Url: base64String,
                itemName: response.data.itemCode[0].itemName,
                item_Id :response.data.itemCode[0]._id,
                itemColorCode: response.data.itemColor
            })
            this.state.itemSizesAll.length=0;
            this.getSizesAccordingToTheColor(response.data.itemColor, response.data.itemCode[0].itemCode);
            this.getAverageRate();
        }).catch(function (error) {
            console.log(error);
        })
    }

    getSizesAccordingToTheColor(color, itemCode) {
        this.setState({
            itemSizesAll:[]
        })
        axios.get(constants.backend_url + 'api/itemcolor/getAllItemColors').then(response => {
            let averageRate=0;
            this.state.ratingItems.map(item => {
                averageRate+=item.rates;
                // console.log(item.rates);
            });
            averageRate = averageRate/5.0;
            response.data.map(item => {
                if (item.itemCode[0].itemCode === itemCode && item.itemColor === color) {
                    // if (this.state.itemSizesAll.length === 0) {
                        const newSizes = {
                            itemSizes: item
                        }
                        const array = [newSizes, ...this.state.itemSizesAll]

                        this.setState({
                            itemSizesAll: array,
                            autocompleteStatus: true,
                            averageRate:averageRate,
                            loaderStatus: false
                        })
                    // }

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
        if(value !==null){
            let price = value.itemSizes.price;
            this.setState({
                price: price,
                selected:value
            })

        }

    }
    addToCart(){
        console.log(this.state.selected);
        let cartItem=this.state.selected;
        console.log(cartItem);
        this.decrementQuantity(cartItem.itemSizes._id,cartItem.itemSizes.quantity);
        const cartt = {
            userId:'C001',
            cartName:this.state.itemName,
            cartPrice:cartItem.itemSizes.price,
            quantity:1,
            itemTotal:cartItem.itemSizes.price,
            itemId:cartItem.itemSizes._id
        }

        axios.post(constants.backend_url + 'api/cart/add', cartt)
            .then(res => {
                    console.log("HI")

                    if (res.data.cart === 'success') {
                        Swal.fire(
                            '',
                            'Cart Added Fail',
                            'error'
                        );

                    } else {

                            Swal.fire(
                                '',
                                'Cart Details Added Successfully.',
                                'success'
                            )


                    }
                }
            );


        console.log(this.state.itemName);
        console.log(cartt);

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
                    let itemStatus =false;
                    this.state.itemColorObj.map(color=>{
                        if(color.itemColor === newItemColorObj.itemColor){
                            itemStatus=true;
                        }
                    });

                    if(!itemStatus){
                        const array = [newItemColorObj, ...this.state.itemColorObj];
                        this.setState({
                            itemName: item.itemCode[0].itemName,
                            itemColorObj: array,
                            status: true,

                        });
                    }

                }

            })
            this.setState({itemColorDetail: response.data});
        }).catch(function (error) {
            console.log(error);
        })
    }
    decrementQuantity(id,quantity){
        console.log(id);
        axios.get(constants.backend_url + 'api/cart/updateQuantity/'+id+'/'+(quantity-1))
            .then(res => {

                    if (res.data.cart === 'success') {
                        console.log("sucess update")

                    } else {
                        console.log("failure update")
                    }
                }
            );

    }
    addToWhishList(){
        console.log(this.state.selected);
        let cartItem=this.state.selected;

        const wishlist = {
            userId:'C001',
            cartName:this.state.itemName,
            cartPrice:cartItem.itemSizes.price,
            //quantity:1,
            itemId:cartItem.itemSizes._id
        }
        console.log(wishlist);
        axios.post(constants.backend_url + 'api/wishlist/add', wishlist )
            .then(res => {
                    console.log("HI")
                    if (res.data.wish === 'success') {
                        Swal.fire(
                            '',
                            'Wishlist Added Fail',
                            'error'
                        );

                    } else {
                        Swal.fire(
                            '',

                            'Wishlist Details Added Successfully.',
                            'success'
                        )
                    }
                }
            );

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
                                                            {/*<div className="col-sm-6">*/}
                                                             <div className="row">
                                                                 <StarRatings
                                                                     rating={this.state.averageRate}
                                                                     starRatedColor="blue"
                                                                     numberOfStars={5}
                                                                     name='rating'
                                                                 />
                                                             </div>
                                                            <div className="row">
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
                                                            </div>
                                                            {/*</div>*/}

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
                                                            <br/>
                                                            <h2 className="textAligns">LKR :{this.state.price}</h2>
                                                            <br/><br/>
                                                            <div className="col-sm-6 btnSize">


                                                            </div>

                                                            <div className="row">
                                                                <div className="col-sm-6">
                                                                    <button className="btnSize1"
                                                                            onClick={() => this.addToCart()}>Add to Cart
                                                                    </button>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <button className="btnSize1"
                                                                            onClick={() => this.addToWhishList()}>Add to WishList
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-sm-12">
                                                                    <Rating
                                                                        selected={this.state.item_Id}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <br/>

                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <MDBBreadcrumb light color="blue lighten-1">
                                                                <MDBBreadcrumbItem iconRegular icon="star">Customer Reviews</MDBBreadcrumbItem>
                                                            </MDBBreadcrumb>
                                                        </div>
                                                    </div>

                                                    {
                                                        this.state.ratingItems.map(item=>{
                                                            return(
                                                                <div className="row">
                                                                    <div className="col-sm-12">
                                                                        <MDBBreadcrumb >
                                                                            <MDBBreadcrumbItem active >
                                                                                <span className="labelAlign">{item.userId}</span>
                                                                                <br/>
                                                                                <span>{item.comment}</span>
                                                                            </MDBBreadcrumbItem>
                                                                        </MDBBreadcrumb>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }

                                                </div>

                                        }


                                    </div>
                                    <br/>
                                    <br/>

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
