import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodoList1, addTodoList2 } from '../redux/todoList/todo.action';
import { updateText1, updateText2 } from '../redux/input/input.action';
import {
	selectInputText1,
	selectInputText2,
} from '../redux/input/input.selector';
import {
	selectTodosList1,
	selectTodosList2,
} from '../redux/todoList/todo.selector';
import Lists from './lists';
import Input from './input';

class Todo extends Component {
	onChange1 = e => {
		const { updateText1 } = this.props;
		updateText1(e.target.value);
	};
	onChange1 = e => {
		const { updateText2 } = this.props;
		updateText2(e.target.value);
	};
	handleText1 = e => {
		if (e.charCode === 13) {
			const { list1, addTodoList1, updateText1 } = this.props;
			const todo = {
				content: e.target.value,
				isCompleted: false,
			};
			addTodoList1([...list1, todo]);
			updateText1('');
		}
	};
	handleText2 = e => {
		if (e.charCode === 13) {
			const { list2, addTodoList2, updateText2 } = this.props;
			const todo = {
				content: e.target.value,
				isCompleted: false,
			};
			addTodoList2([...list2, todo]);
			updateText2('');
		}
	};
	render() {
		return (
			<div className='content'>
				list 1:
				<Input
					onChange={this.onChange1}
					value={this.props.input}
					onKeyPress={this.handleText1}
				/>
				list 2:
				<Input
					onChange={this.onChange2}
					value={this.props.input}
					onKeyPress={this.handleText2}
				/>
				<div className='show__list' style={{ border: '1px solid red' }}>
					{this.props.list1.length ? (
						<Lists
							lists={this.props.list1}
							onChange={this.handleComplete}
							number={1}
						/>
					) : null}
				</div>
				<div
					className='show__list'
					style={{ border: '1px solid green' }}>
					{this.props.list2.length ? (
						<Lists
							lists={this.props.list2}
							onChange={this.handleComplete}
							number={2}
						/>
					) : null}
				</div>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		list1: selectTodosList1(state),
		list2: selectTodosList2(state),
		text1: selectInputText1(state),
		text2: selectInputText2(state),
	};
};
const mapDispatchToProps = dispatch => {
	return {
		addTodoList1: todos => dispatch(addTodoList1(todos)),
		addTodoList2: todos => dispatch(addTodoList2(todos)),
		updateText1: text => dispatch(updateText1(text)),
		updateText2: text => dispatch(updateText2(text)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
