const PrintReimbursement = ({ viewDetailsReimbursement }) => {
  return async (id = '') => {
    const { reimbursement, reimbursementItems } =
      await viewDetailsReimbursement(id);

    return printableForm(reimbursement);
  };
};

function printableForm(props = {}) {
  return `
    Employee Name: ${props.lastname}, ${props.firstname}
    Employee Number: ${props.employee_number}
    Date Submitted: ${props.date_submitted}
    Transaction Number: ${props.transaction_number}
    Amount: ${props.total_reimbursement_amount}
    Status: ${props.reimbursement_status}
    `;
}

function printDetails() {}

module.exports = PrintReimbursement;

// read categories from database
