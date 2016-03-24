import React from 'react';

import TodoText from './todotextcomponent.jsx';
import AddBtn from './button.jsx';
import Card from './card.jsx';
import DelBtn from './delall.jsx';

const Todoapp = React.createClass({
	render: function () {
		return	(<div>
		  <div className="row center-md">
		    <div className="col-xs-4">
		        <div className="box">
		        <div className="todoform">
		       	<TodoText onenter = {this.props.create}/>
		        	<AddBtn onclickhandler={this.props.create}/>
		        	<DelBtn deleteall={this.props.delall}/>
		        </div>
		        <div className="status">
		        	{this.props.finishcount} of {this.props.allcount} tasks Completed
		        </div>
		        <br/>
		        {this.props.tododata.map(function(e,i) {
		        	return (<Card key={i} text={e} closecard={this.props.closecard}/>)
		        },this)}
		        </div>
		    </div>
		  </div>
		</div>
	)		
	}
});

export default Todoapp;