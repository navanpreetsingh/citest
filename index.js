'use strict'
const express = require('express')
const app = express()

let port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('You\'ve been served');
}); 

app.listen(port, () => {
	console.log('App running at ', port);
});