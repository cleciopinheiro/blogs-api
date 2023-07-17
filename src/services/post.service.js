const { BlogPost, Category, PostCategory, User } = require('../models');

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

const getPosts = async () => {
  const result = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });

  return result;
};

const getPostById = async (id) => {
  const result = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });

  if (!result) return { message: 'Post does not exist' };

  return result;
};

const updatePost = async (id, data, userId) => {
const newData = { title: data.title, content: data.content };

  const post = await BlogPost.findByPk(id, { 
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  
  if (post.userId !== userId) return { message: 'Unauthorized user' };
  
  await post.update(newData);
  
  return post;
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePost,
};
