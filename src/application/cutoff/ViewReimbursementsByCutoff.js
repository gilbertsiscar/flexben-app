const ViewReimbursementsByCutoff = ({
  cutoffRepository,
  reimbursementRepository,
}) => {
  return async (id = '') => {
    const cutoff = await cutoffRepository.findById(id);
    if (!cutoff) {
      throw new Error('Cutoff not found');
    }

    const reimbursements = await reimbursementRepository.findByCutoffId(id);

    return {
      cutoff,
      reimbursements,
    };
  };
};

module.exports = ViewReimbursementsByCutoff;
