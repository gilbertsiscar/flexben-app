const ApiError = require('../../error-handler/ApiError');

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

    const removedItem = await reimbursementItemRepository.remove(
      reimbursementItemId
    );
    if (removedItem.affectedRows === 0) {
      throw new ApiError('Reimbursement item not found', 404);
    }

    return {
      message: `Reimbursement item with id = ${reimbursementItemId} was removed successfully`,
    };
  };
};

module.exports = RemoveReimbursementItem;
