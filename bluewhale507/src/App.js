import { Component } from "react";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import { IterationSample } from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";
import CounterUseState from "./CounterUseState";
import Info from "./Info";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <Info />
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
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
          <button onClick={this.handleClick}>랜덤색상</button>
        </ErrorBoundary>
        <CounterUseState />
      </div>
    );
  }
}

export default App;
