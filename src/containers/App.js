import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Board from '../components/Board/Board'
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
    if ((board.indexOf('.')) > -1 && checked) {
      alert('So far, so good :)')
    } else if (board === checked) {
      alert('Congratulations, you won!')
    } else {
      alert('You chose, poorly')
    }
  }

  reset = () => {
    const resetState = (this.state.board = this.state.initialBoard);
    this.setState({ board: resetState });
  }

  handleChange = event => {
    this.setState({ level: event.target.value });
  }

  handleInputValue = (event, id) => {
    const inputId = event.target.id;
    const inputValue = Number(event.target.value++);
    const board = this.state.board;

    const newArray = Object.assign([], board, {[inputId]: inputValue});

    this.setState({
      board: newArray.join("")
    });
  }

  render () {
    return(
      <div className="main">
        
        <div className="title">Sudoku</div>

        <div className="buttons">
          <select 
            className="select"
            name='select'
            onChange={this.handleChange}
            value={this.state.level}
          >
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

        <Board
          onSubmit={this.handleChange}
          board={this.state.board.split('')}
          initialBoard={this.state.initialBoard.split('')}
          onChange={this.handleInputValue}
        />

      </div>
    );
  }
}


export default hot(module)(App);
