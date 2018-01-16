function bugsReducer(currentState = [], action){
	if (action.type === 'LOAD'){
		return action.payload;
	}
	if (action.type === 'ADD_NEW'){
		let newState = [...currentState, action.payload];
		return newState;
	}
	if (action.type === 'TOGGLE'){
		return currentState.map(bug => bug === action.payload.bugToToggle ? action.payload.toggledBug : bug);
	}
	if (action.type === 'REMOVE'){
		return currentState.filter(bug => bug.id !== action.payload.id);
	}
	return currentState;
}
export default bugsReducer;