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
    
    render() {
        return (
            <div>
                <div id = 'navbar'>
                    <div id = 'directory'>
                        <ul id = 'navbarUL'>
                            <li className='navbarli'><a href = '/'>Home</a></li>
                            <li className='navbarli'><a href = '/search'>Search Recipes</a></li>
                            <li className='navbarli'><a href = '/saved'>View Saved Recipes</a></li>

                            <li className='navbarli'><a href = '/submit'>{this.state.authenticated===false?null:"Submit Recipe"}</a></li>

                            <li className='navbarli'><a href ='/user'>{this.state.authenticated===false?null:"Account"}</a></li>
                            
                            <li className = 'navbarlilog'><a href ='/signin'>{this.state.authenticated===false?"Log In":"Log Out"}</a></li>
                        </ul>
                    </div>                     
                </div> 
            </div>
        )
    }
}

export default Navbar;