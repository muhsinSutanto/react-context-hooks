import React, { Component } from "react";
import {LayoutContext} from '../context/LayoutContext'
import {AuthContext} from '../context/AuthContext'

class Header extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(authContext) => (
           <LayoutContext.Consumer>
           {(LayoutContext) => {
             const {isAuthenticated, toggleAuth} = authContext
             const {nightMode, day, night} = LayoutContext
             const mood = nightMode ?  night: day
             return(
               <div>
                <div style={{background: mood.bg}}>
                  <h2>gopay</h2>
                </div>
                <button onClick={toggleAuth}>
                  {isAuthenticated? <p>logged in </p> : <p>Logged out</p>}
                </button>
               </div>
             )
           }}
         </LayoutContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default Header;
