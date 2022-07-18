const SearchByEmployee = ({ reimbursementRepository }) => {
  return (filters = {}) => {
    return reimbursementRepository.searchByEmployeeDetails(filters);
  };
};

module.exports = SearchByEmployee;
