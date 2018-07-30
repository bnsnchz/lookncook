import React, {Component} from 'react';
import './Dashboard.css';
// import axios from 'axios';

class Dashboard extends Component {
    state = {
        authenticated: this.props.authenticated,
        session:false
    }
    componentDidMount() {    
        this.checkSession();
    }
    checkSession = () => {
        if (this.state.session === true) {
            this.setState({
                session:true,
                authenticated:true
            })
        } else {
            window.location.href = '/signin'
        }
    }

    render() {
        return(
            <div>
                <h1>Hello User Dashboard</h1>
            </div>
        )
    }
}

export default Dashboard;