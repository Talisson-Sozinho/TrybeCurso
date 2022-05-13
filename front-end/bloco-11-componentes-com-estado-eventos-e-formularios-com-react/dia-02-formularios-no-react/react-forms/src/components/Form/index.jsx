import React from "react";
import { SelectInput } from "../SelectInput";
import { Textarea } from "../Textarea";

export class Form extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.fileInput = React.createRef();
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
        <SelectInput value={this.state.inputSe} handleChange={this.handleChange} />
        <fieldset>
          <legend>sla</legend>
          <input type="file" name="file" ref={this.inputOptions} onChange={this.handleChange}/>
          <input type="text" name='inputText' value={this.state.inputText} onChange={this.handleChange} />
          <input type="checkbox" name='inputCheckbox' value={this.state.inputCheckbox} onChange={this.handleChange} />
        </fieldset>
        <Textarea value={this.state.inputTextarea} handleChange={this.handleChange} />
      </form>
    );
  }
}