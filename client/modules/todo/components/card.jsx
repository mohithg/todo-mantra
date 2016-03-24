import React from 'react';

import Card from 'material-ui/lib/card/card';
import CardText from 'material-ui/lib/card/card-text';
import CardActions from 'material-ui/lib/card/card-actions';
import FlatButton from 'material-ui/lib/flat-button';
import Checkbox from 'material-ui/lib/checkbox';

const TodoCard = React.createClass ({
	onclosehandler: function (e) {
		this.props.closecard(this.props.text,e.target.checked);
	},
	render: function() {
		return (
			<div>
				<Card>
					<CardActions>
						<Checkbox label={this.props.text} labelPosition={'right'} onCheck={this.onclosehandler}/>
					</CardActions>
				</Card>
				<br/>
			</div>
		)	
	}
});

export default TodoCard;