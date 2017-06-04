var React = require('react');


var Controls = React.createClass({
  propsTypes : {
    countdownStatus : React.PropTypes.string.isRequired
  },
  // getInitialState: function(){
  //   return {
  //     count:  0,
  //     countdownStatus: 'stopped'
  //   };
  // },
  // componentDidUpdate: function(prevProps, prevState){
  //   if(this.state.countdownStatus != prevState.countdownStatus){
  //     switch (this.state.countdownStatus) {
  //       case 'started':
  //         this.startTimer();
  //         break;
  //       //default:
  //
  //     }
  //   }
  // },
  // startTimer : function(){
  //     this.timer = setInterval(() =>{
  //     var newCount = this.state.count - 1;
  //     this.setState({
  //       count: newCount >= 0 ? newCount : 0
  //     });
  //   },1000);
  // },
  // handleSetCountdown: function(seconds){
  //   this.setState({
  //     count:seconds,
  //     countdownStatus: 'started'
  //   });
  // },

  render: function() {
    var {countdownStatus} = this.props;
    var renderStartStopButton = () => {
      if(countdownStatus === 'started'){
        return <button className="button secondary">Pause</button>
      } else if(countdownStatus === 'paused'){
        return <button className="button primary">Start</button>
      }
    };
    return(
          <div className="controls">
            {renderStartStopButton()}
            <button className="button alert hollow">Clear</button>
          </div>
    );
  }
});



module.exports = Controls;
