module.exports = class Cutoff {
  constructor(cutoff = {}) {
    this.startDate = this.setStartDate(cutoff.startDate);
    this.endDate = this.setEndDate(cutoff.endDate);
    this.isActive = cutoff.isActive;
    this.capAmount = cutoff.capAmount;
    this.description = cutoff.description;
  }

  validate() {
    if (!this.endDate < Date.now()) {
      throw new Error('Cutoff end date cannot be greater than today');
    }

    if (!this.isActive) {
      throw new Error('Cutoff is_active is required');
    }

    if (this.startDate >= this.endDate) {
      throw new Error('Cutoff start date must be before end date');
    }
  }

  setStartDate(date) {
    if (!date) {
      throw new Error('Cutoff start date is required');
    }

    const ts = new Date(date);
    ts.setMinutes(ts.getMinutes() - ts.getTimezoneOffset()); // set timezone to UTC
    return ts.toISOString().slice(0, 19).replace('T', ' ');
  }

  setEndDate(date) {
    if (!date) {
      throw new Error('Cutoff end date is required');
    }

    const ts = new Date(date);
    ts.setMinutes(ts.getMinutes() - ts.getTimezoneOffset()); // set timezone to UTC
    return ts.toISOString().slice(0, 19).replace('T', ' ');
  }
};
