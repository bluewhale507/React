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

// import { useReducer } from "react";

// function reducer(state, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return { value: state.value + 1 };
//     case "DECREMENT":
//       return { value: state.value - 1 };
//     default:
//       return state;
//   }
// }
// const Counter = () => {
//   const [state, dispatch] = useReducer(reducer, { value: 0 });

//   return (
//     <div>
//       <p>
//         현재 카운터 값은 <b>{state.value}</b> 입니다.
//       </p>
//       <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
//       <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
//     </div>
//   );
// };

// export default Counter;
