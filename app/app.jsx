var React = require('react');
var ReactDOM  = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require("Main");
var Weather = require("Weather");
var About = require("About");
var Examples = require("Examples");

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();
// mozna to co powyzej zapisac tak
// var Route = require('react-router').Route itd

// var obj = {
//   name: 'Andrew'
// };
// var {name} = obj;

// to sie nazywa object distruscuring

//app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/> // jak mam index route to nie robie Linka tylko IndexLinka
    </Route>
  </Router>,
  document.getElementById("app")
);
