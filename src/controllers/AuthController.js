const { loginService, logoutService } = require('../auth');
const jwt = require('jsonwebtoken');
const MakeReponse = require('../MakeResponse');
const { getDetails } = require('../application/employee');

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
    const logout = await logoutService(token);
    res.status(status).json(MakeReponse(status, logout));
  } catch (error) {
    next(error);
  }
};

exports.loginDetails = async (req, res, next) => {
  try {
    const id = req.id;
    const status = 200;
    const details = await getDetails(id);
    res.status(status).json(MakeReponse(status, { details }));
  } catch (error) {
    next(error);
  }
};
