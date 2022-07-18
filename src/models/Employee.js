module.exports = class Employee {
  constructor(employee) {
    this.name = employee.name;
    this.firstName = employee.firstName;
    this.lastName = employee.lastName;
    this.email = employee.email;
    this.isActive = employee.isActive;
    this.companyId = employee.companyId;
    this.roleId = employee.roleId;
  }
};
