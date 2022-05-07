import React from "react";
import PropTypes from 'prop-types';

export class Pokemon extends React.Component {
  render() {
    const {name, type, averageWeight:{ value, measurementUnit}, image} = this.props;

    return (
      <article className='card-pokemon-container'>
        <ul>
          <li>Name: {name}</li>
          <li>Type: {type}</li>
          <li>Average Weight: {value} {measurementUnit}</li>
        </ul>
        <img src={image} alt={name} />
      </article>
    );
  };
};

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  averageWeight: PropTypes.exact({
    value: PropTypes.number.isRequired,
    measurementUnit: PropTypes.string.isRequired,
  }),
  image: PropTypes.string.isRequired,
}
