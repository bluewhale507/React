import { Component } from "react";

export default class Counter extends Component {
  /*   constructor(props) {
    super(props);
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  } */

  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>{fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });
            this.setState(
              (prevState) => ({
                number: prevState.number + 1,
              }),
              () => {
                console.log("방금 setState가 호출되었습니다.");
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}
