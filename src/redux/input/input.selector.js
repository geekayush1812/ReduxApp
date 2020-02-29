import { createSelector } from 'reselect';

const selectInput = state => state.input;

export const selectInputText1 = createSelector(
	[selectInput],
	input => input.text1,
);
export const selectInputText2 = createSelector(
	[selectInput],
	input => input.text2,
);
