import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import './Clock.css'


class Clock extends React.Component{

  constructor(props){
    super(props);
    const date = new Date();
    let time = date.toLocaleTimeString().split(" ")[0];
    this.state = {date : "", time: time};
  }

  startTimer =() => {
    const date = new Date();
    let time = date.toLocaleTimeString().split(" ")[0];

    let showDate = 
    date.toLocaleString('default',
     { 
       weekday: 'short',
       day: 'numeric',
       month: 'long' ,
       year: 'numeric'
    }).replace(/[,]/gi,"").split(" ");;
     showDate = showDate[0] + " "+ showDate[2] + " "+ showDate[1] +" "+showDate[3];
    this.setState({time : time,date : showDate});
  }

  componentDidMount(){
    setInterval(this.startTimer, 1000);
  }

  

  render(){

    let isToggleOn = this.props.isToggleOn;
    let showDate = isToggleOn ? <div className="date">{this.state.date}</div> : null;
    return (
      <div className="clock">
        <div className="circle-date">
        <div className="time">{this.state.time}</div>
          {showDate}
      </div>
      </div>
      )
  }

}

export default Clock;