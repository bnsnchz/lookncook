import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {

    render() {
        return (
            <div>
                <div id = 'navbvar'>
                    <div id = 'directory'>
                        <ul>
                            <li><a href = '/'>Home</a></li>
                            <li><a href = '/search'>Search Recipes</a></li>
                            <li><a href = '/saved'>View Saved Recipes</a></li>
                            <li><a href = '/submit'>Submit Recipe</a></li>
                            <li className = 'log'><a href ='#'>Log In</a></li>
                            <li className = 'log'><a href = '#'>Log Out</a></li>
                        </ul>
                    </div>                     
                </div> 
            </div>
        )
    }
}

export default Navbar;