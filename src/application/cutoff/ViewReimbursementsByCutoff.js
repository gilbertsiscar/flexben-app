const ViewReimbursementsByCutoff = ({
  cutoffRepository,
  reimbursementRepository,
}) => {
  return async (cutoffId = '') => {
    const cutoff = await cutoffRepository.findById(cutoffId);
    if (!cutoff) {
      throw new Error('Cutoff not found');
    }

    const reimbursements = await reimbursementRepository.findByCutoffId(
      cutoffId
    );

    return {
      cutoff,
      reimbursements,
    };
  };
};

module.exports = ViewReimbursementsByCutoff;
