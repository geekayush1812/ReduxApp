import { todoActionTypes } from './todo.types';
const initialState = {
	list1: [],
	list2: [],
};

const TodoReducer = (state = initialState, action) => {
	switch (action.type) {
		case todoActionTypes.ADD_TODO_LIST1:
			return {
				...state,
				list1: action.payload,
			};
		case todoActionTypes.ADD_TODO_LIST2:
			return {
				...state,
				list2: action.payload,
			};
		default:
			return state;
	}
};
export default TodoReducer;
