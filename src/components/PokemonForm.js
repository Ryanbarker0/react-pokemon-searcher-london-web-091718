import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      hp: 0,
      front: '',
      back: ''
    }
  }

  handleSubmit = () => {
    const newPokemon = {
      name: this.state.name,
      stats: [
        {
        value: this.state.hp,
        name: "hp"
      }
    ],
      sprites: {
        front: this.state.front,
        back: this.state.back
      }
    }
     this.props.createPokemon(newPokemon)
    }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={event => this.handleChange(event)}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={event => this.handleChange(event)}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="front" onChange={event => this.handleChange(event)}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="back" onChange={event => this.handleChange(event)}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
