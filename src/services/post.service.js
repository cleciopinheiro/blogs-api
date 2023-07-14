const { BlogPost, Category, PostCategory } = require('../models');

const createPost = async (data) => {
  const categoriesData = await Category.findAll();
  const categories = categoriesData.map((item) => item.id);

  if (!data.title || !data.content || !data.categoryIds) {
    return { message: 'Some required fields are missing' };
  }

  const missingCategories = data.categoryIds.filter((item) => !categories.includes(item));
  if (missingCategories.length > 0) {
    return { message: 'one or more "categoryIds" not found' };
  }

  const result = await BlogPost.create({ title: data.title, content: data.content, userId: 1 });

  const postCategoryPromises = data.categoryIds.map((item) =>
    PostCategory.create({ postId: result.id, categoryId: item }));

  await Promise.all(postCategoryPromises);

  return result;
};

module.exports = {
  createPost,
};
