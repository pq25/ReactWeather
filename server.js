var express = require("express");

//Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next) {
//  if (req.protocol                     === 'https') { // DOES NOT (reliably ??) WORK
    if (req.headers['x-forwarded-proto'] === 'https') { // WORKED
      console.log("WR__ 00 HTTP *S* Inside IF : req.protocol : "  + req.protocol);
      console.log("WR__ 01 HTTP *S* Inside IF : req.headers['x-forwarded-proto']"  + req.headers['x-forwarded-proto']);
      res.redirect('http://' + req.hostname + req.url);
    } else {
      next();
   }
});

app.use(express.static('public'));

app.listen(PORT, function(){
    console.log("Express server is up on port " + PORT);
});
