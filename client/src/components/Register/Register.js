import React, {Component} from 'react';
import './Register.css';
import axios from 'axios';



class Register extends Component {

    state = {
        // authenticated:false,
        userName: "",
        password: "",
        token: ""
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    handleSubmit = event => {
        event.preventDefault();
        var userInfo = {
            username: this.state.userName,
            password:this.state.password,
            token:this.state.token
        }
        console.log("button clicked");
        axios.post("/register", userInfo)
        .then(res => {
            console.log(res.data);
            window.location.href ='/signin'
        })
        .catch(error=> {
            console.log(error)
        })
    }

    render() {
        return (
            <div className="registerForm">
                <img className="registerImage" src="./assets/images/register.png" alt="register" />
                <form id="register">
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
                    <label className="passwordInput"htmlFor="password">
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
                        <button
                            onClick={this.handleSubmit}
                            className='register'
                            type = 'submit'>
                            Register
                        </button>

                        <span>{this.state.error}</span>
                </form>
            </div>
        )
    }
}

export default Register;