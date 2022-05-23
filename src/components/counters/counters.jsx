import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  // state = {
  //     counters: [
  //       { id: 1, value: 0 },
  //       { id: 2, value: 0 },
  //       { id: 3, value: 0 },
  //       { id: 4, value: 0 },
  //     ],
  //   };

  //   handleDelete = (counterID) => {
  //     const counters = this.state.counters.filter((c) => c.id != counterID);
  //     this.setState({ counters: counters });
  //   };

  //   handleReset = () => {
  //     const counters = this.state.counters.map((c) => {
  //       c.value = 0;
  //       return c;
  //     });
  //     this.setState({ counters: counters });
  //   };

  //   handleIncremet = (counter) => {
  //     const counters = [...this.state.counters];
  //     const index = counters.indexOf(counter);
  //     counters[index] = {...counter};
  //     counters[index].value++;
  //     this.setState({counters: counters});
  //   };

  render() {
    console.log("Counters rendered!");
    const { onReset, onDelete, onIncrement, counters } = this.props;

    return (
      <div>
        <button
          //   onClick={this.handleReset}
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>

        {counters.map((counter) => (
          <Counter
            key={counter.id}
            // onIncrement={this.handleIncremet}
            // onDelete={this.handleDelete}
            onIncrement={onIncrement}
            onDelete={onDelete}
            counter={counter}
            // value={counter.value}
            // id={counter.id}
          >
            {/* <h4>Counter #{counter.id}</h4> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
