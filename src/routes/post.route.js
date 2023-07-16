const express = require('express');
const postController = require('../controllers/post.controller');
const { validateToken } = require('../middlewares/validateToken');

const app = express.Router();
app.get('/post', validateToken, postController.getPosts);
app.post('/post', validateToken, postController.createPost);

module.exports = app;