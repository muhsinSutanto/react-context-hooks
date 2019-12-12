import React, { useContext } from "react";
import { LayoutContext } from "../context/LayoutContext";
import { AuthContext } from "../context/AuthContext";

const Header  = () => {
  const {nightMode, day, night} = useContext(LayoutContext)
  const {isAuthenticated, toggleAuth} = useContext(AuthContext)

  const mood = nightMode ? night : day;
  return ( <div>
    <div style={{ background: mood.bg }}>
      <h2>gopay</h2>
    </div>
    <button onClick={toggleAuth}>
      {isAuthenticated ? <p>logged in </p> : <p>Logged out</p>}
    </button>
  </div> );
}

export default Header;
