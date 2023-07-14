const express = require('express');
const userController = require('../controllers/user.controller');
const { validateUser } = require('../middlewares/validateUser');

const app = express.Router();

app.post('/user', validateUser, userController.createUser);

module.exports = app;