module.exports = class ReimbursementItem {
  constructor(reimbursementItem = {}) {
    this.reimbursementId = reimbursementItem.reimbursementId;
    this.categoryId = reimbursementItem.categoryId;
    this.orNumber = reimbursementItem.orNumber;
    this.nameOfEstablishment = reimbursementItem.nameOfEstablishment;
    this.tinOfEstablishment = reimbursementItem.tinOfEstablishment;
    this.amount = reimbursementItem.amount;
    this.status = reimbursementItem.status;
    this.dateAdded = this.setDate(reimbursementItem.dateAdded || new Date());
  }

  validate() {
    if (this.dateAdded) {
      this.validateDate(this.dateAdded);
    }
  }

  validateDate(date) {
    const today = Date.now();
    if (new Date(date) > today) {
      throw new Error('Date added cannot be greater than today');
    }

    const yearNow = new Date().getFullYear();
    if (new Date(date).getFullYear() !== yearNow) {
      console.log(yearNow, new Date(date).getFullYear());
      throw new Error('Date must be within the current year');
    }
  }

  setDate(date) {
    const ts = new Date(date);
    ts.setMinutes(ts.getMinutes() - ts.getTimezoneOffset()); // set timezone to UTC
    return ts.toISOString().slice(0, 19).replace('T', ' ');
  }
};
