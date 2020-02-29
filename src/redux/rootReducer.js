import { combineReducers } from 'redux';
import InputReducer from './input/input.reducer';
import TodoReducer from './todoList/todo.reducer';

const rootReducer = combineReducers({
	todos: TodoReducer,
	input: InputReducer,
});

export default rootReducer;
