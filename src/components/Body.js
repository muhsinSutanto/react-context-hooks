import React, { useContext } from "react";
import { LayoutContext } from "../context/LayoutContext";

const Body = () => {
  const { nightMode, day, night } = useContext(LayoutContext);
  const mood = nightMode ? night : day;
  return (
    <nav>
      <ul>
        <li style={{ background: mood.bg, color: mood.color }}>pay</li>
        <li style={{ background: mood.bg, color: mood.color }}>promo</li>
        <li style={{ background: mood.bg, color: mood.color }}>top up</li>
        <li style={{ background: mood.bg, color: mood.color }}>more</li>
      </ul>
    </nav>
  );
};

export default Body;
