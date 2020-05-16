import React, {Component} from 'react';

export default class Logout extends Component {

    componentDidMount(){
        localStorage.removeItem('userLogged');
        this.props.history.push('/');
        window.location.reload();
    }
    render() {

        return (
            <div>
            </div>
        );
    }

}
