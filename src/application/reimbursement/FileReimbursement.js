const FileReimbursement = ({ cutoffRepository, reimbursementRepository }) => {
  return async (employeeId = '', cutoffId = '') => {
    const cutoff = await cutoffRepository.findById(cutoffId);
    if (!cutoff) {
      throw new Error('Cutoff not found');
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
