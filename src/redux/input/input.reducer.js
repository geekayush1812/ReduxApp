const initialState = {
	text1: '',
	text2: '',
};

const InputReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_TEXT1':
			return {
				...state,
				text1: action.payload,
			};
		case 'UPDATE_TEXT2':
			return {
				...state,
				text2: action.payload,
			};
		default:
			return state;
	}
};
export default InputReducer;
