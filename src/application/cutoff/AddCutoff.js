const Cutoff = require('../../models/Cutoff');

const AddCutoff = ({ cutoffRepository }) => {
  return async (cutoffBody) => {
    const cutoff = new Cutoff(cutoffBody);
    cutoff.validate();

    const inserted = await cutoffRepository.save(cutoff);

    return { insertId: inserted.insertId };
  };
};

module.exports = AddCutoff;
