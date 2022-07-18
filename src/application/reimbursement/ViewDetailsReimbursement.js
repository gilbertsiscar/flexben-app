const ViewDetailsReimbursement = ({
  reimbursementRepository,
  reimbursementItemRepository,
}) => {
  return async (id) => {
    const reimbursement = await reimbursementRepository.findById(id);
    if (!reimbursement) {
      throw new Error('Reimbursement not found');
    }

    const reimbursementItems =
      await reimbursementItemRepository.findByReimbursementId(id);

    return {
      reimbursement,
      reimbursementItems,
    };
  };
};

module.exports = ViewDetailsReimbursement;
