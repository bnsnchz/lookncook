import React, {Component} from 'react';
import './Clock.css';
class Clock extends Component {

    getTimeRemaining = (endtime) => {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
          'total': t,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        };
      }
      
       initializeClock = (id, endtime) => {
        var clock = document.getElementById(id);
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');
      
         updateClock = () => {
          var t = getTimeRemaining(endtime);
                hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
          minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
          secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
      
          if (t.total <= 0) {
            clearInterval(timeinterval);
          }
        }
      
        updateClock  = () => {
        var timeinterval = setInterval(updateClock, 1000);
      }
      
   initializeClock = () => {
      var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
      this.initializeClock('clockdiv', deadline);

      // iterate over each element in the schedule
for(var i=0; i<schedule.length; i++){
  var startDate = schedule[i][0];
  var endDate = schedule[i][1];

  // put dates in milliseconds for easy comparisons
  var startMs = Date.parse(startDate);
  var endMs = Date.parse(endDate);
  var currentMs = Date.parse(new Date());

  // if current date is between start and end dates, display clock
  if(endMs > currentMs && currentMs >= startMs ){
      initializeClock('clockdiv', endDate);
  }
}
}
    render() {
        return (
            <div>
                <div>
                <h1>Countdown Clock</h1>
<div id="clockdiv">
  <div>
    <span class="hours"></span>
    <div class="smalltext">Hours</div>
  </div>
  <div>
    <span class="minutes"></span>
    <div class="smalltext">Minutes</div>
  </div>
  <div>
    <span class="seconds"></span>
    <div class="smalltext">Seconds</div>
  </div>
</div>
                </div>
            </div>
        )
    }
}

export default Clock;