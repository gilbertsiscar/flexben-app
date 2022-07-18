const { listAllCategories } = require('../application/category');
const MakeReponse = require('../MakeResponse');

exports.list = async (req, res, next) => {
  try {
    const categories = await listAllCategories();
    const status = 200;
    res.status(status).json(MakeReponse(status, { categories }));
  } catch (error) {
    next(error);
  }
};
