const { verifyToken } = require('../utils/JWT');

const validateToken = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  try {
    const authBarear = authorization.includes('Bearer') 
    ? authorization.split(' ')[1] : authorization;

    const token = await verifyToken(authBarear);
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', token);
    req.user = token;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateToken,
};