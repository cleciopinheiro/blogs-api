const jwt = require('jsonwebtoken');

const JWT_CONFIG = {
    algorithm: 'HS256',
};

const JWT_SECRET = process.env.JWT_SECRET || 'secretJWT';

const generateToken = (payload) => 
    jwt.sign(payload, JWT_SECRET, JWT_CONFIG);

module.exports = {
    generateToken,
};