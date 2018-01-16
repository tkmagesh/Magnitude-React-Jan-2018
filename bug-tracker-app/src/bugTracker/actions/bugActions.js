var bugActionCreators = {
	addNew : function(bugName){
		let newBug = { 
			name : bugName,
			isClosed : false
		};
		return { type : 'ADD_NEW', payload : newBug};
	},
	toggle : function(bugToToggle){
		let toggledBug = {...bugToToggle, isClosed : !bugToToggle.isClosed};
		return { 
			type : 'TOGGLE', 
			payload : {
				bugToToggle : bugToToggle,
				toggledBug : toggledBug
			}
		};
	},
	removeClosed : function(bugsToRemove){
		return { type : 'REMOVE', payload : bugsToRemove}
	}
}
export default bugActionCreators;