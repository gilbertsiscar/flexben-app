const {
  reimbursementRepository,
  reimbursementItemRepository,
} = require('../../repositories');

const AddReimbursementItem = require('./AddReimbursementItem');
const addReimbursementItem = AddReimbursementItem({
  reimbursementRepository,
  reimbursementItemRepository,
});

const RemoveReimbursementItem = require('./RemoveReimbursementItem');
const removeReimbursementItem = RemoveReimbursementItem({
  reimbursementRepository,
  reimbursementItemRepository,
});

module.exports = {
  addReimbursementItem,
  removeReimbursementItem,
};
