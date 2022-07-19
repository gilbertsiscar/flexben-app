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

    const mapItems = reimbursementItems.map((item) => {
      return {
        dateAdded: item.date_added,
        orNumber: item.or_number,
        establishment: {
          name: item.name_of_establishment,
          tin: item.tin_of_establishment,
        },
        amount: item.amount,
        category: item.category_name,
      };
    });

    return {
      reimbursement: {
        employeeNumber: reimbursement.employee_number,
        employeeName: `${reimbursement.lastname}, ${reimbursement.firstname}`,
        dateSubmitted: reimbursement.date_submitted,
        totalAmount: reimbursement.total_reimbursement_amount,
        transactionNumber: reimbursement.transaction_number,
        status: reimbursement.reimbursement_status,
        reimbursementItems: mapItems,
      },
    };
  };
};

module.exports = ViewDetailsReimbursement;
