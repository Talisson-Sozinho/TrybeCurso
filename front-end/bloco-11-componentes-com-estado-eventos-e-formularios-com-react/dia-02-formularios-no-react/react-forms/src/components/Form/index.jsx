import React from "react";
import { SelectInput } from "../SelectInput";
import { Textarea } from "../Textarea";

export class Form extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.temErroNessaPorra = this.temErroNessaPorra.bind(this);
    this.fileInput = React.createRef();
    this.state = {
      inputTextarea: '',
      componentComErro: false,
    };
  }

   handleChange({target}) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }

  temErroNessaPorra() {
    if (this.state.componentComErro) return;
    this.setState({componentComErro: true})

  }

  render() {
    return (
      <form>
        <SelectInput value={this.state.inputOptions} handleChange={this.handleChange} />
        <fieldset>
          <legend>sla</legend>
          <input type="file" name="file" ref={this.inputOptions} onChange={this.handleChange}/>
          <input type="text" name='inputText' value={this.state.inputText} onChange={this.handleChange} />
          <input type="checkbox" name='inputCheckbox' value={this.state.inputCheckbox} onChange={this.handleChange} />
        </fieldset>
        <Textarea emitterError={this.temErroNessaPorra} value={this.state.inputTextarea} handleChange={this.handleChange} />
      </form>
    );
  }
}