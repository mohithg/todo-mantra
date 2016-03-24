import React from 'react';

import TextField from 'material-ui/lib/text-field';

const ToDoTextComponent = React.createClass({
  keycheck: function (e) {
    if (e.keyCode === 13) {
      this.props.onenter();
    }
  },
  render: function () {
    return (
        <div className="todoname">
            <TextField name="todotext"
              fullWidth={true}
              floatingLabelText="To-Do"
              onKeyDown={this.keycheck}
            /><br/>
          </div>
    );
  }
});

export default ToDoTextComponent;
