var React = require('react');
var { HashRouter,  Route,  Link} = require('react-router-dom');
var Navigation = require('Navigation');
var Timer = require('Timer');
var Countdown = require('Countdown');




// var Main = React.createClass({
//   render: function() {
//     return(
//       <div>
//           <HashRouter>
//             <div>
//               <Nav/>
//               <h2> Main component </h2>
//               <Route exact path="/" component={Weather}/>
//               <Route path='/about' component={About}/>
//               <Route path='/examples' component={Examples}/>
//             </div>
//           </HashRouter>
//       </div>
//     );
//   }
// });

var Main = (props) => {
  return(
    <div>
        <HashRouter>
          <div>
            <Navigation/>
            <div className="row">
              <div className="columns medium-6 large-4 small-centered">
                <Route exact path="/" component={Timer}/>
                <Route path='/countdown' component={Countdown}/>
              </div>
            </div>

          </div>
        </HashRouter>
    </div>
  )
};


module.exports = Main;
