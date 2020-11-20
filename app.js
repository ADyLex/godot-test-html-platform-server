var express = require('express');
var app = express();
const port = 9000

app.use(function(req, res, next) {
	res.set("Access-Control-Allow-Methods","POST, GET, DELETE, PUT");
	res.set('Access-Control-Allow-Origin', '*');
	res.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

var fs = require("fs");

// Make files in ./public accessible
app.use(express.static(__dirname + '/public'));

// start server on the specified port
app.listen(port, '0.0.0.0', function() {  ///  process.env.PORT
	console.log("server started");
	console.log(`ADyLex listening at http://localhost:${port}`);
});

//open npm***
const open = require('open');
 
(async () => {
    // Opens the image in the default image viewer and waits for the opened app to quit.
    //await open(port, {wait: true});
    //console.log('The image viewer app quit');
 
    // Opens the URL in the default browser.
    await open(`http://localhost:${port}`);
 
    // Opens the URL in a specified browser.
    //await open(`http://localhost:${port}`, {app: 'firefox'});
 
    // Specify app arguments.
    //await open(`http://localhost:${port}`, {app: ['google chrome', '--incognito']});
})();


app.get('/',function (req, res) {
	fs.readFile( "public/index.html", 'utf8', function (err, data) {
		res.end( data );
	});
});
