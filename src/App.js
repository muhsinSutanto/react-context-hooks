import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import LayoutContextProvider from './context/LayoutContext';
import ToggleLayout from './components/ToggleLayout';

function App() {
  return (
    <div className="App">
      <LayoutContextProvider>
        <Header/>
        <Body/>
        <ToggleLayout />
      </LayoutContextProvider>
    </div>
  );
}

export default App;
