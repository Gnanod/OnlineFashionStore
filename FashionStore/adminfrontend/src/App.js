import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import './App.css';
import Layout from "./components/layout/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';


import {Switch} from "react-bootstrap";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Dashboard from "./components/Views/Dashboard/Dashboard";
import Login from "./components/Views/Login/Login";


function App() {



    return (


        <Router>
            <Route exact path="/Login" component={Login}/>

            <Layout/>
        </Router>


    )

}

export default App;
