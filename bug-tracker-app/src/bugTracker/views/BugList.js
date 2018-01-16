import React, { Component } from 'react';
import BugItem from './BugItem';

class BugList extends React.Component{
	onRemoveClosedClick(){
		let bugsToRemove = this.props.bugs.filter(bug => bug.isClosed);
		this.props.removeClosed(bugsToRemove);
	}
	render(){
		let {bugs, toggle} = this.props;
		let bugItems = bugs.map((bug, index) => (
			<BugItem bug={bug} key={index} toggle={toggle}/>
		));
		return(
			<section className="list">
				<ol>
					{bugItems}
				</ol>
				<input type="button" value="Remove Closed" onClick={this.onRemoveClosedClick.bind(this)}/>
			</section>
		)
	}
}
export default BugList;