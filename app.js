// Required imports for NodeJS
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

// Create an instance of express for timeStamp app and instantiate bodyParser and cors

var app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());

// GET request - GET call to return to JSON that formats natural and UNIX date
app.get('/dateValues/:value', function(req, res, next){
	// console.log('URL works');
var dateVal = req.params.value; //get date value parameter from URL

	res.json({unix : dateVal}); // return JSON response 



});

// listen on port 3000
// nodemon installed.
app.listen(3000, function(){
console.log('Listening on port 3000');
});