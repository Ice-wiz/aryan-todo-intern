
const express = require('express');
const router = express.Router();

const Todo = require('../models/Todo');
const { text } = require('body-parser');


router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos)
    } catch (error) {
        res.json({ message: error })
    }
});

router.post('/', async (req, res) => {

    const todo = new Todo({
        text: req.body.text
    })

    try {
        const newTodo = await todo.save();
        res.json(newTodo)
    } catch (error) {
        res.json({ message: error })
    }
});

router.delete('/:id', async (req, res) => {

    try {

        const removeTodo = await Todo.remove({ _id: req.params.id });
        res.json(removeTodo)
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports=router;