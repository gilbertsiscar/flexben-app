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
    const mapReimbursements = reimbursements.map((reimbursement) => {
      return {
        transcationNumber: reimbursement.transaction_number,
        employeeNumber: reimbursement.employee_number,
        employeeName: `${reimbursement.lastname}, ${reimbursement.firstname}`,
        amount: reimbursement.total_reimbursement_amount,
        dateSubmitted: reimbursement.date_submitted,
        status: reimbursement.reimbursement_status,
      };
    });

    return {
      cutoff: {
        id: cutoff.cutoff_id,
        startDate: cutoff.cutoff_start_date,
        endDate: cutoff.cutoff_end_date,
        capAmount: cutoff.cutoff_cap_amount,
        description: cutoff.cutoff_description,
      },
      reimbursements: mapReimbursements,
    };
  };
};

module.exports = ViewReimbursementsByCutoff;
