const { User, Category, BlogPost } = require('../models');

const validateAuthPost = async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });

  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });

  if (!user) return res.status(401).json({ message: 'Unauthorized user' });

  if (user.id !== post.userId) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  next();
};

module.exports = {
  validateAuthPost,
};
