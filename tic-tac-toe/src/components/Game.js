import React, { Component } from 'react';
import { calculateWinner } from '../supports/helper';
import Board from './Board';

class Game extends Component {
	constructor() {
		super();
		this.state = {
			history: [
				{
					squares: Array(9).fill(null),
					position: null
				}
			],
			stepNumber: 0,
			xIsNext: true,
			winningLine: null
		};
	}

	handleClick(i) {
		// const history = this.state.history;
		const history = this.state.history.slice(0, this.state.stepNumber + 1);
		const current = history[history.length - 1];
		const squares = [...current.squares];
		if (calculateWinner(squares).player || squares[i]) {
			return;
		}
		squares[i] = this.state.xIsNext ? 'X' : 'O';
		this.setState({
			// squares: [...newSquares.slice(0, i), 'X', ...newSquares.slice(i + 1)]
			// squares: squares,
			history: history.concat([
				{
					squares: squares,
					position: i
				}
			]),
			stepNumber: history.length,
			xIsNext: !this.state.xIsNext
		});
	}

	jumpTo(step) {
		this.setState({
			stepNumber: step,
			xIsNext: step % 2 === 0
		});
	}

	render() {
		// const status = 'Next player: X';
		const history = this.state.history;
		const current = history[this.state.stepNumber];
		const winner = calculateWinner(current.squares);

		const moves = history.map((step, move) => {
			const desc = move ? 'Go to move #' + move : 'Go to game start';
			const pos = step.position;
			const col = Math.floor(pos / 3) + 1;
			const row = (pos % 3) + 1;
			return (
				<li key={move}>
					<button onClick={() => this.jumpTo(move)}>{desc}</button>
					{pos !== null ? ` (${col}, ${row})` : ` (col, row)`}
				</li>
			);
		});

		let status;
		if (winner.player) {
			status = `Winner: ${winner.player}`;
		} else if (this.state.stepNumber === 9) {
			status = `THIS IS A DRAW!`;
		} else {
			status = `Next Player: ${this.state.xIsNext ? 'X' : 'O'}`;
		}

		return (
			<div className="game">
				<div className="game-board">
					<Board
						winningLine={winner.line}
						squares={current.squares}
						currentPos={current.position}
						onClick={i => this.handleClick(i)}
					/>
				</div>
				<div className="game-info">
					<div>{status}</div>
					<ol>{moves}</ol>
				</div>
			</div>
		);
	}
}

export default Game;
