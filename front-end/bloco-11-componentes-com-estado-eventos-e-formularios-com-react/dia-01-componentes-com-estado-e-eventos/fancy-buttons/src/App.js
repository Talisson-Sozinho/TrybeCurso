import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  async handleClick() {
    await this.setState((currentState) => ({
      count: currentState.count + 1,
      color: ((currentState.count + 1) % 2 === 0) ? 'green' : `blue`,
    }));
    console.log(this.state.color);
  }

  render() {
    const style = {
      backgroundColor: this.state.color,
    }
    return (
      <button 
        onClick={this.handleClick}
        style = {style}
      >
        Numero de clicks: {this.state.count}
      </button>
    );
  }
}

export default App;
