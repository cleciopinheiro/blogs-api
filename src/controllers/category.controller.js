const categoryService = require('../services/category.service');

const createCategory = async (req, res) => {
  try {
    const { body } = req;

    const category = await categoryService.createCategory({ ...body });

    if (category.message) return res.status(400).json({ message: category.message });

    return res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await categoryService.getAllCategories();

    return res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
};