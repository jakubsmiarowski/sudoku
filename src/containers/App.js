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
  newGame = () => {
    const generate = sudoku.generate(this.state.level);
    this.setState({
      initialBoard: generate,
      board: generate
    })
  }

  solve = () => {
    const solved = sudoku.solve(this.state.board);
    if(solved) {
      this.setState({ board: solved });
    }else {
      alert('There is something wrong');
    }
  }

  check = () => {
    const board = this.state.board;
    const checked = sudoku.solve(board);
  }

  reset = () => {
    const resetState = (this.state.board = this.state.initialBoard);
    this.setState({ board: resetState });
  }

  render () {
    return(
      <div className="main">
        <div className="title">Sudoku</div>

        <Board />

        <select className="select">
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
            <option value="very hard">very hard</option>
            <option value="insane">insane</option>
            <option value="inhuman">inhuman</option>
        </select>
        <button className="btn" onClick={this.newGame}>New Game</button>
        <button className="btn" onClick={this.check}>Check</button>
        <button className="btn" onClick={this.reset}>Reset</button>
        <button className="btn" onClick={this.solve}>Solve</button>
      </div>
    );
  }
}


export default App;
