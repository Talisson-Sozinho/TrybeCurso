import React from "react";

export class Textarea extends React.Component {
  render() {
    const { value, handleChange, emitterError } = this.props;
    const errorMessage = value.length >= 10 && 'mt texto';
    emitterError(errorMessage);
    return (
      <fieldset>
        <legend>Textarea</legend>
        <textarea name='inputTextarea' value={value} onChange={handleChange}></textarea>
        <span>{errorMessage}</span>
      </fieldset>
    )
  }
}