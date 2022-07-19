const {
  viewDetailsReimbursement,
  approvalReimbursement,
  fileReimbursement,
  printReimbursement,
  submitReimbursement,
  searchByEmployee,
} = require('../application/reimbursement');
const MakeReponse = require('../MakeResponse');

exports.fileController = async (req, res, next) => {
  try {
    const reimbursement = await fileReimbursement(req.id, req.body.cutoffId);
    const status = 200;
    res.status(status).json(MakeReponse(status, { reimbursement }));
  } catch (error) {
    next(error);
  }
};

exports.viewController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const reimbursement = await viewDetailsReimbursement(id);
    const status = 200;
    res.status(status).json(MakeReponse(status, reimbursement));
  } catch (error) {
    next(error);
  }
};

exports.submitController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const submit = await submitReimbursement(id);
    const status = 200;
    res.status(status).json(MakeReponse(status, { submit }));
  } catch (error) {
    next(error);
  }
};

exports.approveController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { decision } = req.body;
    const reimbursement = await approvalReimbursement(id, decision);
    const status = 200;
    res.status(status).json(MakeReponse(status, { reimbursement }));
  } catch (error) {
    next(error);
  }
};

exports.printController = async (req, res, next) => {
  try {
    const { text, fileName } = await printReimbursement(req.params.id);
    res.set({
      'Content-Type': 'text/plain',
      'Content-Disposition': `attachment; filename=${fileName}.txt`,
    });
    res.send(text);
  } catch (error) {
    next(error);
  }
};

exports.searchByEmployeeController = async (req, res, next) => {
  try {
    const reimbursement = await searchByEmployee(req.query);
    const status = 200;
    res.status(status).json(MakeReponse(status, reimbursement));
  } catch (error) {
    next(error);
  }
};
