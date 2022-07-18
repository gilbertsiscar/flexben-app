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

    return reimbursementRepository.updateStatus(id, decisions.get(decision));
  };
};

module.exports = ApprovalReimbursement;
