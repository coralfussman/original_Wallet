"use strict";
var React = require('react');
var Hole = require('./hole');

var Garden = React.createClass({
  getInitialState: function() {
    return this.makeRandomId();
  },

  makeRandomId: function() {
    var randomInt = { active: Math.floor(Math.random() * 100) };

    return randomInt;
  },
  
  handleWhack: function(event) {
    var keyMarker = event.dispatchMarker.slice(6);
    
    if (+keyMarker === this.state.active) {
      this.setState(this.makeRandomId());
    }
  },

  render: function() {

    // creates 100 holes
    let theHole = '';
    var holes = [];
    for (var i = 0; i < 100; i++) {
      var moleClass = 'hole'; 
      if(i === this.state.active) {
        // console.log('mole should be at i = ', i);
        moleClass += ' active';     
      }
      theHole = <Hole index={i} activeId={this.state.active} handler={this.handleWhack} key={i} classProps={moleClass}/> ;
      //console.log('the hole is ', theHole);
      holes.push(theHole); //add +key id & is it possible to assign key and index 
    }
    return (
      <div className="garden"> {holes} </div>
    );
  }
});

module.exports = Garden;
