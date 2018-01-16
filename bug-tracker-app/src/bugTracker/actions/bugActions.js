import axios from 'axios';

let baseUrl = 'http://localhost:3030/bugs';
var bugActionCreators = {
	getAll : function(){
		return function(dispatch){
			console.log(arguments);
			axios
				.get(baseUrl)
				.then(response => response.data)
				.then(bugs => dispatch({ type : 'LOAD', payload : bugs}));
		}
	},
	addNew : function(bugName){
		//call the server and ask it to create a new bug
		return function(dispatch){
			let newBugData = { 
				id : 0,
				name : bugName,
				isClosed : false,
				createdAt : new Date()
			};
			axios
				.post(baseUrl, newBugData)
				.then(response => response.data)
				.then(newBug => dispatch({ type : 'ADD_NEW', payload : newBug}));
		};
	},
	toggle : function(bugToToggle){
		
		return function(dispatch){
			let toggledBug = {...bugToToggle, isClosed : !bugToToggle.isClosed};
			
			axios
				.put(`${baseUrl}/${toggledBug.id}`, toggledBug)
				.then(response => response.data)
				.then(newBug => dispatch({ 
									type : 'TOGGLE', 
									payload : {
										bugToToggle : bugToToggle,
										toggledBug : toggledBug
									}
								})
				);
		};
		
	},
	removeClosed : function(){
		return function(dispatch, getState){
			let closedBugs = getState().bugsData.filter(bug => bug.isClosed);
			for(let closedBug of closedBugs){
				axios
					.delete(`${baseUrl}/${closedBug.id}`)
					.then(response => response.data)
					.then(() => dispatch({ type : 'REMOVE', payload : closedBug}))
			}
		}
	}
}
export default bugActionCreators;