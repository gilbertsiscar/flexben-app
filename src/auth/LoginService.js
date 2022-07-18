const { generateToken } = require('../jwt');

const LoginService = ({ employeeRepository }) => {
  return async ({ email }) => {
    const employee = await employeeRepository.findByEmail(email);
    if (!employee) {
      throw new Error('Invalid credentials');
    }

    return generateToken({
      id: employee.employee_id,
      name: employee.firstname,
      role: employee.role_name,
    });
  };
};

module.exports = LoginService;
