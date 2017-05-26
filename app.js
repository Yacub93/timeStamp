// Required imports for NodeJS
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var moment = require('moment'); // date formatting

// Create an instance of express for timeStamp app and instantiate bodyParser and cors

var app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());

// GET request - GET call to return to JSON that formats natural and UNIX date
app.get('/dateValues/:value', function(req, res, next){
	// console.log('URL works');
var dateVal = req.params.value; //get date value from parameter in URL

// Date formatting options - natural date
var dateFormattingOptions = {

	weekday: 'long',
	day:     'numeric',
	month:   'long',
	year:    'numeric'
	

}; 

	    // Check value is a number
		if (isNaN(dateVal)) {

			var naturalDate = new Date(dateVal);
			// From date to moment 
			// moment.locale('en-GB'); 
			// var naturalDate = moment(new Date(dateVal)); 
			// naturalDate.format("l");
			naturalDate = naturalDate.toLocaleDateString('en-GB', dateFormattingOptions);
			// naturalDate.toUTCString();
			

			var unixDate = new Date(dateVal).getTime() / 1000;
		}
		else {
			var unixDate = dateVal;
			var naturalDate = new Date(dateVal * 1000);
			naturalDate = naturalDate.toLocaleDateString("en-GB", dateFormattingOptions);
		}
			res.json({unix: unixDate, natural: naturalDate}); // return JSON response 

});

// listen on port 3000
// nodemon installed.
app.listen(3000, function(){
console.log('Listening on port 3000');
});