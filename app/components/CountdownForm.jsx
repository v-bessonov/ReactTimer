var React = require('react');

var CountdownForm = React.createClass({
  // getDefaultProps: function(){
  //   totalSeconds: 0
  // },
  // propTypes: {
  //   totalSeconds: React.PropTypes.number
  // },
  onSubmit: function(e){
    e.preventDefault();

    var strSeconds = this.refs.seconds.value;
    console.log('input count', $('input').length);

    if(strSeconds.length > 0 &&  strSeconds.match(/^[0-9]*$/)){
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  },
  render: function() {
    return(
          <div>
            <form ref="form" onSubmit={this.onSubmit} className="coundown-form">
              <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
              <button  className="button expanded">Start</button>
            </form>
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
module.exports = CountdownForm;
