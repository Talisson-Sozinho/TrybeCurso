import React from "react";

export class SelectInput extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <fieldset>
        <legend>Options</legend>
        <select name='inputOptions' value={value} onChange={handleChange}>
          <option>hm</option>
          <option>haha</option>
          <option>kkkkkk</option>
        </select>
      </fieldset>
    )
  }
}