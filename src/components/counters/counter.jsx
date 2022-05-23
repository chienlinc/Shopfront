import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  // };

  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  //   constructor(){
  //       super();
  //       this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //   handleIncrement = (e) => {
  //     this.setState({ value: this.state.value + 1 });
  //   };

  //   doHandleIncrement = () => {
  //     this.handleIncrement({ id: 1 });
  //   };

  componentDidUpdate(prevProps, prevState) {
    // after component is updated
    console.log("prevProps", prevProps);
    // console.log('prevState', prevState);
    // if (prevProps.counter.value !== this.props.counter.value){
    //   // ajax call and get new data from the server
    // }
  }

  componentWillUnmount() {
    // just call before component is going to remove
    console.log("Counter unmout");
  }

  render() {
    console.log("Counter rendered!");
    return (
      <div>
        {/* {this.props.children} */}
        <h4>Counter #{this.props.counter.id}</h4>

        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          style={{ fontSize: 20 }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value == 0 ? "Zero" : value;
  }
}

export default Counter;
