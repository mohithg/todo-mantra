import React from 'react';

import Button from 'material-ui/lib/raised-button';

/**
 * Renders the Add button for the TODO application
 */
const AddBtn = React.createClass({
  render: function () {
    return (
        <div className="submitbtn">
            <Button
            label="Add" primary={true} fullWidth={false}
            labelStyle={{fontWeight: 'bold', fontSize: '20px'}}
            onMouseUp={this.props.onclickhandler}
            /><br/>
            <br/>
          </div>
    );
  }
});

export default AddBtn;
