const GetDetails = ({ employeeRepository }) => {
  return async (id = '') => {
    const employee = await employeeRepository.findById(id);
    if (!employee) {
      throw new Error('Employee not found');
    }

    return {
      firstName: employee.firstname,
      lastName: employee.lastname,
      role: employee.role_name,
    };
  };
};

module.exports = GetDetails;
