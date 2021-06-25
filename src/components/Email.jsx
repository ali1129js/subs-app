import React, { useState, useEffect } from "react";

const Email = ({ updateEmail }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    updateEmail(value);
  }, [value]);
  return (
    <div className="input-group ">
      <span className="input-group-text">@</span>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="form-control mt-4"
        placeholder=" Enter your Email"
        required
      />
    </div>
  );
};
export default Email;
