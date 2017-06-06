var React = require('react');


var Controls = React.createClass({
  propsTypes : {
    countdownStatus : React.PropTypes.string.isRequired,
    onStatusChange : React.PropTypes.func.isRequired
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
  // componentWillReceiveProps : function(newProps){
  //   console.log('componentWillRecieveProps', newProps.countdownStatus);
  // },
  onStatusChange: function(newStatus){
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },

  render: function() {
    var {countdownStatus} = this.props;
    var renderStartStopButton = () => {
      if(countdownStatus === 'started'){
        return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
      } else {
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
      }
    };
    return(
          <div className="controls">
            {renderStartStopButton()}
            <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
          </div>
    );
  }
});



module.exports = Controls;
