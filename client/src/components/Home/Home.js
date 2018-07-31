import React, {Component} from 'react';
import './Home.css';
class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <img id="logo" src="./assets/images/lookncook.png" alt="logo" />
                    <div className="homeDiv">
                        <h2>About</h2>
                            <p> Hello there! Welcome to look & cook, the premiere recipe site that is dedicated to making your next culinary dish a total grand-slam. We strive to make it eaiser in order to help you formulate and search for recipes of your favorite dishes, sides, entrees, and desserts. To start, just head over to the login page and sign up so that you can save all of favorites that you find. We hope you enjoy what we have to offer and cannot wait to see what the community creates!
                            </p>
                        <h3>What Makes us Unique</h3>
                            <p>
                            What differs us from the rest is the fact that we have a uniquely embedded timer which enables you to never have to worry about counting down the minutes for your next step. Once you find a recipe that you would like to use, our specialized timer will perfectly show you how much time is needed until your freshly baked cookies have to be pulled out of the oven. No more worrying, and no strings attached. 
                            </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;