import React, {Component} from 'react';
import SideNavigationbar from "../SideNavigationbar/SideNavigationbar";
import './Layout.css'
import Dashboard from "../Views/Dashboard/Dashboard";
import {Switch} from "react-bootstrap";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Item from "../Views/Item/Item";
import SearchItem from "../Views/Item/SearchItem";

export default class Layout extends Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){

    }
    render() {
        return (

            <div className="container-fluid ">
                <div className="row">
                    <div className="col-sm-2.5">
                        <SideNavigationbar> </SideNavigationbar>
                    </div>
                    <main role="main" className="col-sm-9.5 ml-sm-auto col-lg-9 px-1 px-xl-5">
                        <Switch>
                            <Route exact path="/" component={Dashboard}/>
                            <Route exact path="/item/additem" component={Item}/>
                            <Route exact path="/item/searchitem" component={SearchItem}/>
                        </Switch>
                    </main>
                </div>
            </div>

        );

    }
}
