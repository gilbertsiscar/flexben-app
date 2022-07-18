const SubmitReimbursement = ({ reimbursementRepository }) => {
  return async (id = '') => {
    const reimbursement = await reimbursementRepository.findById(id);
    if (!reimbursement) {
      throw new Error('Reimbursement not found');
    }

    await reimbursementRepository.updateStatus(id, 'SUBMITTED');

    const transactionNumber =
      await reimbursementRepository.getTransactionNumber(id);
    const format =
      transactionNumber.code +
      '-' +
      transactionNumber.cutoff_id +
      '-' +
      transactionNumber.cutoff_end_date + // format this to YYYYMMDD
      '-' +
      transactionNumber.reimbursement_id;
    await reimbursementRepository.updateTransactionNumber(id, format);

    return 'Success';
  };
};

module.exports = SubmitReimbursement;
