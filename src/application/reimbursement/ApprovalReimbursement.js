const ApprovalReimbursement = ({ reimbursementRepository }) => {
  const decisions = new Map();
  decisions.set('APPROVED', 'APPROVED');
  decisions.set('REJECTED', 'REJECTED');

  return async (id = '', decision = '') => {
    const reimbursement = await reimbursementRepository.findById(id);
    if (!reimbursement) {
      throw new Error('Reimbursement not found');
    }

    if (!decisions.has(decision)) {
      throw new Error('Invalid decision');
    }

    if (reimbursement.reimbursement_status === 'DRAFT') {
      throw new Error('Reimbursement should be submitted before approval');
    }

    if (reimbursement.reimbursement_status === decisions.get(decision)) {
      throw new Error(`Reimbursement is already ${decision}`);
    }

    await reimbursementRepository.updateStatus(id, decisions.get(decision));
    return 'Reimbursement is ${decision}';
  };
};

module.exports = ApprovalReimbursement;
