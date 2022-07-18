const {
  viewReimbursementsByCutoff,
  addCutoff,
} = require('../application/cutoff');
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

exports.addController = async (req, res, next) => {
  try {
    const cutoff = await addCutoff(req.body);
    const status = 201;
    res.status(status).json(MakeReponse(status, { cutoff }));
  } catch (error) {
    next(error);
  }
};
