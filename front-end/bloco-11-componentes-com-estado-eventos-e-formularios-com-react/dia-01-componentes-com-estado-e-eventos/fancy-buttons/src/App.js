import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const {text} = this.props;
    console.log(text);
  }

  render() {
    return (<button onClick={this.handleClick}>BUTÃO</button>);
  }
}

export default App;
