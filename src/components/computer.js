import React, { Component } from 'react'

class Puter extends Component {
  render() {
    return (
      <div className="computer-container">
        <h3>Computer Selection:</h3>
        <h4 className="computer-choice">
          {this.props.computerSelection.toUpperCase()}
        </h4>
      </div>
    )
  }
}

export default Puter
