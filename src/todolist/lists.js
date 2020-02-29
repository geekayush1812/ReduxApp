import React from 'react';

export default class Lists extends React.Component {
	render() {
		console.log(`Lists Component renders ${this.props.number}`);
		return this.props.lists.map(todo => {
			return <p>{todo.content}</p>;
		});
	}
}
