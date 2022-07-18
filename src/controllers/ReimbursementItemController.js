const {
  addReimbursementItem,
  removeReimbursementItem,
} = require('../application/reimbursement-item');
const MakeReponse = require('../MakeResponse');

exports.addItemController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const reimbursementItem = await addReimbursementItem.add(id, req.body);
    const status = 201;
    res.status(status).json(MakeReponse(status, { reimbursementItem }));
  } catch (error) {
    next(error);
  }
};

exports.removeItemController = async (req, res, next) => {
  try {
    const { id, itemsId } = req.params;

    const removeItem = await removeReimbursementItem(id, itemsId);

    const status = 200;
    res.status(status).json(MakeReponse(status, { removeItem }));
  } catch (error) {
    next(error);
  }
};
