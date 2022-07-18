const {
  cutoffRepository,
  reimbursementRepository,
} = require('../../repositories');

const ViewReimbursementsByCutoff = require('./ViewReimbursementsByCutoff');
const viewReimbursementsByCutoff = ViewReimbursementsByCutoff({
  cutoffRepository,
  reimbursementRepository,
});

module.exports = {
  viewReimbursementsByCutoff,
};
