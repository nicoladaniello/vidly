import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    // Good to call actions if previous state and or props have changed e.g.
    // if (prevProps.counter.value !== this.props.counter.value) {
    //   // Ajax call...
    // }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
    // prevent memory leaks here e.g.
    // stop timeouts and or listeners
  }

  render() {
    console.log("Counter - Rendered");

    const { counter } = this.props;

    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={counter.value === 0}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(counter.id)}
            className="btn btn-danger btn-sm"
          >
            x
          </button>
        </div>
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
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
