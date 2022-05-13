import React from "react";

export class Form extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      selectValue: '',
      inputTextValue: '',
      inputCheckboxValue: '',
      textareaValue: '',
    }
  }

  handleChange(event) {
    this.setState({
      inputTextValue: event.target.checked,
    })
  }
  render() {
    return (
      <form>
        <select>
          <option>hm</option>
          <option>haha</option>
          <option>kkkkkk</option>
        </select>
        <input type="text" value={this.state.inputTextValue} onChange={this.handleChange} />
        <input type="checkbox"/>
        <textarea></textarea>
      </form>
    );
  }
}