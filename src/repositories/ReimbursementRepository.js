class ReimbursementRepository {
  constructor(db) {
    this.db = db;
  }

  save(reimbursement = {}) {
    const sql = `INSERT INTO reimbursement (employee_id, cutoff_id, total_reimbursement_amount, date_submitted, reimbursement_status, transaction_number) VALUES (?, ?, ?, ?, ?, ?)`;

    const params = [
      reimbursement.employeeId,
      reimbursement.cutoffId,
      reimbursement.amount,
      reimbursement.dateSubmitted,
      reimbursement.status,
      reimbursement.transactionNumber,
    ];

    // return value?
    return this.handleQuery(sql, params);
  }

  async findById(id = '') {
    const sql = `SELECT * FROM reimbursement JOIN cutoff ON reimbursement.cutoff_id = cutoff.cutoff_id JOIN employee ON reimbursement.employee_id = employee.employee_id WHERE reimbursement_id = ?`;
    const result = await this.handleQuery(sql, [id]);
    return result[0];
  }

  async findByCutoffId(id = '') {
    const sql = `SELECT * FROM reimbursement JOIN employee ON reimbursement.employee_id = employee.employee_id WHERE cutoff_id = ? ORDER BY FIELD(reimbursement_status, 'SUBMITTED', 'DRAFT')`;

    return this.handleQuery(sql, [id]);
  }

  async updateStatus(id = '', status = '') {
    const sql = `UPDATE reimbursement SET reimbursement_status = ?, date_submitted = NOW() WHERE reimbursement_id = ?`;
    return this.handleQuery(sql, [status, id]);
  }

  // ¯\_(ツ)_/¯
  searchByEmployeeDetails(filters = {}) {
    let sql = `SELECT fr.*, fd.* FROM flex_reimbursement fr 
      JOIN flex_reimbursement_details fd ON fr.flex_reimbursement_id = fd.flex_reimbursement_id 
      JOIN employee e ON e.employee_id = fr.employee_id`;

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
        condition += `e.${key} = ?${
          index === parsedFilters.length - 1 ? '' : ' AND '
        }`;
      });
    }

    if (condition) {
      sql += ` WHERE ${condition}`;
    }

    return this.handleQuery(sql, params);
  }

  async getTransactionNumber(id) {
    const sql = `SELECT c.code, cu.cutoff_id, cu.cutoff_end_date, r.reimbursement_id FROM reimbursement r JOIN cutoff cu ON r.cutoff_id = cu.cutoff_id JOIN employee e ON r.employee_id = e.employee_id JOIN company c ON e.company_id = c.company_id WHERE r.reimbursement_id = ?`;

    const result = await this.handleQuery(sql, [id]);
    return result[0];
  }

  async updateTransactionNumber(id, transactionNumber) {
    const sql = `UPDATE reimbursement SET transaction_number = ? WHERE reimbursement_id = ?`;
    await this.handleQuery(sql, [transactionNumber, id]);
    return 'Success';
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
  return new ReimbursementRepository(db);
};
