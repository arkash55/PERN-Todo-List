const router = require('express').Router();
const todoController = require('../controllers/todo_controller').TodoController;

router.get('/get', todoController.getAllTodo);
router.get('/get/:id', todoController.getTodo);
router.post('/create', todoController.createTodo);
router.put('/update/:id', todoController.updateNote);
router.delete('/delete/:id', todoController.deleteTodo);


//dummy data
router.post('/gen-dummy', todoController.generateDummyData);


module.exports = router;