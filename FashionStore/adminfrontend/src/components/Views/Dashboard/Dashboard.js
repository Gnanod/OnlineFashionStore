import React,{Component} from "react";
import {Form, FormGroup, FormControl, ControlLabel, HelpBlock, ButtonToolbar, Button, Row, Col, Panel} from 'rsuite';


export default class Dashboard extends Component {

    constructor(props){
        super(props)
    }

    render(){
        const Card = props => (
            <Panel {...props} bordered header="Card title">
               HHHHHHHHHHHHHHHHHHH
            </Panel>
        );
        return(
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <Row style={{marginTop:50}}>
                        <Col md={6} sm={12}>
                            <Card />
                        </Col>
                        <Col md={6} sm={12}>
                            <Card />
                        </Col>
                        <Col md={6} sm={12}>
                            <Card />
                        </Col>

                    </Row>
                </div>

            </main>
        );
    }
}
