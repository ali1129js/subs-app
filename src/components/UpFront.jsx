/*
-Functional component with hooks
-Radio input
-Sends true/false to App.js
*/

import React, { useState, useEffect } from "react";

const UpFront = ({ handleUpFront }) => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    handleUpFront(checked);
  }, [checked]);
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <label className="form-check-label">Pay Upfront and Save 10%</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          checked={!checked}
          onChange={() => setChecked(!checked)}
        />
        <label className="form-check-label">No Thanks</label>
      </div>
    </>
  );
};
export default UpFront;
