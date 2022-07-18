const { viewReimbursementsByCutoff } = require('../application/cutoff');
const MakeReponse = require('../MakeResponse');

exports.viewReimbursementsController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const reimbursements = await viewReimbursementsByCutoff(id);
    const status = 200;
    res.status(status).json(MakeReponse(status, { reimbursements }));
  } catch (error) {
    next(error);
  }
};
