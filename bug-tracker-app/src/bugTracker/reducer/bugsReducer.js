function bugsReducer(currentState = [], action){
	if (action.type === 'ADD_NEW'){
		let newState = [...currentState, action.payload];
		return newState;
	}
	if (action.type === 'TOGGLE'){
		return currentState.map(bug => bug === action.payload.bugToToggle ? action.payload.toggledBug : bug);
	}
	if (action.type === 'REMOVE'){
		let newState = currentState;
		for(let bugToRemove of action.payload){
			newState = newState.filter(bug => bug !== bugToRemove);
		}
		return newState;
	}
	return currentState;
}
export default bugsReducer;