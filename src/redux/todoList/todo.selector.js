import { createSelector } from 'reselect';

const selectTodos = state => state.todos;

export const selectTodosList1 = createSelector(
	[selectTodos],
	todos => todos.list1,
);
export const selectTodosList2 = createSelector(
	[selectTodos],
	todos => todos.list2,
);
