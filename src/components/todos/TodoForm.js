import React, { Component } from 'react'

class TodoForm extends Component {
  state = { name: '' }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name]: value})
  }

  handlesubmit = (e) => {
    e.preventDefault();


  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          required
          placeholder="add a todo here"
          name = "name"
          value={this.state.name}
          onchange={this.handleChange}
          />

      </form>
    )
  }
}

export default TodoForm;