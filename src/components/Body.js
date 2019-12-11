import React, { Component } from "react";
import {LayoutContext} from '../context/LayoutContext'

class Body extends Component {
  state = {};
  render() {
    return (
      <LayoutContext.Consumer>{(context) => {
        const {nightMode, day, night} = context
        const mood = nightMode ? night : day
        return(
          <nav>
            <ul>
              <li style={{background: mood.bg, color: mood.color}}>pay</li>
              <li style={{background: mood.bg, color: mood.color}}>promo</li>
              <li style={{background: mood.bg, color: mood.color}}>top up</li>
              <li style={{background: mood.bg, color: mood.color}}>more</li>
            </ul>
          </nav>
        )
      }}
      </LayoutContext.Consumer>
    );
  }
}

export default Body;
