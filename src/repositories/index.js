const db = require('../db');

const CutoffRepository = require('./CutoffRepository');
const cutoffRepository = CutoffRepository(db);

const EmployeeRepository = require('./EmployeeRepository');
const employeeRepository = EmployeeRepository(db);

const ReimbursementRepository = require('./ReimbursementRepository');
const reimbursementRepository = ReimbursementRepository(db);

const ReimbursementItemRepository = require('./ReimbursementItemRepository');
const reimbursementItemRepository = ReimbursementItemRepository(db);

module.exports = {
  cutoffRepository,
  employeeRepository,
  reimbursementRepository,
  reimbursementItemRepository,
};
