import { Component } from "react";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";

class App extends Component {
  render() {
    return (
      <div>
        <MyComponent name="React" number={1}>
          리액트
        </MyComponent>
        <Counter></Counter>
        <Say></Say>
      </div>
    );
  }
}

export default App;
