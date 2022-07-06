import { Component } from "react";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import { IterationSample } from "./IterationSample";

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
        <ValidationSample></ValidationSample>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
        <button onClick={() => this.scrollBox.scrollToTop()}>맨 위로</button>
        <IterationSample />
      </div>
    );
  }
}

export default App;
