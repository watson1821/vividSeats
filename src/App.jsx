import React, { Component } from 'react';
import PokemonContainer from './containers/pokemonContainer'
//# Remove unnecessary import
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <PokemonContainer />
      </div>
    );
  }
}

export default App;
