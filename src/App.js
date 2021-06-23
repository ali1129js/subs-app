/*
This component:
- Data fetch
- Pass data to child component
- class component to utilize Life Cycle Method componentDidMount
- error handling
- conditional rendering (only render a child when data is here)
*/

import React, { Component } from "react";
import SelectPlan from "./components/SelectPlan";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      plans: [],
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

  render() {
    const { error, isLoaded, plans } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container mt-5">
          <h3 className="header">Select Your Plan</h3>
          <SelectPlan plans={plans} />
        </div>
      );
    }
  }
}

export default App;
