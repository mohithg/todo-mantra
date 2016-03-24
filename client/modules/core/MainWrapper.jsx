import React from 'react';

const Wrapper = React.createClass({
  render: function () {
    return (<div>
      <div className="some-container">
        {this.props.children}
      </div>
    </div>
  );
  }
});

export default Wrapper;
