import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import './Switch.css'


class Switch extends React.Component{
  

  handleChange =(event) => {
     this.props.onSwitchChange(event);
  }

  render(){
    return (
      <div className="toggle-switch">
        <div className={"toggle-btn "+(this.props.isToggleOn ? "active" : "")}
        onClick={this.handleChange}>
        <div className="inner-circle">
        </div>
      </div>

      <div className="fa fa-calendar cal-icon">
      </div>

      </div>
      )
  }

}

export default Switch;