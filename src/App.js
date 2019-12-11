import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import LayoutContextProvider from './context/LayoutContext';

function App() {
  return (
    <div className="App">
      <LayoutContextProvider>
        <Header/>
        <Body/>
      </LayoutContextProvider>
    </div>
  );
}

export default App;
