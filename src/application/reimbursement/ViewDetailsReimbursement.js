const ViewDetailsReimbursement = ({
  reimbursementRepository,
  reimbursementItemRepository,
}) => {
  return async (id, itemsId = '') => {
    const reimbursement = await reimbursementRepository.findById(id);
    if (!reimbursement) {
      throw new Error('Reimbursement not found');
    }

    const reimbursementItems =
      await reimbursementItemRepository.findByReimbursementId(itemsId);

    return {
      reimbursement,
      reimbursementItems,
    };
  };
};

module.exports = ViewDetailsReimbursement;
