import React, { Component } from 'react';
import { LayoutContext } from '../context/LayoutContext';

class ToggleLayout extends Component {
  render() { 
    return ( <LayoutContext.Consumer>{context => (
      <button onClick={context.toggleLayout}>Change mood</button> 
    )}
    </LayoutContext.Consumer> );
  }
}
 
export default ToggleLayout ;