import React, { useContext } from "react";
import { ToggleContext } from "./App";
export const Toggle = () => {
  const { toggle } = useContext(ToggleContext);
  return (
    <div>
      <input type="checkbox" checked={toggle} />
    </div>
  );
};

