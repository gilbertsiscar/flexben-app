const express = require('express');
const {
  printController,
  submitController,
  fileController,
  viewController,
  approveController,
  searchByEmployeeController,
} = require('../controllers/ReimbursementController');
const {
  addItemController,
  removeItemController,
  configureMinAmount,
} = require('../controllers/ReimbursementItemController');
const roleAuthentication = require('../middlewares/RoleAuthentication');
const router = express.Router();

router.post('/', fileController);
router.put('/:id', roleAuthentication(['hr']), configureMinAmount);
router.get('/:id/print', printController);
router.post('/:id/submit', submitController);

router.get('/:id/items', roleAuthentication(['hr']), viewController);
router.post('/:id/items', addItemController);
router.put('/:id/items', roleAuthentication(['hr']), approveController);
router.delete('/:id/items/:itemsId', removeItemController);
router.get(
  '/employees',
  roleAuthentication(['hr']),
  searchByEmployeeController
);

module.exports = router;
