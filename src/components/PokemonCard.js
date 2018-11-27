import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    isClicked: false
  }

  getPokemonHp = () => {
    const hpObj = this.props.pokemon.stats.find(stat => stat.name === 'hp')
    return hpObj.value
  }

  handleClick = () => {
    this.setState({ isClicked: !this.state.isClicked })
  }

  render() {
    const { pokemon } = this.props
    const { isClicked } = this.state
    return (
      <Card>
        <div>
          <div className="image" onClick={this.handleClick}>
          { !isClicked ? 
            <img src={pokemon.sprites.front} alt="pokemon front" /> :
            <img src={pokemon.sprites.back} alt='pokemon rear' />
          }
          </div>
          <div className="content">
            <div className="header">{ (pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)) }</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.getPokemonHp()}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
