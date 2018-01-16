import React, { Component } from 'react';

class BugEdit extends Component{
	constructor(){
		super();
		this.onAddNewClick = this.onAddNewClick.bind(this);
	}
	onAddNewClick(){
		let bugName = this.refs.txtBugName.value;
		this.props.addNew(bugName);
	}
	render(){
		return(
			<section className="edit">
				<label htmlFor="">Bug Name :</label>
				<input type="text" ref="txtBugName" />
				<input type="button" value="Add New" onClick={this.onAddNewClick} />
			</section>
		)
	}
}

export default BugEdit;