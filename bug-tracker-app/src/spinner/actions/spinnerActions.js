var spinnerActionsCreators = {
	increment : function(deltaValue){
		return { type : 'INCREMENT', payload : deltaValue };
	},
	decrement : function(deltaValue){
		return { type : 'DECREMENT', payload : deltaValue };
	}
}
export default spinnerActionsCreators;