import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import spinnerReducer from '../spinner/reducer/spinnerReducer';
import bugsReducer from '../bugTracker/reducer/bugsReducer';

let rootReducer = combineReducers({
	spinnerData : spinnerReducer,
	bugsData : bugsReducer
});

let appStore = createStore(rootReducer, applyMiddleware(thunk));

export default appStore;