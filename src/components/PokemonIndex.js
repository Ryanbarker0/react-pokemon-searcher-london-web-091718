import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchValue: undefined
  }

  getPokemons = () => 
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())

  createPokemon = pokemon => 
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pokemon)
    }).then(resp => resp.json())
    .then(pokemonObj => this.setState({ pokemons: [...this.state.pokemons, pokemonObj] }))
  

  filterPokemon = () => {
    const pokemon = [...this.state.pokemons]
    const filteredPokemon = pokemon.filter(pokemon => pokemon.name.includes(this.state.searchValue))
    return filteredPokemon
  }

  updateInputValue = event => {
    this.setState({ searchValue: event.target.value })
  }


  componentDidMount() {
    this.getPokemons()
    .then(pokemons => this.setState({ pokemons: pokemons }))
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={event => this.updateInputValue(event)} showNoResults={false} />
        <br />
        <PokemonForm createPokemon={this.createPokemon}/>
        <br />
        <PokemonCollection pokemons={this.state.searchValue ? this.filterPokemon() : this.state.pokemons}/>
      </div>
    )
  }
}

export default PokemonPage
