import React, {Component} from 'react';

export default class Logout extends Component {

    componentDidMount(){
        localStorage.removeItem('userLogged');
        this.props.history.push('/login');
        window.location.reload();
    }
    render() {

        return (
            <div>
            </div>
        );
    }

}
