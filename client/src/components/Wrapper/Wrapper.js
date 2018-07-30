import React, {Component} from 'react';
import Image1 from "./images/bkgrd-slate-tomato-1.jpg";
import Image2 from "./images/bkgrd-slate-celery-2.jpg";
import Image3 from "./images/bkgrd-slate-chili-3.jpg";
import Image4 from "./images/bkgrd-slate-steak-4.jpg";
import './Wrapper.css'



class Wrapper extends Component {
    state = {
        styles: {
            backgroundImage: ""

        }
    }

    componentDidMount() {
        this.randomBackground()
    }

    randomBackground = () => {
        var bgSelector = Math.ceil(Math.random()*4);
        var background = ""

        switch (bgSelector){
            case 1: background = Image1
                break;
            case 2: background = Image2
                break; 
            case 3: background = Image3
                break;
            case 4: background = Image4
                break;
            default:
                console.log("whooops")
        }
        console.log(background);
        this.setState({
            styles: {
                backgroundImage: "url(" + background + ")"
            }
        })
    }

    render(){
        return(
            <div id="wrapper" style={this.state.styles}>
                
                {this.props.children}
            </div>
        )
    }
}




// const Wrapper = props => {
//     return (
//         <div>
//             {props.children}
//         </div>
//     )
// }

export default Wrapper;