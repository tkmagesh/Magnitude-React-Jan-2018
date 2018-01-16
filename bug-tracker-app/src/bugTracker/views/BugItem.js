import React, { Component } from 'react';

class BugItem extends Component{
	render(){
		let { bug, toggle } = this.props;
		let bugNameItem = bug.isClosed ? 
			(<span className="bugname closed" onClick={() => toggle(bug)}>{bug.name}</span>)
			:
			(<span className="bugname" onClick={() => toggle(bug)}>{bug.name}</span>)
		return(
			<li >
				{bugNameItem}
				<div>[{bug.isClosed.toString()}]</div>
				<div className="datetime">[Created At]</div>
			</li>
		)
	}
}
export default BugItem;