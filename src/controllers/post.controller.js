const postService = require('../services/post.service');

const createPost = async (req, res) => {
  try {
    const post = req.body;
    const result = await postService.createPost(post);
    console.log(result);
    if (result.message) return res.status(400).json({ message: result.message });
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getPosts = async (req, res) => {
  try {
    const result = await postService.getPosts();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await postService.getPostById(id);

    if (result.message) return res.status(404).json({ message: result.message });

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
};