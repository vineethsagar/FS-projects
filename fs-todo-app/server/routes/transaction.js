const express = require('express');
const router = express.Router();
const {allTodos,addTodo,deleteTodo} = require('../controllers/transaction')

router
    .route('/')
    .get(allTodos)
    .post(addTodo)

router
    .route('/:id')
    .delete(deleteTodo)

module.exports =router;