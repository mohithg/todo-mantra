import React from 'react';

import TextField from 'material-ui/lib/text-field';

const ToDoTextComponent = React.createClass({
/**
 * Checks if the enter is pressed
 * @params{Object} e - Input field element
 */
  keycheck: function (e) {
    if (e.keyCode === 13) {
      this.props.onenter();
    }
  },
/**
 * Renders the text field for todo application
 */
  render: function () {
    return (
        <div className="todoname">
            <TextField name="todotext" className="textfield"
              fullWidth={true}
              floatingLabelText="To-Do"
              onKeyDown={this.keycheck}
            /><br/>
          </div>
    );
  }
});

export default ToDoTextComponent;
