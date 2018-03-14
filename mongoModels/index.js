//Require all modules
var mongoose = require('mongoose'),
    _ = require('lodash'),
    todo = require('./todo');


module.exports =  () => {

    var mongoModels = {};

    mongoModels.todo =  () => {
        return mongoose.model('todo', todo);
    };

  return mongoModels;
};