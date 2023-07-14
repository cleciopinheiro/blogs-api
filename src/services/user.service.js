const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const createUser = async (body) => {
  const userEmail = await User.findOne({ where: { email: body.email } });
  if (userEmail) return { message: 'User already registered' };

  const user = await User.create({ ...body });

  const token = generateToken({ email: body.email, id: user.id });

  return token;
};

const getUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });

  return users;
};

module.exports = {
  createUser,
  getUsers,
};