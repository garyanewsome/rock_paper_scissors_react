import React, { Component } from 'react';

const tie = 'Tie! 😝'
const win = 'You Win! 🤠'
const loss = 'Better Luck Next Time 😃'

class Result extends Component {
  calculateResult(){
    var user = this.props.user
    var computer = this.props.computer
    var result = ''

    if(user === 'rock') {
      if(computer === 'rock'){
        result = tie
      } else if (computer === 'paper') {
        result = loss
      } else {
        result = win
      }
    }
    if(user === 'paper') {
      if(computer === 'rock'){
        result = win
      } else if (computer === 'paper') {
        result = tie
      } else {
        result = loss
      }
    }
    if(user === 'scissors') {
      if(computer === 'rock'){
        result = loss
      } else if (computer === 'paper') {
        result = win
      } else {
        result = tie
      }
    }
    return result
  }

  render() {
    var result = this.calculateResult()
    console.log(result)
    if(result !== ''){
      return (
        <div className="result-container">
          <hr className="result-hr" />
          <h1>{result}</h1>
          <button className="result-button" onClick={this.props.playAgainHandler} >¿ PLAY AGAIN ?<br/>¯\_(ツ)_/¯</button>
        </div>
      )
    }
    return(
      <div className="result-container">
        <hr className="result-hr" />
        <h2>1 &#8230; 2 &#8230; 3 &#8230; SHOOT !!!</h2>
      </div>
    )
  }
}

export default Result
