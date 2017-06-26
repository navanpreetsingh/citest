const express = require('express')
const app = express()

app.get('/', function(req, res){
	res.send('<h1> You\'ve been served');
});

app.listen(3000, function(){
	console.log("Now deployed");
})