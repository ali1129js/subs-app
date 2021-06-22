import React, { useState } from "react";

const Duration = () => {
  const [value, setValue] = useState(12);
  return (
    <div className="drtn">
      <div>
        <span className="">Duration:</span>
        <select
          style={{ width: "10rem" }}
          className="form-select"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <option value="12">12 Months</option>
          <option value="6">6 Months </option>
          <option value="3">3 Months</option>
        </select>
      </div>
    </div>
  );
};

export default Duration;
