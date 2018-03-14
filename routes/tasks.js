var express = require('express');
var mongoModels = require('../mongoModels/index')();

var Todo = mongoModels.todo();

module.exports = () => {

 var result = {};

	result.home = (req, res, next) => {
	 	console.log("Inside Home");

	 	res.render('index', { title: 'Home' });
	}

 return result;

}