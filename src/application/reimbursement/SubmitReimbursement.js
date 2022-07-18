const ApiError = require('../../error-handler/ApiError');

const SubmitReimbursement = ({ cutoffRepository, reimbursementRepository }) => {
  return async (id = '') => {
    const reimbursement = await reimbursementRepository.findById(id);
    if (!reimbursement) {
      throw new ApiError('Reimbursement not found', 400);
    }

    const cutoff = await cutoffRepository.findById(reimbursement.cutoff_id);
    if (!cutoff) {
      throw new ApiError('Cutoff not found', 400);
    }

    if (cutoff.cutoff_end_date < new Date()) {
      throw new ApiError('Cutoff is already closed', 400);
    }

    if (reimbursement.reimbursement_status === 'SUBMITTED') {
      throw new ApiError('Reimbursement is already submitted', 400);
    }

    await reimbursementRepository.updateStatus(id, 'SUBMITTED');

    const transactionNumber =
      await reimbursementRepository.getTransactionNumber(id);

    const parseDate = new Date(transactionNumber.cutoff_end_date);
    const year = parseDate.getFullYear();
    const month = parseDate.getMonth() + 1;
    const date = parseDate.getDate();
    const fomatDate = `${year}${month < 10 ? '0' + month : month}${
      date < 10 ? '0' + date : date
    }`;
    const format =
      transactionNumber.code +
      '-' +
      transactionNumber.cutoff_id +
      '-' +
      fomatDate +
      '-' +
      transactionNumber.reimbursement_id;
    await reimbursementRepository.updateTransactionNumber(id, format);

    return {
      message: `Reimbursement with id = ${id} was submitted successfully`,
      transactionNumber: format,
    };
  };
};

module.exports = SubmitReimbursement;
