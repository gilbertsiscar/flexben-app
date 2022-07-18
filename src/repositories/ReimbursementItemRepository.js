class ReimbursementItemRepository {
  constructor(db) {
    this.db = db;
  }

  findByReimbursementId(id = '') {
    const sql = `SELECT * FROM reimbursement_details r JOIN category c ON r.category_id = c.category_id 
    WHERE r.reimbursement_id = ?`;

    return this.handleQuery(sql, [id]);
  }

  save(reimbursementItem = {}) {
    const sql = `INSERT INTO reimbursement_details (reimbursement_id, category_id, or_number, name_of_establishment, tin_of_establishment, amount, date_added)
    VALUES (?, ?, ?, ?, ?, ?, ?)`;

    const params = [
      reimbursementItem.reimbursementId,
      reimbursementItem.categoryId,
      reimbursementItem.orNumber,
      reimbursementItem.nameOfEstablishment,
      reimbursementItem.tinOfEstablishment,
      reimbursementItem.amount,
      reimbursementItem.dateAdded,
    ];

    return this.handleQuery(sql, params);
  }

  remove(id = '') {
    const sql = `DELETE FROM reimbursement_details WHERE reimbursement_details_id = ?`;
    return this.handleQuery(sql, [id]);
  }

  handleQuery(sql = '', params = []) {
    return new Promise((resolve, reject) => {
      connection.query(sql, params, (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    });
  }
}

module.exports = (db) => {
  return new ReimbursementItemRepository(db);
};
