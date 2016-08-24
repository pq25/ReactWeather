var React = require('react');

// var About = React.createClass({
//   render: function(){
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });

// jeśli jedyną własnością mojego nowego komponentu jest
// render: mozemy zamiast tego uzyc tego co ponizej

var About = (props) => {
  return (
    <div>
      <h3>About</h3>
      <p>Welcome to About page</p>
    </div>
  );
};

module.exports = About;
