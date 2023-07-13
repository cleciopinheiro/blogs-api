const express = require('express');
const loginController = require('../controllers/login.controller');

const app = express.Router();

app.post('/login', loginController.loginUser);

module.exports = app;