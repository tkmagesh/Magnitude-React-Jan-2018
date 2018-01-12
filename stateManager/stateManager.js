var SM = (function(){
	var _reducer,
		_currentState,
		_listeners = [],
		_init_action = {
			type : '@@INIT_ACTION'
		};

	function getState(){
		return _currentState;
	}

	function subscribe(listenerFn){
		if (typeof listenerFn === 'function')
			_listeners.push(listenerFn);
	}

	function triggerStateChange(){
		_listeners.forEach(listenerFn => {
			if (typeof listenerFn === 'function')
				listenerFn();
		});
	}

	function dispatch(action){
		var newState = _reducer(_currentState, action);
		if (newState === _currentState) return;
		_currentState = newState;
		triggerStateChange();
	}

	function createStore(reducer){
		_reducer = reducer;
		_currentState = _reducer(_currentState, _init_action);
	}
	return {
		createStore : createStore
	};
})();