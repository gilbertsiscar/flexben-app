const RemoveReimbursementItem = ({
  reimbursementRepository,
  reimbursementItemRepository,
}) => {
  return async (reimbursementId = '', reimbursementItemId = '') => {
    const reimbursement = await reimbursementRepository.findById(
      reimbursementId
    );
    if (!reimbursement) {
      throw new Error('Reimbursement not found');
    }

    if (reimbursement.reimbursement_status === 'SUBMITTED') {
      throw new Error('Reimbursement is already submitted');
    }

    return reimbursementItemRepository.remove(reimbursementItemId);
  };
};

module.exports = RemoveReimbursementItem;
