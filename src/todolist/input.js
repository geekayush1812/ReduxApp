import React, { Component } from 'react';

export default class Input extends Component {
	render() {
		console.log('Input component Renders');
		return (
			<input
				type='text'
				onChange={this.props.onChange}
				value={this.props.value}
				onKeyPress={this.props.onKeyPress}
			/>
		);
	}
}
