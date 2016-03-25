import React from 'react';

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import Checkbox from 'material-ui/lib/checkbox';

const TodoCard = React.createClass({
/**
 * Checks if checkbox is checked
 * @params{Object} e - the checkbox element
 */
  onclosehandler: function (e) {
    this.props.closecard(this.props.text,e.target.checked);
  },
/**
 * Renders the Card for todo application
 */
  render: function () {
    return (
      <div className="cardtodo">
        <Card>
          <CardActions>
            <Checkbox label={this.props.text} labelPosition={'right'}
            onCheck={this.onclosehandler}/>
          </CardActions>
        </Card>
        <br/>
      </div>
    );
  }
});

export default TodoCard;
