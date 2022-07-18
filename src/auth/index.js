const { employeeRepository } = require('../repositories');
const blacklistedDb = require('../black-listed-tokens');

const LoginService = require('./LoginService');
const loginService = LoginService({ employeeRepository });

const LogoutService = require('./LogoutService');
const logoutService = LogoutService({ blacklistedDb });

module.exports = {
  loginService,
  logoutService,
};
