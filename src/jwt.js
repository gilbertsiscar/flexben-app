const jwt = require('jsonwebtoken');
const ApiError = require('./error-handler/ApiError');

exports.generateToken = (payload = {}, options = {}) => {
  return jwt.sign(
    {
      ...payload,
      iat: Math.floor(Date.now() / 1000),
    },
    'secret',
    options
  );
};

exports.verifyToken = (token) => {
  if (token === null || !token) {
    throw new ApiError('Malfomed token', 403);
  }

  return jwt.verify(token, 'secret');
};
