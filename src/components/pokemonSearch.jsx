import React, { Component } from 'react';
import PropTypes from 'prop-types'

class PokemonSearch extends Component {

  render() {
    return (
      <div>
        <ul className="suggestions">
          {this.props.pokemons.map((pokemon, index) => {
            return (
              // This li would make more sense for it to be a component
              <li key={index}>
                <div className="info">
                  <h1>{pokemon.name}</h1>
                  <img src={pokemon.img} alt='' />
                  {pokemon.types.map((type, index) => {
                    return (
                      <span key={index} className={`type ${type.toLowerCase()}`}>{type}</span>
                    )
                  })}
                </div>
              </li>
            )
          })
          }
        </ul>
      </div>
    );
  }

  static propTypes = {
    pokemons: PropTypes.arrayOf(PropTypes.shape(
      {
        name: PropTypes.string,
        types: PropTypes.arrayOf(PropTypes.string),
        img: PropTypes.string
      }
    ))

  }
}

export default PokemonSearch;