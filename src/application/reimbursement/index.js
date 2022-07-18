const {
  cutoffRepository,
  reimbursementRepository,
  reimbursementItemRepository,
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
  viewDetailsReimbursement,
});

const ApprovalReimbursement = require('./ApprovalReimbursement');
const approvalReimbursement = ApprovalReimbursement({
  reimbursementRepository,
});

const SubmitReimbursement = require('./SubmitReimbursement');
const submitReimbursement = SubmitReimbursement({
  cutoffRepository,
  reimbursementRepository,
});

const SearchByEmployee = require('./SearchByEmployee');
const searchByEmployee = SearchByEmployee({
  reimbursementRepository,
});

module.exports = {
  viewDetailsReimbursement,
  fileReimbursement,
  printReimbursement,
  approvalReimbursement,
  submitReimbursement,
  searchByEmployee,
};
