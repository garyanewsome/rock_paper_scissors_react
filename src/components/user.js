import React, { Component } from 'react';

const normal = {
  backgroundColor: 'hsl(0, 0%, 86.7%)',
  color: 'hsl(0, 0%, 10%)'
}
const selected = {
  backgroundColor: 'hsl(169, 42%, 49%)',
  color: 'hsl(0, 0%, 100%)'
}

class User extends Component {
  render() {
    return (
      <div className="user-container">
        <h3>Please Selection:</h3>
        <button className="user-button" value="rock" onClick={this.props.userSelectionHandler} style={this.props.selected === 'rock' ? selected : normal} >ROCK</button>
        <button className="user-button" value="paper" onClick={this.props.userSelectionHandler} style={this.props.selected === 'paper' ? selected : normal} >PAPER</button>
        <button className="user-button" value="scissors" onClick={this.props.userSelectionHandler} style={this.props.selected === 'scissors' ? selected : normal} >SCISSORS</button>
      </div>
    )
  }
}

export default User
