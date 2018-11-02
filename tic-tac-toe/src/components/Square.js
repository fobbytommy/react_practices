import React from 'react';

const Square = props => (
	<button className="square" onClick={props.onClick}>
		{props.value}
	</button>
);

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
