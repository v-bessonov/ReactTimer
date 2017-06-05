var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', ()=>{
  it('should exists', ()=> {
    expect(Countdown).toExist();
  });

  // it('should call onSetCountdown if valid seconds entered', ()=> {
  //   var spy = expect.createSpy();
  //   var countdownForm = TestUtils.renderIntoDocument(<CountdownForm  onSetCountdown={spy}/>);
  //   var $el = $(ReactDOM.findDOMNode(countdownForm));
  //   countdownForm.refs.seconds.value = '109';
  //   TestUtils.Simulate.submit($el.find('form')[0]);
  //   expect(spy).toHaveBeenCalledWith(109);
  // });
  //
  // it('should not call onSetCountdown if invalid seconds entered', ()=> {
  //   var spy = expect.createSpy();
  //   var countdownForm = TestUtils.renderIntoDocument(<CountdownForm  onSetCountdown={spy}/>);
  //   var $el = $(ReactDOM.findDOMNode(countdownForm));
  //   countdownForm.refs.seconds.value = 'A';
  //   TestUtils.Simulate.submit($el.find('form')[0]);
  //   expect(spy).toNotHaveBeenCalled();
  // });

  describe('handleSetCountdown', ()=>{
    it('should set state to started and countdown', (done)=> {
      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(10);
      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');
      setTimeout(()=>{
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001);
    });

    it('should never set count less than zero', (done)=> {
      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(1);

      setTimeout(()=>{
        expect(countdown.state.count).toBe(0);
        done();
      }, 3001);
    });

    it('should pause countdown on paused status', (done)=> {
      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('paused');
      setTimeout(()=>{
        expect(countdown.state.count).toBe(3);
        expect(countdown.state.countdownStatus).toBe('paused');
        done();
      }, 1001);
    });

    it('should reset count on stopped', (done)=> {
      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('stopped');
      setTimeout(()=>{
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.countdownStatus).toBe('stopped');
        done();
      }, 1001);
    });

  });

});
