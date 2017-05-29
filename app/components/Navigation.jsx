var React = require('react');
var { NavLink} = require('react-router-dom');

// var Nav = React.createClass({
//   render: function() {
//     return(
//       <div>
//         <NavLink to="/" exact={true} activeClassName="active" activeStyle = {{fontWeight : 'bold'}} style={{fontWeight : 'normal'}}>Get the Weather</NavLink>
//         <NavLink to="/about" activeClassName="active" activeStyle = {{fontWeight : 'bold'}} style={{fontWeight : 'normal'}}>About</NavLink>
//         <NavLink to="/examples" activeClassName="active" activeStyle = {{fontWeight : 'bold'}} style={{fontWeight : 'normal'}}>Examples</NavLink>
//       </div>
//     );
//   }
// });

// var Nav = (props) => {
//   return(
//
//     <div className="top-bar">
//       <div className="top-bar-left">
//         <ul className="menu">
//           <li className="menu-text">
//             React Weather App
//           </li>
//           <li>
//             <NavLink to="/" exact={true} activeClassName="active" activeStyle = {{fontWeight : 'bold'}} style={{fontWeight : 'normal'}}>Get the Weather</NavLink>
//           </li>
//           <li>
//             <NavLink to="/about" activeClassName="active" activeStyle = {{fontWeight : 'bold'}} style={{fontWeight : 'normal'}}>About</NavLink>
//           </li>
//           <li>
//             <NavLink to="/examples" activeClassName="active" activeStyle = {{fontWeight : 'bold'}} style={{fontWeight : 'normal'}}>Examples</NavLink>
//           </li>
//         </ul>
//       </div>
//       <div className="top-bar-right">
//         <form onSubmit={this.onSearch}>
//         </form>
//
//         <ul className="menu">
//           <li><input type="search" placeholder="Search"/></li>
//           <li><button type="button" className="button">Search</button></li>
//         </ul>
//       </div>
//     </div>
//
//
//   );
// };


var Navigation = React.createClass({


  render: function() {
    return(

      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Timer App
            </li>
            <li>
              <NavLink to="/" exact={true} activeClassName="active" activeStyle = {{fontWeight : 'bold'}} style={{fontWeight : 'normal'}}>Timer</NavLink>
            </li>
            <li>
              <NavLink to="/countdown" activeClassName="active" activeStyle = {{fontWeight : 'bold'}} style={{fontWeight : 'normal'}}>Countdown</NavLink>
            </li>

          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Created by VB</li>
          </ul>
        </div>
      </div>


    );
  }
});

module.exports = Navigation;
