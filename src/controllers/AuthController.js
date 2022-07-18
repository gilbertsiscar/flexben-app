const { loginService, logoutService } = require('../auth');
const jwt = require('jsonwebtoken');
const MakeReponse = require('../MakeResponse');

exports.login = async (req, res, next) => {
  try {
    const token = await loginService(req.body);
    const status = 200;
    res.status(status).json(MakeReponse(status, { token }));
  } catch (error) {
    next(error);
  }
};

exports.logout = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  try {
    const status = 200;
    res.status(status).json(MakeReponse(status, { token }));
  } catch (error) {
    next(error);
  }
};
