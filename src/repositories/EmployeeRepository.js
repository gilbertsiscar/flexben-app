class EmployeeRepository {
  constructor(db) {
    this.db = db;
  }

  search(filters = {}) {
    let sql = `SELECT * from employee`;

    const params = [];
    const parsedFilters = Object.keys(filters).filter((filter) => {
      if (filters[filter]) {
        params.push(filters[filter]);
        return filter;
      }
    });

    let condition = '';
    if (parsedFilters) {
      parsedFilters.forEach((key, index) => {
        condition += `${key} = ?${
          index === parsedFilters.length - 1 ? '' : ' AND '
        }`;
      });
    }

    if (condition) {
      sql += ` WHERE ${condition}`;
    }
    return this.handleQuery(sql, params);
  }

  async findByEmail(email) {
    const sql =
      'SELECT * FROM employee e JOIN roles r ON e.role_id = r.role_id WHERE email = ?';
    const result = await this.handleQuery(sql, [email]);
    return result[0];
  }

  async findById(id = '') {
    const sql = `SELECT * FROM employee e JOIN roles r ON e.role_id = r.role_id WHERE e.employee_id = ?`;
    const result = await this.handleQuery(sql, [id]);
    return result[0];
  }

  handleQuery(sql, params) {
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
  return new EmployeeRepository(db);
};
