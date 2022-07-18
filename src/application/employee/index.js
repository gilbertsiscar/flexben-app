const { employeeRepository } = require('../../repositories');

const FindByEmail = require('./FindByEmail');
const findByEmail = FindByEmail({ employeeRepository });

module.exports = { findByEmail };
