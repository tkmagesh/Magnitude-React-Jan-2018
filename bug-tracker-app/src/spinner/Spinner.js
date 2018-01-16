import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import spinnerActionsCreators from './actions/spinnerActions';

class Spinner extends Component{
	constructor(){
		super();

		this.onIncrementClick = this.onIncrementClick.bind(this);
		this.onDecrementClick = this.onDecrementClick.bind(this);
	}
	onIncrementClick(){
		let { increment } = this.props,
			deltaValue = this.refs.txtDelta.valueAsNumber;
		increment(deltaValue);
	}
	onDecrementClick(){
		let { decrement } = this.props,
			deltaValue = this.refs.txtDelta.valueAsNumber;
		decrement(deltaValue);
	}
	render(){
		let { value, increment, decrement } = this.props;
		return(
			<div>
				<input type="number" ref="txtDelta" />
				<br/>
				<input type="button" value="Decrement" onClick={this.onDecrementClick}/>
				<span> [ {value} ] </span>
				<input type="button" value="Increment" onClick={this.onIncrementClick}/>
			</div>
		)
	}
}

export default connect(
	({spinnerData}) => ({value : spinnerData}),
	(dispatch) => bindActionCreators(spinnerActionsCreators, dispatch)
)(Spinner);