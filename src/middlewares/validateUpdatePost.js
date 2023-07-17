const { Category } = require('../models');

const validateUpdatePost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const categoriesData = await Category.findAll();
  const categories = categoriesData.map((item) => item.id);

  const missingCategories = categoryIds.filter((item) => !categories.includes(item));

  if (missingCategories.length > 0) {
 return res.status(400).json({ message: 'one or more "categoryIds" not found' }); 
}

  next();
};

const validateUpdateBlogPost = async (req, res, next) => {
  const { title, content } = req.body;
  
    if (!title || !content) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
  
    next();
};

module.exports = {
  validateUpdatePost,
  validateUpdateBlogPost,
};