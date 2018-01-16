import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import BugStats from './views/BugStats';
import BugEdit from './views/BugEdit';
import BugList from './views/BugList';
import bugActionCreators from './actions/bugActions';


class BugTracker extends React.Component{			
	render(){
		let { bugs, toggle, addNew, removeClosed } = this.props;
		return(
			<div>
				<BugStats bugs={bugs} />
				<BugEdit addNew={addNew} />
				<BugList bugs={bugs} toggle={toggle} removeClosed={removeClosed}/>
			</div>
		)
	}
}
export default connect(
	({bugsData}) => ({bugs : bugsData}),
	(dispatch) => bindActionCreators(bugActionCreators, dispatch)
)(BugTracker);