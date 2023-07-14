const loginService = require('../services/login.service');

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
  
    const user = await loginService.loginUser(email, password);
  
    if (user.message) return res.status(400).json({ message: user.message });
  
    return res.status(200).json({ token: user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  loginUser,
};