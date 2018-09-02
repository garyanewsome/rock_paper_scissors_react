import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <div className="user-container">
        <h3>Please choose:</h3>
        <button value="rock" onClick={this.props.userSelectionHandler} >ROCK</button>
        <button value="paper" onClick={this.props.userSelectionHandler} >PAPER</button>
        <button value="scissors" onClick={this.props.userSelectionHandler} >SCISSORS</button>
      </div>
    )
  }
}

export default User
