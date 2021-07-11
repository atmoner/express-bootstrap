const express = require('express')
const bodyParser = require("body-parser")
var path = require('path')
const fs = require('fs')
var getJSON = require('get-json')
const app = express()

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 


// Routing
app.get('/', function (req, res) {	
	res.sendFile(path.join(__dirname+'/index.html'));
})

app.get('/exemple/:txHash', function (req, res) {	
	res.setHeader('Content-Type', 'application/json');
	var txHash = req.params.txHash;
	//  http://seed2.bitcanna.io:1317/
	getJSON('http', function(error, response){
		res.send(response)
	})
})

app.listen(5000, function () {
	console.log('***********************************************')
	console.log('* Welcome on your app')	
	console.log('* App listening on port ' + 5000)
	console.log('**********************************************')
})
