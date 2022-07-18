const {
  viewDetailsReimbursement,
  approvalReimbursement,
  fileReimbursement,
  printReimbursement,
  submitReimbursement,
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
    const { id, itemsId } = req.params;
    const reimbursement = await viewDetailsReimbursement(id, itemsId);
    const status = 200;
    res.status(status).json(MakeReponse(status, { reimbursement }));
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
    const approve = await approvalReimbursement(id, decision);
    const status = 200;
    res.status(status).json(MakeReponse(status, { approve }));
  } catch (error) {
    next(error);
  }
};

exports.printController = async (req, res, next) => {
  try {
    const text = await printReimbursement(req.params.id);
    res.set({
      'Content-Type': 'text/plain',
      'Content-Disposition': 'attachment; filename="myfile.txt"',
    });
    res.send(text);
  } catch (error) {
    next(error);
  }
};
