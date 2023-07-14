const express = require('express');
const categoryController = require('../controllers/category.controller');
const { validateToken } = require('../middlewares/validateToken');

const app = express.Router();
app.post('/categories', validateToken, categoryController.createCategory);

module.exports = app;