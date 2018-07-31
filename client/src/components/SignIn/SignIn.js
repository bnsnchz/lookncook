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
            console.log(res.data);
            if (res.data===true){
                this.props.setLogin();
                this.props.history.push('/user');
            } else if (res.data===false) {
                this.setState({
                    error: "Incorrect User Name or Password"
                });
            }else{
                this.setState({
                    error: "Cannot find account."
                });
            }
        })
    }


    render(){
        return(
            <div className="signInForm">
                <img className="signInTitle" src="./assets/images/signin.png" alt="signin" />
                <form id="signIn">
                    <label className="userInput" htmlFor="userName">
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
                    <label className="passwordInput" htmlFor="password">
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
                         placeholder="Required"/>
                        <br/>
                        
                        <p>
                            <a className="registerLink" href = '/register'>
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
                        <br/>
                        <br/>
                        <span className="invalidLogIn">{this.state.error}</span>
                </form>
            </div>
        )
    }
}

export default SignIn;