import { combineReducers, createStore } from 'redux';
import spinnerReducer from '../spinner/reducer/spinnerReducer';
import bugsReducer from '../bugTracker/reducer/bugsReducer';

let rootReducer = combineReducers({
	spinnerData : spinnerReducer,
	bugsData : bugsReducer
});

let appStore = createStore(rootReducer);

export default appStore;