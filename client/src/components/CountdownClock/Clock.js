import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Clock.css';
class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {count: 1}
  }
  componentWillUnmount () {
    clearInterval(this.Clock)
  }
  tick () {
    this.setState({count: (this.state.count + 1)})
  }
  startClock () {
    clearInterval(this.Clock)
    this.Clock = setInterval(this.tick.bind(this), 1000)
  }
  stopClock () {
    clearInterval(this.Clock)
  }
  render () {
    return (
      <div className='Clock'>
        <h1>{this.state.count}</h1>
        <div>
          <button onClick={this.startClock.bind(this)}>Start</button>
          <button onClick={this.stopClock.bind(this)}>Stop</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
)