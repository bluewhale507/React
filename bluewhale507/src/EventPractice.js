import { Component } from "react";

export default class EventPractice extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      message: "",
      username: "",
    };
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleClick = (e) => {
    alert(this.state.username + ":" + this.state.message);
    this.setState({ username: "" });
    this.setState({ message: "" });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해보세요."
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}> 확인 </button>
      </div>
    );
  }
}
