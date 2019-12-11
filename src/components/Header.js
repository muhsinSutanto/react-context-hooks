import React, { Component } from "react";
import {LayoutContext} from '../context/LayoutContext'

class Header extends Component {
  static contextType = LayoutContext
  render() {
    const {nightMode, day, night} = this.context
    const mood = nightMode ? night : day
    return (
      <div style={{background: mood.bg}}>
        <h2>gopay</h2>
      </div>
    );
  }
}

export default Header;
