var mongoose = require('mongoose');


var user = new mongoose.Schema({
	message: String,

},{strict:false});


module.exports = user;