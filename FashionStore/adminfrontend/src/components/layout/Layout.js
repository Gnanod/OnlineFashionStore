import React, {Component} from 'react';
import SideNavigationbar from "../SideNavigationbar/SideNavigationbar";
import './Layout.css'
import Dashboard from "../Views/Dashboard/Dashboard";
import {Switch} from "react-bootstrap";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Item from "../Views/Item/Item";
import SearchItem from "../Views/Item/SearchItem";
import Login from "../Views/Login/Login";
import Logout from "../Views/LogOut/Logout";

export default class Layout extends Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
console.log("ppp"+localStorage.getItem("userLogged"));
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
                                <Route exact path="/" component={Dashboard}/>
                                <Route exact path="/item/additem" component={Item}/>
                                <Route exact path="/item/searchitem" component={SearchItem}/>
                                <Route exact path="/logout" component={Logout}/>
                            </Switch>
                        </div>
                    </div>
                </div>

            );
        }else{
            console.log('LogOut')

            return(

                    <Switch>
                        <Route  path="/login" component={Login}/>
                    </Switch>


            );
        }


    }
}
