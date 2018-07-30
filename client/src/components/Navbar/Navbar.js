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
        }
    }

    componentDidMount() {
        this.checkSession();
    }
    checkSession = () => {
        if (this.state.session === true) {
            this.setState({
                authenticated:true
            })
        }
    }
    
    

    render() {
        return (
            <div>
                <div id = 'navbar'>
                    <div id = 'directory'>
                        <ul id = 'navbarUL'>
                            <li className='navbarli'><a href = '/'>Home</a></li>
                            <li className='navbarli'><a href = '/search'>Search Recipes</a></li>
                            <li className='navbarli'><a href = '/saved'>View Saved Recipes</a></li>

                            <li className='navbarli'><a style = {this.props.authenticated===false?this.state.stylesNone:this.stylesShow} href = '/submit'>{this.props.authenticated===false?null:"Submit Recipe"}</a></li>

                            <li className='navbarli'><a style = {this.props.authenticated===false?this.state.stylesNone:this.stylesShow} href ='/user'>{this.props.authenticated===false?null:"Account"}</a></li>
                            
                            <li onClick ={this.props.authenticated === true? this.props.logOut:null}className = 'navbarlilog'><a href = {this.props.authenticated===true?'/':'/signin'}>{this.props.authenticated===false?"Log In / Register":"Log Out"}</a></li>
                        </ul>
                    </div>                     
                </div> 
            </div>
        )
    }
}

export default Navbar;