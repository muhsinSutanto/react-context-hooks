import React, { useContext } from "react";
import { LayoutContext } from "../context/LayoutContext";

const ToggleLayout = () => {
  const { toggleLayout } = useContext(LayoutContext);
  return <button onClick={toggleLayout}>Change mood</button>;
};

export default ToggleLayout;
