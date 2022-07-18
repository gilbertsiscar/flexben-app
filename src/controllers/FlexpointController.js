const { calculateFlexpoint } = require('../application/flex-point');
const MakeReponse = require('../MakeResponse');

exports.calculatePoints = (req, res, next) => {
  try {
    const { monthlyRate, flexCredits } = req.query;
    const flexpoint = calculateFlexpoint.calculate(monthlyRate, flexCredits);
    const status = 200;
    res.status(status).json(MakeReponse(status, { flexpoint }));
  } catch (error) {
    next(error);
  }
};

exports.configureTax = (req, res, next) => {
  try {
    const { taxRate } = req.body;
    calculateFlexpoint.setTax(taxRate);
    const status = 200;
    res.status(status).json(MakeReponse(status, { taxRate }));
  } catch (error) {
    next(error);
  }
};
