class CutoffRepository {
  constructor(db) {
    this.db = db;
  }

  async findById(id = '') {
    const sql = `SELECT * FROM cutoff WHERE cutoff_id = ?`;
    const result = await this.handleQuery(sql, [id]);
    return result[0];
  }

  save(cutoff = {}) {
    const sql = `INSERT INTO cutoff (cutoff_start_date, cutoff_end_date, is_active, cutoff_cap_amount, cutoff_description) VALUES (?, ?, ?, ?, ?)`;

    const params = [
      cutoff.startDate,
      cutoff.endDate,
      cutoff.isActive,
      cutoff.capAmount,
      cutoff.description,
    ];

    return this.handleQuery(sql, params);
  }

  handleQuery(sql = '', params = []) {
    return new Promise((resolve, reject) => {
      this.db.query(sql, params, (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    });
  }
}

module.exports = (db) => {
  return new CutoffRepository(db);
};
