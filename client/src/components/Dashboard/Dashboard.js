import React, {Component} from 'react';
import './Dashboard.css';
import axios from 'axios';

class Dashboard extends Component {
    state = {
        userName:"",
        savedRecipes: [],
        createdRecipes:[]
    }

    componentDidMount() {
        this.getUserInfo();  
        this.getUserCreated();
    }

    getUserInfo = () => {
        axios.get("/userInfo").then(res =>{
            this.setState({
                userName: res.data[0].username,
                savedRecipes:res.data[0].savedRecipes
            })
        })
    }

    getUserCreated = () => {
        axios.get('/recipeInfo').then(res => {
            console.log(res);
            this.setState({
                createdRecipes:res.data
            }, () => {
                console.log(this.state.createdRecipes)
            })
        })
    }

    removeSaved = (id) => {
        var recipeID = {
            id:id
        }
        axios.post('/removesave', recipeID).then( res => {
            console.log(res);
            this.setState({
                savedRecipes:res.data[0].savedRecipes
            })
        })
    }

    handleRedirect= id => {
        axios.post(`/recipe/${id}`, id)
        .then(results => {
            this.setState({
                recipeObject: results.data[0]
            })
            this.props.history.push(this.state.recipeObject, `/recipe/${id}`)
            window.location.href = `/recipe/${id}`
  
        })
  
    }
    
    render() {
        return(
            <div>
                <h1>{this.state.userName}'s Page</h1>

                <ul id = 'user-saved'>
                    {!this.state.savedRecipes?"You do not have any saved recipes at the moment":this.state.savedRecipes.map((recipe, i) => {
                        return (
                            <li key ={i}>
                                {recipe.dishname}
                                <button onClick = {() => {this.handleRedirect(recipe._id)}}>
                                    View Recipe
                                </button>
                                <button onClick = {() => {this.removeSaved(recipe._id)}}>
                                    Remove Recipe
                                </button>
                            </li>  
                            
                        )
                    })}
                </ul>

                <ul id ='user-created'>
                    {!this.state.createdRecipes?"You haven't created any recipes yet!": this.state.createdRecipes.map((created, j) => {
                        return (
                            <li onClick = { () => {this.handleRedirect(created._id)}}
                                key = {j}
                            > 
                                {created.dishname}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Dashboard;