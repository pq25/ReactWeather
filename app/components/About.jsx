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
      <h1 className="text-center page-title">About</h1>
      <p>This is a small application built on React.
        I have build this for the Complete React Web App Developer
        course made by Andrew Mead</p>
      <p>
        Here are some of the tools used in production of this appliction:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was
            the JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used
            Open Weather Map to search for weather data by city name.
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
