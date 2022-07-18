class CategoryRepository {
  constructor(db) {
    this.db = db;
  }

  findAll() {
    const sql = `SELECT * FROM category`;
    return this.handleQuery(sql);
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
  return new CategoryRepository(db);
};
