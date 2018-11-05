import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	color: ${props => (props.currentPosition ? 'red' : 'black')};
`;

const Square = props => {
	return (
		<button className="square" onClick={props.onClick} style={`color: ${props.currentPosition ? 'red' : 'black'}`}>
			{props.value}
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
