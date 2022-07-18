const SearchByEmployee = ({
  employeeRepository,
  reimbursementRepository,
  reimbursementItemRepository,
}) => {
  return async ({ id = '', firstName = '', lastName = '' }) => {
    const employee = await employeeRepository.findById(id);
    if (!employee) {
      throw new Error('Employee not found');
    }
    const reimbursements = await reimbursementRepository.findByEmployeeDetails({
      employee_id: id,
      firstname: firstName,
      lastname: lastName,
    });

    for await (const reimbursement of reimbursements) {
      const reimbursementItems =
        await reimbursementItemRepository.findByReimbursementId(
          reimbursement.reimbursement_id
        );

      reimbursement.items = reimbursementItems.map((item) => {
        return {
          orNumber: item.or_number,
          amount: item.amount,
          establishment: {
            name: item.name_of_establishment,
            tin: item.tin_of_establishment,
          },
          category: item.category_name,
          status: item.reimbursement_details_status,
        };
      });
    }

    const mapReimbursements = reimbursements.map((reimbursement) => {
      return {
        totalAmount: reimbursement.total_reimbursement_amount,
        dateSubmitted: reimbursement.date_submitted,
        status: reimbursement.reimbursement_status,
        transactionNumber: reimbursement.transaction_number,
        items: reimbursement.items,
      };
    });

    return {
      employeeName: `${employee.firstname} ${employee.lastname}`,
      employeeNumber: employee.employee_number,
      reimbursements: mapReimbursements,
    };
  };
};

module.exports = SearchByEmployee;
