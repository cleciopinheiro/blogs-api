const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const loginUser = async (email, password) => {
  if (!email || !password) {
    return { message: 'Some required fields are missing' };
  }

  const user = await User.findOne({ 
    where: { email, password },
    attributes: { exclude: ['password'] },
  });

  if (!user) return { message: 'Invalid fields' };

  const token = generateToken(email);

  return token;
};

module.exports = {
  loginUser,
};