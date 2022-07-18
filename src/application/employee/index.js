const { employeeRepository } = require('../../repositories');

const FindByEmail = require('./FindByEmail');
const findByEmail = FindByEmail({ employeeRepository });

const GetDetails = require('./GetDetails');
const getDetails = GetDetails({ employeeRepository });

module.exports = { findByEmail, getDetails };
