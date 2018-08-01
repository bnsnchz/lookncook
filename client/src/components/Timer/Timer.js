import React from "react";
import "./Timer.css"

class Timer extends React.Component {

  constructor(props) {
    super(props);


    this.state = {
      duration: Math.floor(this.props.timeValue * 60),
      clicked:false
    };
  }

  startTimer = () => {

    this.setState({clicked:true})

    this.tick = setInterval(() => {
      let ding = new Audio()
      ding.src = "../assets/sounds/ding.mp3"
      if(this.state.duration!==0){      
        this.setState({
        duration: this.state.duration - 1
      });
      }else{
        ding.play();
        clearInterval(this.tick);
        this.setState({
          clicked:false
        })
      }

    }, 1000);
    
  }


  componentWillUnmount() {

    clearInterval(this.tick);
  }


  format = (t) => {
    let minutes = Math.floor(t / 60);
    let seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
  }

  render() {
    let styles = {};

    if (this.state.duration < 60) {
      styles.color = "red";
    }

      if(this.state.clicked){
        return(
        <span className="timer">{this.format(this.state.duration)}</span>
        )}else{
          return(       
             <button className="timerBtn" onClick={this.startTimer} clicked={this.state.clicked}>Start Timer</button>
            )
          } 
        }
      }

export default Timer;