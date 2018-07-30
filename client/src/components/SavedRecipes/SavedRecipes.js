import React, {Component} from 'react';
import "./SavedRecipes.css"

class SavedRecipes extends Component {
    componentDidMount() {
        this.getSavedRecipes();
    }

    getSavedRecipes() {

    }
    
    render() {
        return (
            <div>
                <img id="savedImage" src="./assets/images/saved.png" alt="savedImage" />
            </div>
        )
    }
}

export default SavedRecipes;