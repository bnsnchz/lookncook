import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {

    render() {
        return (
            <div>
                <div id = 'navbar'>
                    <div id = 'directory'>
                        <ul id = 'navbarUL'>
                            <li className='navbarli'><a href = '/'>Home</a></li>
                            <li className='navbarli'><a href = '/search'>Search Recipes</a></li>
                            <li className='navbarli'><a href = '/saved'>View Saved Recipes</a></li>
                            <li className='navbarli'><a href = '/submit'>Submit Recipe</a></li>
                            <li className='navbarli'><a href ='#'>Log In</a></li>
                            <li className='navbarli'><a href = '#'>Log Out</a></li>
                        </ul>
                    </div>                     
                </div> 
            </div>
        )
    }
}

export default Navbar;