module.exports = class Reimbursement {
  constructor(reimbursement = {}) {
    this.employeeId = reimbursement.employeeId;
    this.cutoffId = reimbursement.cutoffId;
    this.amount = reimbursement.amount;
    this.dateSubmitted = reimbursement.dateSubmitted;
    this.status = reimbursement.status;
    this.transactionNumber = reimbursement.transactionNumber;
  }
};
