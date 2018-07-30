import React, {Component} from 'react';
import axios from 'axios';
class SavedRecipes extends Component {
    state = {
        saved:[],
        authenticated: this.props.authenticated,
        session:false
    }
    componentDidMount() {
        this.checkSession();
    }

    getSavedRecipes() {
        axios.get();
    }

    componentDidMount() {    
        this.checkSession();
    }
    checkSession = () => {
        if (this.state.session === true) {
            this.setState({
                session:true,
                authenticated:true
            }, () => {
                this.getSavedRecipes();
            })
        } else {
            window.location.href = '/signin'
        }
    }
    render() {
        return (
            <div>
                <h1>Saved Recipes</h1>
            </div>
        )
    }
}

export default SavedRecipes;