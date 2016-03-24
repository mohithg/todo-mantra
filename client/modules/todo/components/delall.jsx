import React from 'react';

import Button from 'material-ui/lib/raised-button';

const DelBtn = React.createClass ({
	render: function() {
		return (
				<div className="delbtn">
				    <Button
				      label="Delete All" secondary={true} fullWidth={false} labelStyle={{fontWeight:'bold', fontSize:'20px'}} onMouseUp={this.props.deleteall}
				    /><br/>
				    <br/>
			    </div>
		)	
	}
});

export default DelBtn;