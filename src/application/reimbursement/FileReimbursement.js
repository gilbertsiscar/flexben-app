const FileReimbursement = ({ cutoffRepository, reimbursementRepository }) => {
  return async (employeeId = '', cutoffId = '') => {
    const cutoff = await cutoffRepository.findById(cutoffId);
    if (!cutoff) {
      throw new Error('Cutoff not found');
    }

    if (cutoff.cutoff_end_date < new Date()) {
      throw new Error('Cutoff is already closed');
    }

    const { insertId } = await reimbursementRepository.save({
      employeeId,
      cutoffId,
      amount: 0,
      status: 'DRAFT',
    });

    return { insertId };
  };
};

module.exports = FileReimbursement;
