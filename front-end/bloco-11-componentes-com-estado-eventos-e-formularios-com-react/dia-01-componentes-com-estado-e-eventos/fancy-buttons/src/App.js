import React from "react";

class App extends React.Component {
  handleClick(text) {
    console.log(text);
  }

  render() {
    return (<button onClick={()=> {this.handleClick(this.props.text)}}>BUTÃO</button>);
  }
}

export default App;
