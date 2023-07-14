const express = require('express');
const userController = require('../controllers/user.controller');
const { validateUser } = require('../middlewares/validateUser');
const { validateToken } = require('../middlewares/validateToken');

const app = express.Router();

app.get('/user', validateToken, userController.getUsers);
app.post('/user', validateUser, userController.createUser);

module.exports = app;