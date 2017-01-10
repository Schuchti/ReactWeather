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
    <div>
      <h3>About</h3>
      <p>Welcome to the About page!</p>
    </div>
  );
};

module.exports = About;
