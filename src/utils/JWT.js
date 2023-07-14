const jwt = require('jsonwebtoken');

const JWT_CONFIG = {
    algorithm: 'HS256',
};

const JWT_SECRET = process.env.JWT_SECRET || 'secretJWT';

const generateToken = (payload) => jwt.sign(payload, JWT_SECRET, JWT_CONFIG);

const verifyToken = (token) => jwt.verify(token, JWT_SECRET);

module.exports = {
    generateToken,
    verifyToken,
};