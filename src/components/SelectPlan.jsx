/*
Each Parameter {Duration,Amount,UpFront} has its own component.
Each component has a handler method to update parent with selected values
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
      amount: 5,
      upfront: false,
    };
  }

  //methods to update state
  handleDuration = (value) => {
    this.setState({ duration: value });
  };
  handleAmount = (value) => {
    this.setState({ amount: value });
  };
  handleUpFront = (value) => {
    this.setState({ upfront: value });
  };

  calculateCost = () => {
    //Destructuring state
    const { duration, amount, upfront } = this.state;
    //getting prices from props
    const arrayPrices = this.props.plans.map((plan) => plan.price_usd_per_gb);

    if (upfront) {
      switch (duration) {
        case "3":
          return amount * arrayPrices[0] * 0.9;
        case "6":
          return amount * arrayPrices[1] * 0.9;
        case "12":
          return amount * arrayPrices[2] * 0.9;
        default:
          return amount * arrayPrices[2] * 0.9;
      }
    } else {
      switch (duration) {
        case "3":
          return amount * arrayPrices[0];
        case "6":
          return amount * arrayPrices[1];
        case "12":
          return amount * arrayPrices[2];
        default:
          return amount * arrayPrices[2];
      }
    }
  };

  render() {
    return (
      <>
        <div className="select">
          <div className="params">
            <div className="header">Select your Plan</div>
            <Duration handleDuration={this.handleDuration} />
            <Amount handleAmount={this.handleAmount} />
            <UpFront handleUpFront={this.handleUpFront} />
          </div>
          <div className="subs">
            <h5>Current Subscription:</h5>
            <div className="spc">
              {this.state.amount} GigaBytes for {this.state.duration} Months
            </div>
            <div className="total">Total Cost:{this.calculateCost()}$</div>
          </div>
          <button
            className="btn btn-outline-info btn-lg m-2"
            onClick={() => this.props.handleNext()}
          >
            Next
          </button>
        </div>
      </>
    );
  }
}
export default SelectPlan;
