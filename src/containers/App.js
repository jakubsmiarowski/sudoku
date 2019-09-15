import React, { Component } from 'react';
import Board from '../components/Board'
import './App.css';
import sudoku from 'sudoku-umd';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
    initialBoard: '',
    board: '',
    level: '',
  }
}



  render () {
    return(
      <div className="main">
        <div className="title"></div>

        <Board />

        <select className="select">
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
            <option value="very hard">very hard</option>
            <option value="insane">insane</option>
            <option value="inhuman">inhuman</option>
        </select>
        <button className="btn">New Game</button>
        <button className="btn">Check</button>
        <button className="btn">Undo</button>
        <button className="btn">Reset</button>
        <button className="btn">Solve</button>
      </div>
    );
  }
}


export default App;
