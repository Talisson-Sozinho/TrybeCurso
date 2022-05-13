import React from "react";

export class Form extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {};
  }

  async handleChange({target}) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    await this.setState({
      [name]: value,
    })
    console.log(this.state)
  }
  render() {
    return (
      <form>
        <select name='inputOptions' value={this.state.inputOptions} onChange={this.handleChange}>
          <option>hm</option>
          <option>haha</option>
          <option>kkkkkk</option>
        </select>
        <input type="text" name='inputText' value={this.state.inputText} onChange={this.handleChange} />
        <input type="checkbox" name='inputCheckbox' value={this.state.inputCheckbox} onChange={this.handleChange} />
        <textarea name='inputTextarea' value={this.state.inputTextarea} onChange={this.handleChange}></textarea>
      </form>
    );
  }
}