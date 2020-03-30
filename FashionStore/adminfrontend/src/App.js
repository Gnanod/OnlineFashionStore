import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import './App.css';
import Layout from "./components/layout/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from "react-router-dom";



function App() {



    return (


        <Router>
            <Layout/>
        </Router>


    )

}

export default App;
