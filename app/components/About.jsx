// Stateless functional component

var React = require('react');

// old:
// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About component</h3>
//     );
//   }
// });

// new:
var About = (props) => {
  return (
    <h3>About component</h3>
  );
};

module.exports = About;
