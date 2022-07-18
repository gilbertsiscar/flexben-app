const { categoryRepository } = require('../../repositories');

const ListAllCategories = require('./ListAllCategories');
const listAllCategories = ListAllCategories({ categoryRepository });

module.exports = { listAllCategories };
