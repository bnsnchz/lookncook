import React, {Component} from 'react';
import './SignIn.css';
import axios from 'axios';

class SignIn extends Component {
    state = {
        userName : "",
        password : "",
        error    : null
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
        [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        var userInfo = {
            username: this.state.userName,
            password: this.state.password
        }
        axios.post("/signin", userInfo).then(res=>{
            // if (res.data===true){
            //     this.props.setLogin();
            //     this.props.history.push('/');
            // }else{
            //     this.setState({
            //         error: "Incorrect User Name or Password"
            //     });
            // }
        })
    }


    render(){
        return(
            <div>
                <h1 className="signInTitle">Sign In</h1>
                <form id="signIn">
                    <label htmlFor="userName">
                    User Name:
                    </label>
                    <input 
                        type="text"
                        id="userName"
                        name="userName"
                        value=
                        {this.state.userName}
                        onChange={this.handleInputChange}
                        className = "userName"
                        placeholder="Required"/>
                    <br/>
                    <label htmlFor="password">
                    Password:
                    </label>
                    <input
                         type="password"
                         id="password"
                         name="password"
                         value={this.state.password}
                         onChange={this.handleInputChange} className="password"
                         minLength="8"
                         required
                         placeholder="8 characters minimum"/>
                        <br/>
                        
                        <p>
                            <a style = {{fontSize:"14px"}}href = '/register'>
                            Don't have an account yet?
                                <br/> 
                            Click here to create one.
                            </a>
                        </p>
                        
                        <button
                            onClick={this.handleSubmit}
                            className='signIn'
                            type = 'submit'>
                            Log In
                        </button>

                        <span>{this.state.error}</span>
                </form>
            </div>
        )
    }
}

export default SignIn;