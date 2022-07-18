const {
  categoryRepository,
  cutoffRepository,
  reimbursementRepository,
  reimbursementItemRepository,
  employeeRepository,
} = require('../../repositories');

const ViewDetailsReimbursement = require('./ViewDetailsReimbursement');
const viewDetailsReimbursement = ViewDetailsReimbursement({
  reimbursementRepository,
  reimbursementItemRepository,
});

const FileReimbursement = require('./FileReimbursement');
const fileReimbursement = FileReimbursement({
  cutoffRepository,
  reimbursementRepository,
});

const PrintReimbursement = require('./PrintReimbursement');
const printReimbursement = PrintReimbursement({
  categoryRepository,
  reimbursementItemRepository,
  reimbursementRepository,
});

const ApprovalReimbursement = require('./ApprovalReimbursement');
const approvalReimbursement = ApprovalReimbursement({
  reimbursementRepository,
});

const SubmitReimbursement = require('./SubmitReimbursement');
const submitReimbursement = SubmitReimbursement({
  cutoffRepository,
  reimbursementRepository,
  reimbursementItemRepository,
});

const SearchByEmployee = require('./SearchByEmployee');
const searchByEmployee = SearchByEmployee({
  employeeRepository,
  reimbursementRepository,
  reimbursementItemRepository,
});

module.exports = {
  viewDetailsReimbursement,
  fileReimbursement,
  printReimbursement,
  approvalReimbursement,
  submitReimbursement,
  searchByEmployee,
};
