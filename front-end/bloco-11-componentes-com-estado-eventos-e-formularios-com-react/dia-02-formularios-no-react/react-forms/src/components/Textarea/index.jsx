import React from "react";

export class Textarea extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <fieldset>
        <legend>Textarea</legend>
        <textarea name='inputTextarea' value={value} onChange={handleChange}></textarea>
        {value.length >= 10 && <span>textão em</span>}
      </fieldset>
    )
  }
}