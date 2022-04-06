import React, { useState } from "react";

export const Checkbox = () => {
  const [checkedState, setCheckedState] = useState(false);

  const handleChange = () => {
    setCheckedState(checkedState ? false : true);
  };

  return (
    <input type="checkbox" checked={checkedState} onChange={handleChange} />
  );
};
