import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };
  }

  handelClick = () => {
    this.setState(state => {
      return {
        value: this.state.value + 1
      };
    });
    this.setState(state => {
      return {
        value: this.state.value + 2
      };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handelClick}>Click hear !!!!!!</button>
        <div>
          <h1>{this.state.value}</h1>
        </div>
      </div>
    );
  }
}
