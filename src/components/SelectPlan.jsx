/*
Each Parameter {Duration,Amount,UpFront} has its own component.

*/

import React, { Component } from "react";
import Duration from "./Duration";
import Amount from "./Amount";
import UpFront from "./UpFront";

class SelectPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: "12",
      gigs: 0,
      upfront: false,
      total: 22,
    };
  }
  handleDuration = (value) => {
    this.setState({ duration: value });
  };

  setChecked = () => {
    console.log("u");
  };
  render() {
    return (
      <div className="select">
        <Duration handleDuration={this.handleDuration} />
        <Amount />
        <UpFront />
        <div className="subs">Subscription type:</div>
        <div className="total">Total:{this.state.total}</div>
        <button>Next</button>
        <input
          type="checkbox"
          defaultChecked={this.state.upfront}
          onChange={() => this.setChecked(!this.state.upfront)}
        />
        Check Me!
      </div>
    );
  }
}
export default SelectPlan;
