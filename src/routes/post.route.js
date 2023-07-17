const express = require('express');
const postController = require('../controllers/post.controller');
const { validateToken } = require('../middlewares/validateToken');
const { validateUpdateBlogPost } = require('../middlewares/validateUpdatePost');

const app = express.Router();
app.get('/post', validateToken, postController.getPosts);
app.get('/post/:id', validateToken, postController.getPostById);
app.post('/post', validateToken, postController.createPost);
app.put(
'/post/:id', 
// validateAuthPost,
validateToken,
validateUpdateBlogPost,
postController.updatePost,
);

module.exports = app;