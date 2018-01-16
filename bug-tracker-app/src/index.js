import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import BugTracker from './bugTracker/BugTracker';
import Spinner from './spinner/Spinner';
import appStore from './store';

ReactDOM.render(
	<Provider store={appStore}>
		<div>
			<h1> My App</h1>
			<hr/>
			<BugTracker />
			<hr />
			<Spinner />
		</div>
	</Provider>,
	document.getElementById('root')
);




