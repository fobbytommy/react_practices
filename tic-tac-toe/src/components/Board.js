import React, { Component } from 'react';

import Square from './Square';

class Board extends Component {
	renderSquare(i) {
		return <Square key={i} value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
	}

	renderBoard(rowNum) {
		let squareNum = 0;
		const board = [];

		const generateRow = currRow => {
			const row = [];
			while (Math.floor(squareNum / rowNum) === currRow) {
				row.push(this.renderSquare(squareNum));
				squareNum++;
			}

			return row;
		};

		for (let i = 0; i < rowNum; i++) {
			board.push(
				<div key={i} className="board-row">
					{generateRow(i)}
				</div>
			);
		}

		return board;
	}

	render() {
		return <div>{this.renderBoard(3)}</div>; // will generate 3x3 board
	}
}

export default Board;
