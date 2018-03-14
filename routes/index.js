var express = require('express');
var router = express.Router();

var tasksController = require('./tasks')();

//todo
router.get('/',tasksController.home);
//router.get('/tasks', tasksController.list);
/*router.post('/tasks', tasksController.markAllCompleted)
router.post('/tasks', tasksController.add);
router.post('/tasks/:task_id', tasksController.markCompleted);
router.delete('/tasks/:task_id', tasksController.del);
router.get('/tasks/completed', tasksController.completed);*/

//export router
module.exports = router;

