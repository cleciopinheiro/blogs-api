const loginService = require('../services/login.service');

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await loginService.loginUser(email, password);

  if (user.message) return res.status(400).json({ message: user.message });

  return res.status(200).json({ token: user });
};

module.exports = {
  loginUser,
};