import React from 'react'
import './Display.css'
import Switch from './Switch';
import Clock from './Clock'


class Display extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isToggleOn : false
    }
  }

  handleChange = (event) => {
    console.log("calling in parent");
    this.setState((state)=>{
      return {isToggleOn : !state.isToggleOn};
    });

  }

  render(){
    return (
      <div className="display">
        <Switch 
        onSwitchChange={this.handleChange}
        isToggleOn={this.state.isToggleOn}
        />

        <Clock isToggleOn={this.state.isToggleOn}/>
      </div>
      )
  }

}

export default Display;