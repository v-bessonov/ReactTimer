var React = require('react');
var Clock = require('Clock');

var Countdown = React.createClass({
  render: function() {
    return(
          <div>
            <Clock totalSeconds={129} />
          </div>
    );
  }
});


// var Countdown = (props) => {
//   return(
//     <div>
//       <h1 className="text-center page-title"> Countdown </h1>
//
//     </div>
//
//   )
// };
module.exports = Countdown;
