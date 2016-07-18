var React = require('react');

var Hole = React.createClass({

  render: function() {
    return (
      <div className={this.props.classProps} onClick={this.props.handler} />
    );
  }
});

module.exports = Hole;
