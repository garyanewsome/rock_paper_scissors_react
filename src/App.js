import React, { Component } from 'react'

import User from './components/user.js'
import Computer from './components/computer.js'
import Result from './components/result.js'

class App extends Component {
  constructor() {
    super()

    this.state = {
      userChoice: '',
      computerSelection: '',
      result: ''
    }

    this.userSelectionHandler = this.userSelectionHandler.bind(this)
    this.playAgainHandler = this.playAgainHandler.bind(this)
  }
  userSelectionHandler(e) {
    console.log(e.target.value)
    this.setState({ userChoice: e.target.value })

    this.computerSelection()
  }
  computerSelection() {
    var random = Math.floor(Math.random() * 3)
    var computerSelection = ''
    if(random === 0) {
      computerSelection = 'rock'
    } else if(random === 1) {
      computerSelection = 'paper'
    } else {
      computerSelection = 'scissors'
    }

    this.setState({ computerSelection: computerSelection })
  }
  playAgainHandler() {
    this.setState({
      userChoice: '',
      computerSelection: '',
      result: ''
    })
  }
  render() {
    return (
      <div>
        <div className="header">
          <h1>Rock, Paper, Scissors</h1>
        </div>
        <div className="container">
          <div className="game-board">
            <User userSelectionHandler={this.userSelectionHandler} selected={this.state.userChoice} />
            <Computer computerSelection={this.state.computerSelection} />
            <br />
          </div>
          <br />
          <Result user={this.state.userChoice} computer={this.state.computerSelection} playAgainHandler={this.playAgainHandler} />
        </div>
      </div>
    )
  }
}

export default App
