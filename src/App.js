import "./App.css";
import { Component } from "react";
import Button from "./Button";

class App extends Component {
  state = {
    number: 0,
  };

  plus = () => {
    this.setState({ number: this.state.number + 1 });
  };

  minus = () => {
    this.setState({ number: this.state.number - 1 });
  };

  render() {
    return (
      <div>
        <Button onClick={this.plus} label="plus" />
        <p>{this.state.number}</p>
        <Button onClick={this.minus} label="minus" />
      </div>
    );
  }
}

export default App;
