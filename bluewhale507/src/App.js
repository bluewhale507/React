import { Component } from "react";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";

class App extends Component {
  render() {
    return (
      <div>
        <MyComponent name="React" number={1}>
          리액트
        </MyComponent>
        <Counter></Counter>
        <Say></Say>
        <EventPractice />
      </div>
    );
  }
}

export default App;
