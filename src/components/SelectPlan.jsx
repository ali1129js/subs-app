import React, { Component } from "react";
import Duration from "./Duration";
import Amount from "./Amount";

class SelectPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 0,
      gigs: 0,
      upfront: false,
      total: 22,
    };
  }
  setChecked = () => {
    console.log("u");
  };
  render() {
    return (
      <div className="select">
        <Duration />
        <Amount />
        <div className="disc">
          <span>
            Pay Upfront:
            <input type="text" type="checkbox" onChange={this.setChecked} />
            Yes <input
              type="text"
              type="checkbox"
              onChange={this.setChecked}
            />{" "}
            No
          </span>
        </div>
        <div className="subs">Subscription type:</div>
        <div className="total">Total:{this.state.total}</div>
        <button>Next</button>
        <label>
          <input
            type="checkbox"
            defaultChecked={this.state.upfront}
            onChange={() => this.setChecked(!this.state.upfront)}
          />
          Check Me!
        </label>
      </div>
    );
  }
}
export default SelectPlan;
