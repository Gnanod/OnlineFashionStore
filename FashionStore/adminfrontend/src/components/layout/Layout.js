import React, {Component} from 'react';
import SideNavigationbar from "../SideNavigationbar/SideNavigationbar";
import './Layout.css'
import Dashboard from "../Views/Dashboard/Dashboard";
import {Switch} from "react-bootstrap";
import {BrowserRouter as Router, Route} from "react-router-dom";
import NewItem from "../Views/Item/NewItem";
import SearchItem from "../Views/Item/SearchItem";
import Login from "../Views/Login/Login";
import Logout from "../Views/LogOut/Logout";
import BrandCategory from "../Views/Item/BrandCategory";
import ItemColor from "../Views/Item/ItemColor";

export default class Layout extends Component {



    componentDidMount(){
        // if(localStorage.getItem("userLogged")!=="userLog"){
        //     this.props.history.push('/login');
        //     window.location.reload();
        // }
    }
    render() {
        if(localStorage.getItem("userLogged")==="userLog"){
            return (
                <div className="container-fluid ">
                    <div className="row">
                        <div className="cols-sm-2">
                            <SideNavigationbar> </SideNavigationbar>
                        </div>
                        <div role="main" className="col-sm-10 mainWidth">
                            <Switch>
                                <Route exact path="/dashboard" component={Dashboard}/>
                                <Route exact path="/item/newitem" component={NewItem}/>
                                <Route exact path="/item/searchitem" component={SearchItem}/>
                                <Route exact path="/item/brandcategory" component={BrandCategory}/>
                                <Route exact path="/item/itemcolor" component={ItemColor}/>
                                <Route exact path="/logout" component={Logout}/>

                            </Switch>
                        </div>
                    </div>
                </div>

            );
        }else{
            return(

                    <Switch>
                        <Route  path="/" component={Login}/>
                    </Switch>


            );
        }


    }
}
