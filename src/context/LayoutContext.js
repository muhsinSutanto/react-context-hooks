import React, { createContext, Component } from 'react';

export const LayoutContext = createContext()

class LayoutContextProvider extends Component {
  state = { 
    nightMode: false,
    day: {
      color: '#ffc1e3',
      bg: '#a98274'
    },
    night: {
      color: '#bf5f82',
      bg: '#4b2c20'
    }
   }
  
   toggleLayout = () => {
     this.setState({
       nightMode : !this.state.nightMode
     })
   }
  render() { 
    return ( <LayoutContext.Provider value={{...this.state, toggleLayout: this.toggleLayout}}>
      {this.props.children}
    </LayoutContext.Provider> );
  }
}
 
export default LayoutContextProvider;