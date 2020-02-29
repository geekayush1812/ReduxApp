import { todoActionTypes } from './todo.types';
export const addTodoList1 = todos => {
	return {
		type: todoActionTypes.ADD_TODO_LIST1,
		payload: todos,
	};
};
export const addTodoList2 = todos => {
	return {
		type: todoActionTypes.ADD_TODO_LIST2,
		payload: todos,
	};
};
