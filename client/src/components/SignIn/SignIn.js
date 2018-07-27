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

    handleSumitForm = event => {
        event.preventDefault();

        axios.post("/login", this.state).then(res=>{
            if (res.data===true){

            }else{
                this.setState({
                    error: "Incorrect User Name or Password"
                });
            }
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
                         minlength="8"
                         required
                         placeholder="8 characters minimum"/>
                        <br/>
                        <button
                            onClick={this.handleSubmit}
                            className='signIn'
                            type = 'submit'>
                            Search
                        </button>

                        <span>{this.state.error}</span>
                </form>
            </div>
        )
    }
}

export default SignIn;