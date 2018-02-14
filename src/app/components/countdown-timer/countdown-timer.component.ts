import {
  Component,
  Input,
  OnInit
} from '@angular/core';

interface clock {
  total: number;
  days: string | number;
  hours: number;
  minutes: number;
  seconds: number;
}

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html'
})

export class CountdownComponent implements OnInit {
  @Input() date: string = '2017-03-03';
  @Input() isClock: boolean = false;

  timeRemaining: clock = {
    total: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  ngOnInit() {
    let isClock = this.isClock ? this.isClock : this.date;
    this.initializeClock(isClock);
  }

  initializeClock(endTime) {
    let timeInterval = setInterval(() => {
      if(this.isClock) {
        this.createTimeClock(endTime);
      } else {
        this.timeRemaining = calcRemainingTime(endTime);
        if (this.timeRemaining.total <= 0 ) {
          clearInterval(timeInterval);
        }
      }
    }, 1000);
  }

  createTimeClock(date) {
    date = new Date();
    let currentHours = date.getHours();
    let currentMinutes = date.getMinutes();
    let currentSeconds = date.getSeconds();
    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
    var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
    currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
    currentHours = ( currentHours == 0 ) ? 12 : currentHours;
    let currentTimeString = {
      'total': 0,
      'days': timeOfDay,
      'hours': currentHours,
      'minutes': currentMinutes,
      'seconds': currentSeconds
    };
    this.timeRemaining = currentTimeString;
  }
}

function calcRemainingTime(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date().toString());
  let seconds = Math.floor( (t / 1000) % 60 );
  let minutes = Math.floor( (t / 1000 / 60) % 60 );
  let hours = Math.floor( (t / (1000 * 60 * 60)) % 24 );
  let days = Math.floor( t / (1000 * 60 * 60 * 24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
