import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
    state = {
        authenticated:false
    }

    checkSession = () => {
        // if (session) {
        //     this.setState({
        //         authenticate:true
        //     })
        // }
    }
    
    stylesShow = {
        "display":"block"
    }
    stylesNone = {
        "display":"none"
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

                            <li className='navbarli'><a style = {this.state.authenticated===false?this.stylesNone:this.stylesShow} href = '/submit'>{this.state.authenticated===false?null:"Submit Recipe"}</a></li>

                            <li className='navbarli'><a style = {this.state.authenticated===false?this.stylesNone:this.stylesShow} href ='/user'>{this.state.authenticated===false?null:"Account"}</a></li>
                            
                            <li className = 'navbarlilog'><a href ='/signin'>{this.state.authenticated===false?"Log In / Register":"Log Out"}</a></li>
                        </ul>
                    </div>                     
                </div> 
            </div>
        )
    }
}

export default Navbar;