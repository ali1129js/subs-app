/*
This component:
- Data fetch in componentDidMount
- Pass data to child component
- error handling
- conditional rendering
*/

import React, { Component } from "react";
import SelectPlan from "./components/SelectPlan";
import CreditData from "./components/CreditData";
import Confirmation from "./components/Confirmation";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      plans: [],

      step: "1",

      duration: "12",
      amount: 5,
      upfront: false,
      email: "",
    };
  }

  componentDidMount() {
    fetch("https://cloud-storage-prices-moberries.herokuapp.com/prices")
      .then((res) => res.json())
      .then(
        (res) => {
          this.setState({
            isLoaded: true,
            plans: res.subscription_plans,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  handleNext = () => {
    this.setState({ step: "2" });
  };
  handleBack = () => {
    this.setState({ step: "1" });
  };
  handleSum = () => {
    this.setState({ step: "3" });
  };
  updateEmail = (value) => {
    this.setState({ email: value });
  };
  render() {
    const { error, isLoaded, plans, step, summary } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading... </div>;
    } else if (step === "1") {
      return (
        <div className="container mt-5">
          <SelectPlan plans={plans} handleNext={this.handleNext} />
        </div>
      );
    } else if (step === "2") {
      return (
        <div className="container mt-5">
          <CreditData
            handleBack={this.handleBack}
            handleSum={this.handleSum}
            updateEmail={this.updateEmail}
          />
        </div>
      );
    } else if (step === "3") {
      return <Confirmation summary={summary} />;
    }
  }
}

export default App;
