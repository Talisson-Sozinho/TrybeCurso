import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((currentState) => ({count: currentState.count + 1}));
  }

  render() {
    return (
      <button onClick={this.handleClick}>Numero de clicks: {this.state.count}</button>
    );
  }
}

export default App;
