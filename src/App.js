import React from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import LayoutContextProvider from "./context/LayoutContext";
import AuthContextProvider from "./context/AuthContext";
import ToggleLayout from "./components/ToggleLayout";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <LayoutContextProvider>
          <Header />
          <Body />
          <ToggleLayout />
        </LayoutContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
