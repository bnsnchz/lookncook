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
            this.setState({
                createdRecipes:res.data
            })
        })
    }

    removeSaved = (id) => {
        var recipeID = {
            id:id
        }
        axios.post('/removesave', recipeID).then( res => {
            this.setState({
                savedRecipes:res.data[0].savedRecipes
            })
        })
    }

    handleRedirect= id => {
        axios.post(`/search/${id}`, id)
        .then(results => {
            this.setState({
                recipeObject: results.data[0]
            })
            this.props.history.push(`/recipe/${id}`)
  
        })
  
    }
    
    render() {
        return(
            <div className="dashboard">
                <img className="dashboardImg" src="./assets/images/dashboard.png" alt="dashboard"/>
                <h1 className="savedLabel"><u>{this.state.userName}'s Saved Recipes:</u></h1>
                <ul id = 'user-saved'>
                    {!this.state.savedRecipes?"You do not have any saved recipes at the moment":this.state.savedRecipes.map((recipe, i) => {
                        return (
                            <div key ={i} className="savedRecipeDiv">
                                <img className="savedPic" src={!recipe.image?"data:image/jpeg;base64,"+ Buffer.from(recipe.upload,'base64').toString('base64'):recipe.image} alt={recipe.dishname} />
                                <li key ={i}>
                                    <p className="savedTitle">{recipe.dishname}</p>
                                    <br/>
                                    <div className="btnDiv">
                                    <button className="viewBtn" onClick = {() => {this.handleRedirect(recipe._id)}}>
                                        View Recipe
                                    </button>
                                    <button className="dltBtn" onClick = {() => {this.removeSaved(recipe._id)}}>
                                        Remove Recipe
                                    </button>
                                    </div>
                                </li>
                            </div>
                            
                        )
                    })}
                </ul>
                <br/>
                 <h1 className="savedLabel"><u>{this.state.userName}'s Created Recipes:</u></h1>

                <ul id ='user-created'>
                    {!this.state.createdRecipes?"You haven't created any recipes yet!": this.state.createdRecipes.map((created, j) => {
                        return (
                            <div key={j} className="createdRecipes">

                            <li onClick = { () => {this.handleRedirect(created._id)}}
                                key = {j}> 
                                <img className="savedPic" src={!created.image?"data:image/jpeg;base64,"+ Buffer.from(created.upload,'base64').toString('base64'):created.image} alt={created.dishname} />
                                <p className='savedTitle'>{created.dishname}
                                </p>
                            </li>
                            <br/>
                            <div className="btnDiv">
                                    <button className="viewBtn" onClick = {() => {this.handleRedirect(created._id)}}>
                                        View Recipe
                                    </button>
                                    </div>
                            </div>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Dashboard;