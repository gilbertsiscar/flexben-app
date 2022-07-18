class CutoffRepository {
  constructor(db) {
    this.db = db;
  }

  async findById(id = '') {
    const sql = `SELECT * FROM cutoff WHERE cutoff_id = ?`;
    const result = await this.handleQuery(sql, [id]);
    return result[0];
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
