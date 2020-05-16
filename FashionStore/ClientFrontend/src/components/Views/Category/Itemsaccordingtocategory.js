import {Component} from "react";
import React from "react";
import axios from "axios";
import constants from "../../Constants/constants";

export class Itemsaccordingtocategory extends Component {

    constructor(props){
        super(props)
        this.state = {
            id: '',
            newItems:[]

        }
        this.getItemDetailsAccordingtoCategory = this.getItemDetailsAccordingtoCategory.bind(this);
    }
    componentDidMount() {

        console.log(this.props.match.params.id)
        this.setState({
            id:this.props.match.params.id
        })
        this.getItemDetailsAccordingtoCategory(this.props.match.params.id);
    }
    getItemDetailsAccordingtoCategory(id){
        console.log(this.state.id)
        axios.get(constants.backend_url + 'api/item/itemCategory/'+id).then(response => {
            this.setState({newItems: response.data});
        }).catch(function (error) {
            console.log(error);
        })

    }

    render() {
        return (
            <div>
                <br/><br/><br/><br/>
                Cagtegory
                <p>{this.state.newItems}</p>

            </div>
        );
    }
}
