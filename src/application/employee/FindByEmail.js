const FindByEmail = ({ employeeRepository }) => {
  return async (id) => {
    const employee = await employeeRepository.findByEmail(id);
    if (!employee) {
      throw new Error('Employee not found');
    }
    return employee;
  };
};

module.exports = FindByEmail;
