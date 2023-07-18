const userServices = require('../services/user.service');

const createUser = async (req, res, next) => {
  try {
    const { body } = req;

    const token = await userServices.createUser({ ...body });

    if (token.message) return res.status(409).json({ message: token.message });

    return res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await userServices.getUsers();
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await userServices.getUserById(id);

    if (!user) return res.status(404).json({ message: 'User does not exist' });
    
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.user;

    await userServices.deleteUser(id);

    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  deleteUser,
};