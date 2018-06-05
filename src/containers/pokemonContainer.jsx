import React, { Component } from 'react';
import PokemonSearch from '../components/pokemonSearch';
import '../styles/main.css';

//# This should be inside the getData method
// since is not used anywhere else
const URL = 'https://gist.githubusercontent.com/bar0191/fae6084225b608f25e98b733864a102b/raw/dea83ea9cf4a8a6022bfc89a8ae8df5ab05b6dcc/pokemon.json';
class PokemonContainer extends Component {
  state = {
    pokemons: [],
    filteredPokemons: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch(URL).then(data => data.json()).then(data => {
      const pokemonData = [];
      data.forEach(pokemon => {
        pokemonData.push({
          name: pokemon.Name,
          types: pokemon.Types,
          img: pokemon.img
        });
      });
      this.setState({
        pokemons: pokemonData,
        filteredPokemons: pokemonData
      });
    }).catch(console.log('Fetch error'));
  }

  filter = (e) => {
    const inputValue = e.target.value;
    //var pattern = new RegExp("/\b"+ inputValue +"\b/");       //TODO: Add Regex to filter by name and by types
    //#If you wanted to do it with regex
    //new RegExp(inputValue, 'gi')

    //# Cluttered, needs cleanup
    //# Without the regex you could lowercase and use 'String.contains(inputValue)'
    const result = inputValue === '' ? this.state.pokemons : this.state.pokemons.filter(pokemon => pokemon.name === inputValue) || this.state.pokemons.filter(pokemon => pokemon.types.filter(type => type.toLowerCase() === inputValue));        //TODO: Fix filter by type
    this.setState({ filteredPokemons: result });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          className="input"
          placeholder="Pokemon or type"
          onChange={this.filter} />
        <PokemonSearch
          pokemons={this.state.filteredPokemons}
        />
      </div>
    );
  }
}

export default PokemonContainer;