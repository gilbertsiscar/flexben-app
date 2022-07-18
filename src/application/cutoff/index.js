const {
  cutoffRepository,
  reimbursementRepository,
} = require('../../repositories');

const ViewReimbursementsByCutoff = require('./ViewReimbursementsByCutoff');
const viewReimbursementsByCutoff = ViewReimbursementsByCutoff({
  cutoffRepository,
  reimbursementRepository,
});

const AddCutoff = require('./AddCutoff');
const addCutoff = AddCutoff({
  cutoffRepository,
});

module.exports = {
  viewReimbursementsByCutoff,
  addCutoff,
};
