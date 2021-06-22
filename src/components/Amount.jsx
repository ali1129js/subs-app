import React from "react";

const Amount = () => {
  return (
    <span>
      Amount of Gigabytes
      <input
        className="btn btn-outline-danger "
        type="button"
        onClick={console.log("clicked")}
        value={"5"}
      />
      <input
        className="btn btn-outline-danger "
        type="button"
        onClick={console.log("clicked")}
        value={"10"}
      />
      <input
        className="btn btn-outline-danger"
        type="button"
        onClick={console.log("clicked")}
        value={"50"}
      />
    </span>
  );
};
export default Amount;
