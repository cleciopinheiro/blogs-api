const { BlogPost } = require('../models');

const validateDeletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const post = await BlogPost.findByPk(Number(id));
    
    if (!post) return res.status(404).json({ message: 'Post does not exist' });
    
    if (post.userId !== userId) return res.status(401).json({ message: 'Unauthorized user' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  return next();
};

module.exports = {
  validateDeletePost,
};