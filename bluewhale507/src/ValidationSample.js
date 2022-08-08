import React, { Component } from "react";
import "./ValidationSample.css";

export default class ValidationSample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      clicked: false,
      validated: false,
    };
  }

  passInput = React.createRef();

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
    // this.input.focus();
    this.passInput.current.focus();
  };

  render() {
    return (
      <div>
        <input
          ref={this.passInput}
          //   ref={(ref) => (this.input = ref)}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
        <div>
          <h1>{this.state.password}</h1>
        </div>
      </div>
    );
  }
}
