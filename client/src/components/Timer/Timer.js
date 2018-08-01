import React from "react";
import "./Timer.css"

class Timer extends React.Component {
  // since this is a stateful react component, we can access "props" in the es6 constructor method...
  constructor(props) {
    super(props);

    // ...which is only useful if the props are going to define the initial state. here, we are setting duration to the number of seconds between the timestamp and now
    this.state = {
      duration: Math.floor(this.props.timeValue * 60),
      clicked:false
    };
  }

  startTimer = () => {

    this.setState({clicked:true})
    // after the component has loaded, let's continue to update the duration by one second
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

  // this is a built-in react method that is triggered when the component has been destroyed / removed from the dom
  componentWillUnmount() {
    // we need to capture this event to stop our interval. otherwise, it will keep running forever, potentially causing memory leaks
    clearInterval(this.tick);
  }

  // custom method to format the duration in 00:00 syntax
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

    // turn the span red if the duration is over 10 minutes
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