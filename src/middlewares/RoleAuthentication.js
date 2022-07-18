const ApiError = require('../error-handler/ApiError');

module.exports = function roleAuthentication(role = []) {
  return async function (req, _res, next) {
    if (role.includes(req.role)) {
      next();
    } else {
      next(new ApiError('Unauthorized', 401));
    }
  };
};
