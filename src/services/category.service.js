const { Category } = require('../models');

const createCategory = async (body) => {
  const { name } = body;

  if (!name) return { message: '"name" is required' };

  const category = await Category.create({ ...body });

  return category;
};

module.exports = {
  createCategory,
};