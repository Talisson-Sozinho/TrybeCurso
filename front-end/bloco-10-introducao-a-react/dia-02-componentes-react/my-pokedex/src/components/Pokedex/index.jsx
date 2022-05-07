import { Pokemon } from "../Pokemon";
import PropTypes from 'prop-types';
import React from "react";

export class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <main className="pokedex-container">
        {
          pokemons.map( ({id, name, type, averageWeight, image}) => (
            <Pokemon
              key={id}
              name={name}
              type={type}
              averageWeight={averageWeight}
              image={image}
            />
          ))
        }
      </main>
    );
  };
};

Pokedex.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }),
    image: PropTypes.string.isRequired,
  })),
}
