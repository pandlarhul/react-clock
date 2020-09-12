import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import './Header.css'


class Header extends React.Component{

  render(){
    return (
      <div className="header">
        <div className="fa fa-clock-o icon"></div>
        <div className="heading"> React Clock</div>
      </div>
      )
  }

}

export default Header;