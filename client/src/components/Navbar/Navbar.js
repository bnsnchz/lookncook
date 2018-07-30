import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
    state = {
        authenticated:this.props.authenticated,
        session:false,
        stylesShow: {
            "display":"block"
        },
        stylesNone: {
            "display":"none"
        },
        selectValue: ""
    }
    handleDropdownChange = (event) => {
        event.preventDefault();
        this.setState({
            selectValue: event.target.value
        }, () => {
            window.location.href = this.state.selectValue
        })
    }
   
    render() {
        return (
            <div>
                <div id = 'navbar'>
                    <div id = 'directory'>
                        <ul id = 'navbarUL'>
                            <li className='navbarli'><a href = '/'>Home</a></li>
                            <li className='navbarli'><a href = '/search'>Search Recipes</a></li>

                            <li className='navbarli'><a style = {this.props.authenticated===false?this.state.stylesNone:this.stylesShow} href = '/submit'>{this.props.authenticated===false?null:"Submit Recipe"}</a></li>

                            <li className='navbarli'><a style = {this.props.authenticated===false?this.state.stylesNone:this.stylesShow} href ='/user'>{this.props.authenticated===false?null:"Account"}</a></li>
                            
                            <li 
                                onClick ={this.props.authenticated === true? this.props.logOut:null}
                                className = 'navbarlilog'>
                                    <a 
                                        href = {this.props.authenticated===true?'/':'/signin'}>{this.props.authenticated===false?"Log In ":"Log Out"}
                                    </a>
                            </li>
                        </ul>
                        <select 
                        value = {this.state.selectValue}
                        onChange={this.handleDropdownChange} id = "navbarSELECT">
                            <option  
                                value ="" selected="selected">Menu
                            </option>
                            <option 
                                value ="/">Home
                            </option>
                            <option 
                                value ="/search">Search Recipes
                            </option>
                            <option 
                                style = {this.props.authenticated===false?this.state.stylesNone:this.stylesShow} 
                                value ="/submit">{this.props.authenticated===false?null:"Submit Recipe"}
                            </option>
                            <option 
                                style = {this.props.authenticated===false?this.state.stylesNone:this.stylesShow}
                                value ="/user">{this.props.authenticated===false?null:"Account"}
                            </option>
                            
                           
                        </select>
                        <a id = 'logInOut'  
                            
                            href = {this.props.authenticated===true?'/':'/signin'}>{this.props.authenticated===false?"Log In ":"Log Out"}
                        </a>
                    </div>                     
                </div> 
            </div>
        )
    }
}

export default Navbar;