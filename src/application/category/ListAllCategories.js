const ListAllCategories = ({ categoryRepository }) => {
  return () => {
    return categoryRepository.findAll();
  };
};

module.exports = ListAllCategories;
