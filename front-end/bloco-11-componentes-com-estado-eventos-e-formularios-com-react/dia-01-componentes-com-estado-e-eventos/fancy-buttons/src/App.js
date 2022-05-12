import React from "react";

class App extends React.Component {
  handleClick() {
    console.log('um texto qualquer');
  }

  render() {
    return (<button onClick={this.handleClick}>BUTÃO</button>);
  }
}

export default App;
