const express = require('express');
const postController = require('../controllers/post.controller');
const { validateToken } = require('../middlewares/validateToken');
const { validateUpdateBlogPost } = require('../middlewares/validateUpdatePost');
const { validateDeletePost } = require('../middlewares/validateDeletePost');

const app = express.Router();
app.get('/post', validateToken, postController.getPosts);
app.get('/post/:id', validateToken, postController.getPostById);
app.post('/post', validateToken, postController.createPost);
app.put(
'/post/:id', 
validateToken,
validateDeletePost,
validateUpdateBlogPost,
postController.updatePost,
);
app.delete(
'/post/:id', 
validateToken, 
validateDeletePost,
postController.deletePost,
);

module.exports = app;