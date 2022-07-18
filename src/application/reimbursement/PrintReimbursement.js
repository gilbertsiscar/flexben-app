const PrintReimbursement = ({
  categoryRepository,
  reimbursementItemRepository,
  reimbursementRepository,
}) => {
  return async (id = '') => {
    const reimbursement = await reimbursementRepository.findById(id);
    const categories = await categoryRepository.findAll();
    const reimbursementItems =
      await reimbursementItemRepository.findByReimbursementId(id);

    const obj = {};
    categories.forEach((category) => {
      obj[category.code] = {
        name: category.category_name,
        items: [],
      };
    });

    reimbursementItems.forEach((item) => {
      obj[item.code].items.push(item);
    });

    const mapItems = Object.values(obj);

    const parseDate = new Date(reimbursement.date_submitted);
    const year = parseDate.getFullYear();
    const month = parseDate.getMonth() + 1;
    const day = parseDate.getDate();
    const fileDate = `${month < 10 ? '0' + month : month}${
      day < 10 ? '0' + day : day
    }${year}`;

    const fileName = `reimbursement_${reimbursement.lastname}_${reimbursement.firstname}_${fileDate}_${reimbursement.transaction_number}`;
    return {
      text: printableForm(reimbursement) + printDetails(mapItems),
      fileName,
    };
  };
};

function printableForm(props = {}) {
  return `Employee Name: ${props.lastname}, ${props.firstname}\nEmployee Number: ${props.employee_number} \nDate Submitted: ${props.date_submitted}\nTransaction Number: ${props.transaction_number}\nAmount: ${props.total_reimbursement_amount}\nStatus: ${props.reimbursement_status}\n`;
}

function printDetails(props = [{}]) {
  let text = `\n=== DETAILS ===\n`;

  props.forEach((item) => {
    text += `Category: ${item.name}\n`;

    if (item.items.length > 0) {
      item.items.forEach((val, idx) => {
        text += `Item #${idx + 1}\nDate: ${val.date_added}\nOR Number: ${
          val.or_number
        }\nName of Establishment: ${
          val.name_of_establishment
        }\nTIN of Establishment: ${val.tin_of_establishment}\nAmount: ${
          val.amount
        }\nStatus: ${val.reimbursement_dettails_status}\n\n`;
      });
    } else {
      text += `N/A\n\n`;
    }
  });

  return text;
}

module.exports = PrintReimbursement;
