import React, { useContext } from "react";
import { LayoutContext } from "../context/LayoutContext";
import { ServiceContext } from "../context/ServiceContext";

const Body = () => {
  const { nightMode, day, night } = useContext(LayoutContext);
  const { serviceList } = useContext(ServiceContext);
  const mood = nightMode ? night : day;

  return (
    <nav>
      <ul>
        {serviceList.map((item, idx) => (
          <li key={idx} style={{ background: mood.bg, color: mood.color }}>
            {item.title}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Body;
