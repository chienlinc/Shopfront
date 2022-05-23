import React, { Component } from "react";
import Counters from "../components/counters/counters";
import NavBar from "../components/counters/navbar";

class ShoppingCart extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor() {
    super();
    console.log("App initialized! Call once");
    // this.state = ...
  }

  componentDidMount() {
    console.log("App mounted!");
    // After component in rendered
    // Ajax call this.setState( ... )
  }

  handleDelete = (counterID) => {
    const counters = this.state.counters.filter((c) => c.id != counterID);
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };

  handleIncremet = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters: counters });
  };

  render() {
    console.log("App rendered!");
    return (
      <div>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />

        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncremet}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </main>
      </div>
    );
  }
}

export default ShoppingCart;
