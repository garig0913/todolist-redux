const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todoController')

router.post('/postTodo', todoController.postTodo)


module.exports = router;