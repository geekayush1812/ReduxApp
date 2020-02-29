import { inputActionTypes } from './input.types';

export const updateText1 = text => {
	return {
		type: inputActionTypes.UPDATE_TEXT1,
		payload: text,
	};
};
export const updateText2 = text => {
	return {
		type: inputActionTypes.UPDATE_TEXT2,
		payload: text,
	};
};
