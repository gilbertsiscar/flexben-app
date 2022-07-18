const ApiError = require('../../error-handler/ApiError');
const ReimbursementItem = require('../../models/ReimbursementItem');

const AddReimbursementItem = ({
  reimbursementRepository,
  reimbursementItemRepository,
}) => {
  let min_amount = 500;

  return {
    getMinAmount: () => min_amount,
    setMinAmount: (val) => {
      min_amount = val;
    },
    add: async (reimbursementId = '', reimbursementItemBody = {}) => {
      const reimbursementItem = new ReimbursementItem(reimbursementItemBody);
      reimbursementItem.validate();

      if (reimbursementItem.amount < min_amount) {
        throw new ApiError(
          `Amount must be greater than or equal to ${min_amount}`,
          400
        );
      }

      const reimbursement = await reimbursementRepository.findById(
        reimbursementId
      );
      if (!reimbursement) {
        throw new ApiError('Reimbursement not found', 400);
      }

      if (
        reimbursement.cutoff_cap_amount <
        reimbursementItem.amount + reimbursement.total_reimbursement_amount
      ) {
        throw new ApiError(
          `Total reimbursement amount = ${reimbursement.total_reimbursement_amount}, exceeds cutoff cap amount = ${reimbursement.cutoff_cap_amount}`,
          400
        );
      }

      reimbursementItem.reimbursementId = reimbursementId;
      const inserted = await reimbursementItemRepository.save(
        reimbursementItem
      );
      const { total_reimbursement_amount } =
        await reimbursementRepository.findById(reimbursementId);

      return {
        insertId: inserted.insertId,
        totalAmount: total_reimbursement_amount,
      };
    },
  };
};

module.exports = AddReimbursementItem;
