import React, { Component } from 'react'

class Puter extends Component {
  render() {
    return (
      <div className="App">
        Puter selection:
        <br />
        <h3>
          {this.props.computerSelection.toUpperCase()}
        </h3>
      </div>
    )
  }
}

export default Puter
