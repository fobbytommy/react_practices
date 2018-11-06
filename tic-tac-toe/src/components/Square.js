import React from 'react';
import styled from 'styled-components';

// const StyledButton = styled.button`
// 	> span {
// 		color: ${props => (props.currentPosition ? 'red' : 'black')};
// 	}
// `;

const Square = props => {
	// console.log(props.currentPosition ? 'red' : 'black');
	return (
		<button className="square" onClick={props.onClick}>
			<span className={props.currentPosition ? 'current' : ''}>{props.value}</span>
		</button>
	);
};

// class Square extends Component {
// 	render() {
// 		return (
// 			<button className="square" onClick={() => this.props.onClick()}>
// 				{this.props.value}
// 			</button>
// 		);
// 	}
// }

export default Square;
